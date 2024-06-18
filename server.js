// server.js

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const app = express();
app.use(bodyParser.json());
app.use(express.static('public'));

mongoose.connect('mongodb://localhost:27017/nexus', { useNewUrlParser: true, useUnifiedTopology: true });

const contactSchema = new mongoose.Schema({
    email: String,
    info: String,
});

const Contact = mongoose.model('Contact', contactSchema);

app.post('/api/contact', (req, res) => {
    const newContact = new Contact(req.body);
    newContact.save()
        .then(() => res.json({ message: 'Message received' }))
        .catch(error => res.status(500).json({ error: 'Failed to save message' }));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
