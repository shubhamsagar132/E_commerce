// Load environment variables
require('dotenv').config();

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const authRoutes = require('./routes/authRoutes');

const app = express();

// ✅ Middleware
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
app.use(express.json());

// ✅ Root Route
app.get('/', (req, res) => {
  res.send('🌟 Welcome to the ZapNStyle API!');
});

// ✅ API Routes
app.use('/api/auth', authRoutes);

// ✅ Connect to MongoDB and Start Server
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('✅ MongoDB connected');

  const PORT = process.env.PORT || 5001;

  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
  });

})
.catch((err) => {
  console.error('❌ DB connection error:', err);
});
