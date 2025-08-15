const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 10000;

// Enable CORS for sensor API requests
app.use(cors());

// Serve static files from public folder
app.use(express.static(path.join(__dirname, 'public')));

// Example API endpoint to get water meter data
app.get('/api/meters', (req, res) => {
    // TODO: replace with actual sensor reading logic
    const meters = [
        { meter_id: 'WM-101', room_id: 'R101', tenant: 'Alice', totalLiters: 450, status: 'normal' },
        { meter_id: 'WM-102', room_id: 'R102', tenant: 'Bob', totalLiters: 520, status: 'abnormal' },
        // ...
    ];
    res.json(meters);
});

// Fallback to index.html for SPA/PWA routing
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
