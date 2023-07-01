import React, { useState, useEffect } from 'react';
import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { convertToHTML } from 'draft-convert';  
import DOMPurify from 'dompurify';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import './Posting.css';
import axios from 'axios';

function Posting() {
  const [editorState, setEditorState] = useState(() => EditorState.createEmpty());
  const [convertedContent, setConvertedContent] = useState(null);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    let isMounted = true;
    let html = convertToHTML(editorState.getCurrentContent());
    setConvertedContent(html);
    return () => {
      isMounted = false;
    };
  }, [editorState]);
  console.log(convertedContent);

  useEffect(() => {
    // Fetch the categories from the API or your data source
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
      console.log('New category created:', response.data);
      setCategories([...categories, response.data]);
    } catch (error) {
      console.error('Error creating category:', error);
    }
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
    }
  };

  return (
    <div className="App">
      <header className="App-header">Create a new recipe</header>
      <div>
        <label htmlFor="category">Select a category:</label>
        <select id="category" value={selectedCategory} onChange={handleCategoryChange}>
          <option value="">-- Select a category --</option>
          {categories.map((category) => (
            <option key={category.id} value={category.id}>
              {category.name}
            </option>
          ))}
        </select>
        <button onClick={() => createCategory(prompt('Enter the new category name:'))}>Create New Category</button>
      </div>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
        hashtag={{
          separator: '',
          trigger: '#',
        }}
        mention={{
          separator: ' ',
          trigger: '@',
          suggestions: [{ text: 'JavaScript', value: 'javascript', url: 'js' }],
        }}
      />
      <div className="preview" dangerouslySetInnerHTML={createMarkup(convertedContent)}></div>
      <button onClick={saveData}>Save Data</button>
    </div>
  );
}

export default Posting;
