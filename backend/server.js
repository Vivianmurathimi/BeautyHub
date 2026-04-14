const express = require('express');
const cors = require('cors');

// 1. Initialize the server
const app = express();

// 2. Open the bridge (Allow React to talk to us)
app.use(cors());

// 3. Tell the server to understand JSON data
app.use(express.json());

// --- YOUR API ROUTES ---

// A simple test route
app.get('/api/test', (req, res) => {
    res.json({ 
        message: "Hello from your custom backend! The server is alive.",
        status: "success"
    });
});

// --- TURN IT ON ---
const PORT = 5000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on http://localhost:${PORT}`);
});