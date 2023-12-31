const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 8081;

// Serve index.html as the root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve index.html as the root route
app.get('/redirect', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve static files (e.g., CSS, JavaScript) from the public folder
app.use(express.static(path.join(__dirname, 'public')));

// Start the server
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
