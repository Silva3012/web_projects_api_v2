import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavigationBar from './NavigationBar';
import { useNavigate } from 'react-router-dom';

export default function AddProject() {
    // Define the state of the form inputs
    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    // Define a function that will handle from submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the page from refreshing on page submit

        // Parse the ID input as an interger
        const parsedId = parseInt(id);

        // Check if the ID input is a valid interger
        if (isNaN(parsedId)) {
            alert('Please enter a valid interger for ID');
            return;
        }

         // Check if all required fields have been filled in
        if (!id || !title || !description || !url) {
            alert('Please fill in all required fields');
            return;
        }

        // Create a new project object with the form input values
        const newProject = {
            id: parsedId,
            title,
            description,
            URL: url,
        };

        // Send a POST request to the server with the new project data
        fetch('https://web-projects-ii.onrender.com/api', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(newProject),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
            // Navigate to home page
             navigate('/');
            })
            .catch((error) => console.log(error));

        // Clear the form inputs after submission
        setId('');
        setTitle('');
        setDescription('');
        setUrl('');
    };
    return (
        <div>
            <NavigationBar />
            <h1>Add Project</h1>
            <Form.Group controlId='formId'>
            <Form.Label>ID</Form.Label>
            <Form.Control
                type='text'
                placeholder='Enter ID (e.g. 1, 2 etc...'
                value={id}
                onChange={(event) => setId(event.target.value)}
            />
            </Form.Group>

            <Form onSubmit={handleSubmit}>
            <Form.Group controlId='formTitle'>
            <Form.Label>Title</Form.Label>
            <Form.Control
                type='text'
                placeholder='Enter title'
                value={title}
                onChange={(event) => setTitle(event.target.value)}
            />
            </Form.Group>

            <Form.Group controlId='formDescription'>
            <Form.Label>Description</Form.Label>
            <Form.Control
                type='text'
                placeholder='Enter description'
                value={description}
                onChange={(event) => setDescription(event.target.value)}
            />
            </Form.Group>

            <Form.Group controlId='formUrl'>
            <Form.Label>URL</Form.Label>
            <Form.Control
                type='text'
                placeholder='Enter URL'
                value={url}
                onChange={(event) => setUrl(event.target.value)}
            />
            </Form.Group>

            <Button variant='outline-dark' className='submitBtn' type='submit'>
            Submit
            </Button>
            </Form>
        </div>
    )
};