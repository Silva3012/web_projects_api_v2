//Require the necessary modules and create a new instance of Express:
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const PORT = process.env.PORT || 8080;

const app = express();

//enable cors
app.use(cors())

//Set up middleware to handle JSON data
app.use(bodyParser.json());

//Create an array to store the 'Web project' items:
let webProjects = [
    {id: 1, title: 'React Game!', description: 'Tic tac toe game created using Create React app.', URL: 'http://heroku/myapp/game/'},
    { id: 2, title: 'Online store', description: 'Online store created with HTML, CSS and JavaScript.', URL: 'https://git.com/myrepos/shop/index'}
];

//Create a GET route to return the array of 'Web project' items when the user navigates to http://localhost:8080/api:
app.get('/api', (req, res) => {
    res.json(webProjects);
});

app.get('/api/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const project = webProjects.find(project => project.id === id);
  if (project) {
    res.json(project);
  } else {
    res.sendStatus(404);
  }
});

//Create a POST route to add a new item to the array of 'Web project' items:
app.post('/api', (req, res) => {
    //Extract the new web project from the request body
    const newWebProject = req.body;
    console.log(newWebProject);
    //Add the new web project to the list of web projects
    webProjects.push(newWebProject);
    //Send the new web project as a JSON response
    res.json(newWebProject);
});

//Create a DELETE route to remove an item from the array of 'Web project' items:
app.delete('/api/:id', (req, res) => {
    //Extract the ID of the web project to delete from the URL parameters
    const id = req.params.id;
    //Filter the web projects array to remove the project with the given ID
    webProjects = webProjects.filter(webProject => webProject.id !== parseInt(id));
    //Send the updated list of web projects as a JSON response
    res.json(webProjects);
});

//Create a PUT route to update the title or description of an item in the array of 'Web project' items:
app.put('/api/:id', (req, res) => {
    const id = req.params.id;
    //Extract the updated web project from the request body
    const updatedWebProject = req.body;
    //Use map() to update the title and/or description of the web project with the given ID
    webProjects = webProjects.map(webProject => {
        if (webProject.id === parseInt(id)) {
            webProject.title = updatedWebProject.title || webProject.title;
            webProject.description = updatedWebProject.description || webProject.description;
            webProject.URL = updatedWebProject.URL || webProject.URL;
        }
        return webProject;
    });
    //Send the updated list of web projects as a JSON response
    res.json(webProjects);
});

app.listen(PORT, () => {
    console.log(`SERVER STARTED ON ${PORT}`);
});

/*
Research references

Official Express documentation: https://expressjs.com/en/4x/api.html
Building a RESTful API: https://www.digitalocean.com/community/tutorials/build-a-restful-api-using-node-and-express-4
Section 26: APIs: https://www.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/29479594?start=1#overview

*/