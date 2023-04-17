Web Projects API
This is a RESTful API for managing a list of web projects.

Usage
To use this API, you can send HTTP requests to the following endpoints:
========================================================================

GET /api: Returns a list of web projects in JSON format.
POST /api: Adds a new web project to the list.
PUT /api/:id: Updates the title and/or description of a web project with the specified ID.
DELETE /api/:id: Deletes a web project with the specified ID from the list.
Getting a list of web projects
To get a list of web projects, you can send a GET request to /api using a tool like Postman:
=======================================================================

GET /api
Host: localhost:8080

This will return a list of web projects in JSON format.
=======================================================================

Adding a new web project
To add a new web project to the list, you can send a POST request to /api with a JSON payload that describes the web project:
POST 
Host: localhost:8080
Content-Type: application/json

{
    "title": "My New Web Project",
    "description": "A description of my new web project.",
    "URL": "http://mynewproject.com"
}

This will add the new web project to the list and return the updated list of web projects in JSON format.
=======================================================================

Updating a web project
To update the title and/or description of a web project, you can send a PUT request to /api/:id with the ID of the web project you want to update and a JSON payload that describes the changes:
PUT /api/1 
Host: localhost:8080
Content-Type: application/json

{
    "title": "Updated Title",
    "description": "A new description."
}
This will update the specified web project and return the updated list of web projects in JSON format.
=======================================================================

Deleting a web project
To delete a web project from the list, you can send a DELETE request to /api/:id with the ID of the web project you want to delete:

DELETE /api/1 
Host: localhost:8080

This will delete the specified web project from the list and return the updated list of web projects in JSON format.
=========================================================================

Conclusion
That's it! You now know how to use this Web Projects API with Postman. Happy coding!