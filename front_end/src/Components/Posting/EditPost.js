import React, { useState, useEffect } from 'react';
import Header from "../pages/homepage/parts/Header";
import Footer from "../pages/homepage/parts/Footer";
import { NotificationContainer, NotificationManager } from "react-notifications";

const EditPost = () => {
    const [post, setPost] = useState({
        obtainer_id: '',
        category_id: '',
        name: '',
        instruction: '',
        preparation_time: 0,
        cooking_time: 0,
        description: '',
        ingredients: '',
        thumbnail: '',
        price: 0,
    });

    useEffect(() => {
        fetch('http://localhost:8000/api/get-posts')
            .then((response) => response.json())
            .then((data) => {
                const {
                    obtainer_id,
                    category_id,
                    name,
                    instruction,
                    preparation_time,
                    cooking_time,
                    description,
                    ingredients,
                    thumbnail,
                    price,
                } = data;
                setPost({
                    obtainer_id,
                    category_id,
                    name,
                    instruction,
                    preparation_time,
                    cooking_time,
                    description,
                    ingredients,
                    thumbnail,
                    price,
                });
            })
            .catch((error) => {
                console.error('Error fetching post data:', error);
            });
    }, []);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setPost((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Logic to submit the updated post data to the API
    };

    return (
        <>
            <Header />
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2 className="title_h2">Edit Recipe</h2>
                        <form onSubmit={handleSubmit} id="form-add-recipe" className="parsley-form" data-parsley-validate>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="inputName">Recipe Name</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputName"
                                            name="name"
                                            value={post.name}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="inputPrice">Price</label>
                                        <input
                                            type="number"
                                            className="form-control"
                                            placeholder="24 000"
                                            id="inputPrice"
                                            name="price"
                                            value={post.price}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="inputPrepTime">Preparation Time</label>
                                        <input
                                            type="number"
                                            min={0}
                                            className="form-control"
                                            step={0.1}
                                            placeholder="1h"
                                            id="inputPrepTime"
                                            name="preparation_time"
                                            value={post.preparation_time}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="inputCookTime">Cook Time</label>
                                        <input
                                            type="number"
                                            min={0}
                                            className="form-control"
                                            step={0.1}
                                            placeholder="0.5h"
                                            id="inputCookTime"
                                            name="cooking_time"
                                            value={post.cooking_time}
                                            onChange={handleInputChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div className="form-group">
                                        <label htmlFor="inputTotalTime">Total Time</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="inputTotalTime"
                                            name="totalTime"
                                            required
                                            defaultValue="2h"
                                            disabled
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="form-group">
                                        <label htmlFor="inputDescription">Recipe Description</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="My award winning chocolate chunk cookies."
                                            id="inputDescription"
                                            name="description"
                                            required
                                            rows={5}
                                            value={post.description}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="inputIngredients">Ingredients</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="2 cups flour"
                                            id="inputIngredients"
                                            name="ingredients"
                                            rows={5}
                                            required
                                            value={post.ingredients}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label htmlFor="inputInstructions">Instructions</label>
                                        <textarea
                                            className="form-control"
                                            placeholder="Mix dry ingredients in a large bowl"
                                            id="inputInstructions"
                                            name="instruction"
                                            rows={5}
                                            required
                                            value={post.instruction}
                                            onChange={handleInputChange}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label htmlFor="inputCategories">Select the category</label>
                                        <select
                                            name="category_id"
                                            id="inputCategories"
                                            value={post.category_id}
                                            onChange={handleInputChange}
                                            required
                                        >
                                            <option value>-- Select a category --</option>
                                            {/* Render categories options dynamically */}
                                        </select>
                                        {/* Button and Dialog components */}
                                    </div>
                                </div>
                            </div>
                            {/* Rest of the code */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <button className="btn btn-primary" id="btn-save-recipe-custom" type="submit">
                                            Save Recipe
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
            <NotificationContainer />
        </>
    );
};

export default EditPost;
