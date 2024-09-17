const express = require('express');
const cors = require('cors');
const app = express();
var port = process.env.PORT || 3000;
const { fetchpanes } = require('./src/controller/controller');

app.use(cors());

app.get('/api/panes', async (req, res) => {
    try {
        const panes = await fetchpanes();
        console.log('Fetching panes:', panes);
        res.json(panes);
    } catch (error) {
        console.error('Error fetching panes:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
