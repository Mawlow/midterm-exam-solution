const express = require('express');
const app = express();
const port = 3000;

// Route to test the server
app.get('/test', (req, res) => {
    res.json({ message: 'Express is working! Marlo O. Gallego' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});