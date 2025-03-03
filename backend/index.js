const express = require('express');
const fileUpload = require('express-fileupload');
const cors = require('cors');
const app = express();
const { syncDockerWithDatabase } = require('./services/dockerSync');
const serverRouter = require('./routes/servers');

// Middleware
app.use(express.static('public'));
app.use(cors());
app.use(express.json());
app.use(fileUpload());

// Routes
app.use('/servers', serverRouter);

// Error handler
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err.stack);
  if (!res.headersSent) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

syncDockerWithDatabase();

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API running on port ${PORT}`));
