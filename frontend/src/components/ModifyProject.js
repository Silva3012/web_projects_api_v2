/*
This component will fetch the existing project data from the server when it mounts, and use that data to populate the form fields. 
When the form is submitted, it will send a PUT request to the server to update the project data, then navigate back to the project details page.
*/
import React, { useState, useEffect } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import NavigationBar from './NavigationBar';
import { useNavigate, useParams } from 'react-router-dom';

export default function ModifyProject() {
    // Get the ID of the project to modify from the URL parameters
    const { id } = useParams();

    // Define the state of the form inputs
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [url, setUrl] = useState('');
    const navigate = useNavigate();

    // Fetch the project data from the server and populate the form fields
    useEffect(() => {
        fetch(`https://web-projects-ii.onrender.com/api/${id}`)
            .then(res => res.json())
            .then(data => {
                setTitle(data.title);
                setDescription(data.description);
                setUrl(data.URL);
            })
            .catch(error => console.log(error));
    }, [id]);

    // Define a function that will handle form submission
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the page from refreshing on form submit

        // Create a modified project object with the form input values
        const modifiedProject = {
            title,
            description,
            URL: url,
        };

        // Sent a PUT request to the server with the modified project data
        fetch(`https://web-projects-ii.onrender.com/api/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type' : 'application/json',
            },
            body: JSON.stringify(modifiedProject),
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // Navigate back to the home page
                navigate(`/`);
            })
            .catch(error => console.log(error));
    };

    return (
        <div>
            <NavigationBar />
            <h1>Modify Project</h1>
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
    );
}