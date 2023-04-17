import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';

export default function WebProjectList() {
    // Define the state of the web projects list
    const [projects, setProjects] = useState([]);

    // Use effect to fetch the web projects from the server when component mounts
    useEffect(() => {
        fetch('http://localhost:8080/api')
            .then((res) => res.json()) // Convert the reponse to JSON format
            .then((data) => setProjects(data)) // Update the projects state with the fecthed data
            .catch((error) => console.error(error)); // Log any errors to the console
    }, []);

    return(
        <div>
            <h1>Web Projects</h1>
            <Table striped bordered hover variant='dark'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>URL</th>
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