const User = require('../models/User'); // Make sure this exists

const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Optional: Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({ name, email, password }); // You can hash password later
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (err) {
    console.error('Signup error:', err);
    res.status(500).json({ message: 'Server error during signup' });
  }
};

module.exports = { registerUser };
