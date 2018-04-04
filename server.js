const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');

const db = require('./data/db.js');

// middleware
const server = express();
server.use(morgan('dev')); // logger
server.use(helmet()); // security
server.use(express.json()); // parser

server.get('/', function(req, res) {
    res.json({ api: 'Running.....' });
});

server.get('/api/users', (req, res) => {
    db
    .find()
    .then(users => {
        res.json(users);
    })
    .catch(error => {
        res.status(500).json({ error: "The users information could not be retrieved." });
    });
});

server.get('/api/users/:id', (req, res) => {
    const { id } = req.params;
    db
    .findById(id)
    .then(user => {
        if (user.length > 0) {
            res.json(user[0]);
        } else {
        res.status(404).json({ message: "The user with the specified ID does not exist." });
        }
    })
    .catch(error => {
        res.status(500).json({ error: "The user information could not be retrieved." });
    });
});

server.post('/api/users', (req, res) => {
    const { name, bio } = req.body;
    if (!name || !bio) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
    } else {
        const user = req.body;
        db
        .insert(user)
        .then(response => {
            res.status(201).json(response);
        })
        .catch(error => {
            res.status(500).json({ error: 'There was an error while saving the user to the database.' });
        });
    }
});

server.delete('/api/users/:id', (req, res) => {
    const { id } = req.params;
    let user;

    db
    .findById(id)
    .then(response => {
        if (response.length > 0) {
            user = { ...response[0]};
            db
            .remove(id)
            .then(response => {
                res.status(200).json(user);
            })
        } else {
            res.status(404).json({ message: "The user with the specified ID does not exist." });
        }
    })
    .catch(error => {
        res.status(500).json({ error: "The user could not be removed" });
    })
});

server.put('/api/users/:id', (req, res) => {
    const { id } = req.params;
    const update = req.body;
    const { name, bio } = req.body;

    if (!name || !bio) {
        res.status(400).json({ errorMessage: "Please provide name and bio for the user." });
    } else {

        db
        .update(id, update)
        .then(count => {

            if (count > 0) {
                db
                .findById(id)
                .then(updatedUser => {
                    res.status(200).json(updatedUser);
                });
            } else {
                res.status(404).json({ message: "The user with the specified ID does not exist." });
            }
        })
        .catch(error => {
            res.status(500).json({ error: "The user information could not be modified." });
        });
    }
});


const port = 5000;
server.listen(port, () => console.log('API Running on port 5000'));
