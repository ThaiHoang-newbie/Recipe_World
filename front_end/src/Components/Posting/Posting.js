import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Posting.css';
// import './Posting.scss';
import axios from 'axios';

function Posting() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [uploadedVideo, setUploadedVideo] = useState(null);

  useEffect(() => {
    let isMounted = true;
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
    return () => {
      isMounted = false;
    };
  }, [editorState]);
  // console.log(convertedContent);

  // function createMarkup(html) {
  //   return { __html: DOMPurify.sanitize(html) };
  // }

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

  const createCategory = async (categoryName) => {
    try {
      const response = await axios.post('http://127.0.0.1:8000/api/categories', {
        name: categoryName,
      });
      if(response.data.message === "Successful"){
        fetchCategories();
        alert("Add new category successful");
      }else{
        alert("This category has already exists");
      }
    } catch (error) {
      console.error('Error creating category:', error);
    }
  };

  const handleVideoDrop = (event) => {
    event.preventDefault();
    const file = event.dataTransfer.files[0];
    setUploadedVideo(file);
  };


  const saveData = async () => {
    const contentState = editorState.getCurrentContent();
    const contentRaw = JSON.stringify(convertToRaw(contentState));

    if (sessionStorage.getItem('obtainers_id')) {
      let obtainers_id = sessionStorage.getItem('obtainers_id');
      try {
        const response = await axios.post('http://localhost:8000/api/add-post', {
          content: contentRaw,
          obtainers_id: obtainers_id,
          category_id: selectedCategory,
        });

        console.log('Data saved successfully:', response.data);
      } catch (error) {
        console.error('Error saving data:', error);
      }
    }else {
      alert("You must register to use this function");
      setTimeout(() => {
        window.location = "http://localhost:3000/login"
      }, 100);
    }
  };

  return (
    <div>
      <header className="App-header">Create your own new recipe</header>

      <div className="mb-3">
        <span htmlFor="category" className="form-label text-xxl">
          <b>Select a category:</b>
        </span>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange} className="form-select">
          <option value="">-- Select a category --  </option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button className="btn btn-primary rounded-pill px-4 py-2 shadow-lg" onClick={() => createCategory(prompt('Enter the new category name:'))}>
          +
        </button>
      </div>


      <Editor
        editorState={editorState}
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
        }}
        hashtag={{
          separator: '',
          trigger: '#',
        }}
      />
      <div className="video-dropzone" onDragOver={(event) => event.preventDefault()} onDrop={handleVideoDrop}>
        <div className="form-upload my-4">
          <div class="image-box">
            <label for="fileInput" class="preview">
              <span>Drag and drop video here</span>
            </label>
            <input type="file" name="file" id="fileInput" accept="video/*" hidden />
          </div>
        </div>
      </div>

      {uploadedVideo && (
        <div className="d-flex justify-content-center">
          <span>Uploaded video: <b>{uploadedVideo.name}</b></span>
        </div>
      )}


      {/* <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div> */}
      <div className="button-container" style={{ display: 'flex', justifyContent: 'center' }}>
        <button className="btn-save-post btn btn-success rounded-pill px-4 py-2 shadow-lg" onClick={saveData}>
          Save Data
        </button>
      </div>

    </div>
  );
}

export default Posting;
