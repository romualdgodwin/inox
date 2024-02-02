
const express = require('express');
const { faker } = require('@faker-js/faker');
const app = express();

//List Users
const users = [];

for(let i = 0; i < 10; i++) {
    users.push({
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email()
    });
}

console.log(users);


//Créer la version de notre api
const versionApi = '/api/v1';


// Récupérer la liste de sutilisateurs
//GET /api/v1/users
app.get(`${versionApi}/users`, (req, res) => {
    res.json({
        data: users
    })
});

//GET /api/v1/users/:id
app.get(`${versionApi}/users/:id`, (req, res) => {
    const id = req.params.id - 1;


    res.json({
        data: users[id] || null
    })
});

// POST /api/v1/users

// PUT /api/v1/users/:id


// DELETE /Api/v1/users/:id



app.listen(3000,() => console.log('Listening on port 3000'));
