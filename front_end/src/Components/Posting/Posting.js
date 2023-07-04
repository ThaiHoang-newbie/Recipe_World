import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Posting.css';
import axios from 'axios';
import { initializeApp } from 'firebase/app';
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';

function Posting() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [titleInputed, setTitleInputed] = useState('');
  const [uploadedImages, setUploadedImages] = useState([]);

  useEffect(() => {
    let isMounted = true;
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
    return () => {
      isMounted = false;
    };
  }, [editorState]);

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/api/get-categories');
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  
  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleTitleInputed = (event) => {
    setTitleInputed(event.target.value);
  };

  const createCategory = async (categoryName) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/categories', {
        name: categoryName,
      });
      if (response.data.message === 'Successful') {
        fetchCategories();
        alert('Add new category successful');
      } else {
        alert('This category already exists');
      }
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const firebaseConfig = {
    apiKey: "AIzaSyA4bFj14tVc9IT-5yL7tbvyvB2sCy7hbWM",
    authDomain: "recipeworld-8ecc6.firebaseapp.com",
    projectId: "recipeworld-8ecc6",
    storageBucket: "recipeworld-8ecc6.appspot.com",
    messagingSenderId: "725588893040",
    appId: "1:725588893040:web:f83005b7b51cca25fbc3b5",
    measurementId: "G-52RMZMLKKQ"
  };

  const app = initializeApp(firebaseConfig);
  const storage = getStorage(app);

  // Handle upload images
  const handleImageUpload = async (file) => {
    try {
      const metadata = {
        contentType: 'image/jpeg'
      };
      const storageRef = ref(storage, 'post-images/' + file.name);
      const uploadTask = uploadBytesResumable(storageRef, file, metadata);

      uploadTask.on('state_changed',
        (snapshot) => {
          const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log('Upload is ' + progress + '% done');
          switch (snapshot.state) {
            case 'paused':
              console.log('Upload is paused');
              break;
            case 'running':
              console.log('Upload is running');
              break;
          }
        },
        (error) => {
          console.error('Error uploading image:', error);
        },
        () => {
          getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            console.log('Image uploaded:', downloadURL);
          }).catch((error) => {
            console.error('Error getting download URL:', error);
          });
        }
      );
    } catch (error) {
      console.error('Error uploading image:', error);
    }
  };

  const handleImageDrop = (event) => {
    event.preventDefault();
    const files = event.dataTransfer.files;
    const imageFiles = Array.from(files).filter((file) => file.type.startsWith('image/'));
    setUploadedImages(imageFiles);
    imageFiles.forEach((file) => {
      handleImageUpload(file);
    });
  };


  const saveData = async () => {
    const contentState = editorState.getCurrentContent();
    const contentRaw = JSON.stringify(convertToRaw(contentState));

    if (!sessionStorage.getItem('obtainer_id')) {
      alert("You must register to use this function");
      setTimeout(() => {
        window.location = "http://localhost:3000/login"
      }, 100);
      return;
    }

    if (selectedCategory === '') {
      alert("Please select a category");
      return;
    }
    
    if (titleInputed === '') {
      alert("Please enter the title");
      return;
    }

    if (contentState.hasText() === false) {
      alert("Please enter some content");
      return;
    }

    if (uploadedImages.length === 0) {
      alert("Please upload at least one image");
      return;
    }

    // let obtainers_id = sessionStorage.getItem('obtainers_id');
    // try {
    //   const response = await axios.post('http://localhost:8000/api/add-post', {
    //     content: contentRaw,
    //     obtainers_id: obtainers_id,
    //     category_id: selectedCategory,
    //   });

    //   console.log('Data saved successfully:', response.data);
    // } catch (error) {
    //   console.error('Error saving data:', error);
    // }
  };

  return (
    <div>
      <header className="App-header">Create your own new recipe</header>
      <div className="wrap-category mb-3">
        <span htmlFor="category" className="form-label">
          Select a category:
        </span>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="form-select">
          <option value="">-- Select a category --  </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button className="btn btn-success rounded-pill px-4 py-2 shadow-lg" onClick={() => createCategory(prompt('Enter the new category name:'))}>
          +
        </button>
      </div>

      <input type='text' placeholder='Title' className='input-title' onChange={handleTitleInputed}/>

      <Editor
        editorState={editorState}
        placeholder="Content"
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        toolbar={{
          options: ['inline', 'blockType', 'emoji', 'image'],
          inline: {
            options: ['bold', 'italic', 'underline', 'strikethrough'],
          },
          blockType: {
            inDropdown: true,
            options: ['Normal', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6'],
            className: 'custom-dropdown',
          },
          emoji: {
            className: 'custom-emoji',
          },
          image: {
            uploadCallback: handleImageUpload,
            alt: { present: true, mandatory: false },
            previewImage: true,
            inputAccept: 'image/gif,image/jpeg,image/jpg,image/png,image/svg',
          },
        }}
        hashtag={{
          separator: '',
          trigger: '#',
        }}
      />

      <div className="image-dropzone" onDragOver={(event) => event.preventDefault()} onDrop={handleImageDrop}>
        <div className="form-upload my-4">
          <div class="image-box">
            <input type="file" name="file" id="fileInput" accept=".jpg" hidden />
            <label for="fileInput" class="preview">
              <span>Drag and drop images here</span>
            </label>
          </div>
        </div>
      </div>

      {uploadedImages.length > 0 && (
        <div className="uploaded-images">
          {uploadedImages.map((image) => (
            <div key={image.name} className="image-thumbnail">
              <img src={URL.createObjectURL(image)} alt="Uploaded Image" />
            </div>
          ))}
        </div>
      )}

      <div className="button-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn-save-post btn btn-success rounded-pill px-4 py-2 shadow-lg" onClick={saveData}>
          Post
        </button>
      </div>
    </div>
  );
}

export default Posting;