import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import NavigationBar from './NavigationBar';
import { useNavigate } from 'react-router-dom';

export default function WebProjectList() {
    // Define the state of the web projects list
    const [projects, setProjects] = useState([]);
    // const [id, setId] = useState(null);
    const navigate = useNavigate();

    // Use effect to fetch the web projects from the server when component mounts
    useEffect(() => {
        fetch('https://web-projects-ii.onrender.com/api')
            .then((res) => res.json()) // Convert the reponse to JSON format
            .then((data) => setProjects(data)) // Update the projects state with the fecthed data
            .catch((error) => console.error(error)); // Log any errors to the console
    }, []);

    // Function to handle delete project
    const handleDeleteProject = (id) => {
        // Make a DELETE request to the server to delete the project
        fetch(`https://web-projects-ii.onrender.com/api/${id}`, {
            method: 'DELETE',
        })
            .then((res) => res.json())
            .then(() => {
                // Remove the project from the projects state
                setProjects((prevProjects) => 
                    prevProjects.filter((project) => project.id !== id)
                );
            }) 
            .catch((error) => console.error(error)); // Log any errors to the console
    }

    // Function to handle edit button click
    const handleModifyProject = (id) => {
        // setId(id);
        navigate(`/api/${id}`);
    };

    return(
        <div>
            <NavigationBar />
            <h1>Web Projects</h1>
            <Table striped borderless hover variant='dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>URL</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {/* Map through the projects state and display each project as a row in the table */}
                    {projects.map((project) => (
                        <tr key={project.id}>
                           <td>{project.id}</td>
                           <td>{project.title}</td>
                           <td>{project.description}</td>
                           <td>{project.URL}</td>  
                           <td>
                                <Button variant="outline-light" onClick={() => handleModifyProject(project.id)}>
                                    Edit
                                </Button>{' '}
                                <Button variant="outline-light" onClick={() => handleDeleteProject(project.id)}>
                                    Delete
                                </Button>
                           </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
}


/*
References:

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
*/