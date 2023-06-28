import React, { useState } from 'react';
import './NewPosting.css';
import axios from 'axios';

const NewPosting = () => {
    const [inputs, setInputs] = useState([]);

    const handleInputChange = (event, index) => {
        const { name, value, type, checked } = event.target;
        const newInputs = [...inputs];

        if (type === 'checkbox') {
            newInputs[index] = {
                ...newInputs[index],
                [name]: checked,
            };
        } else {
            newInputs[index] = {
                ...newInputs[index],
                [name]: value,
            };
        }
        setInputs(newInputs);
    };

    const handleImageChange = (event, index) => {
        const fileList = event.target.files;
        const fileArray = Array.from(fileList);
        const newInputs = [...inputs];
        newInputs[index] = {
            text: inputs[index] ? inputs[index].text : '',
            images: fileArray,
        };
        setInputs(newInputs);
    };

    const handleAddInput = () => {
        setInputs([...inputs, '']);
    };

    const handleRemoveInput = (index) => {
        const newInputs = [...inputs];
        newInputs.splice(index, 1);
        setInputs(newInputs);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const formData = new FormData();

            inputs.forEach((input, index) => {
                formData.append(`inputs[${index}][text]`, input.text);
                formData.append(`inputs[${index}][italic]`, input.italic || false);
                formData.append(`inputs[${index}][underline]`, input.underline || false);
                formData.append(`inputs[${index}][strikeThrough]`, input.strikeThrough || false);
                formData.append(`inputs[${index}][bold]`, input.bold || false);

                if (input.images) {
                    input.images.forEach((image, imageIndex) => {
                        formData.append(`inputs[${index}][images][${imageIndex}]`, image);
                    });
                }
            });

            const response = await axios.post('http://127.0.0.1:8000/api/posting', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {inputs.map((input, index) => (
                <div key={index}>
                    <div className="form-group">
                        <label htmlFor={`text-${index}`}>Nội dung:</label>
                        <textarea
                            id={`text-${index}`}
                            name={`text-${index}`}
                            value={input.text}
                            onChange={(event) => handleInputChange(event, index)}
                            className={`form-control ${input.italic ? 'italic-text' : ''
                                } ${input.underline ? 'underline-text' : ''} ${input.strikeThrough ? 'strike-through-text' : ''
                                } ${input.bold ? 'font-weight-bold' : ''}`}
                        />
                    </div>

                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`italic-${index}`}
                                name="italic"
                                checked={input.italic || false}
                                onChange={(event) => handleInputChange(event, index)}
                            />
                            <label className="form-check-label" htmlFor={`italic-${index}`}>
                                In nghiêng
                            </label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`underline-${index}`}
                                name="underline"
                                checked={input.underline || false}
                                onChange={(event) => handleInputChange(event, index)}
                            />
                            <label className="form-check-label" htmlFor={`underline-${index}`}>
                                Gạch chân
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`strikeThrough-${index}`}
                                name="strikeThrough"
                                checked={input.strikeThrough || false}
                                onChange={(event) => handleInputChange(event, index)}
                            />
                            <label className="form-check-label" htmlFor={`strikeThrough-${index}`}>
                                Gạch ngang
                            </label>
                        </div>

                        <div className="form-check form-check-inline">
                            <input
                                className="form-check-input"
                                type="checkbox"
                                id={`bold-${index}`}
                                name="bold"
                                checked={input.bold || false}
                                onChange={(event) => handleInputChange(event, index)}
                            />
                            <label className="form-check-label" htmlFor={`bold-${index}`}>
                                In đậm
                            </label>
                        </div>
                    </div>

                    <div className="form-group">
                        <label htmlFor={`images-${index}`}>Hình ảnh:</label>
                        <input
                            type="file"
                            id={`images-${index}`}
                            name={`images-${index}`}
                            onChange={(event) => handleImageChange(event, index)}
                            multiple
                        />
                    </div>

                    {input.images &&
                        input.images.map((image, imageIndex) => (
                            <img
                                key={imageIndex}
                                src={URL.createObjectURL(image)}
                                alt={`Image ${imageIndex}`}
                            />
                        ))}

                    <button type="button" className="btn btn-danger" onClick={() => handleRemoveInput(index)}>
                        Xóa
                    </button>
                </div>
            ))}

            <button type="button" className="btn btn-primary" onClick={handleAddInput}>
                Thêm
            </button>
            <button type="submit" className="btn btn-success">
                Lưu
            </button>
        </form>
    );
};

export default NewPosting;