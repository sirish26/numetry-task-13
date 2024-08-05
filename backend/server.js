const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const cors = require('cors'); 
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://root:root@numerty.t7qkzms.mongodb.net/mydatabase', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  contact: String,
  password: String,
  otp: String,
});

const User = mongoose.model('login-signup', userSchema);

const app = express();
const PORT = 5000;

const JWT_SECRET = 'MySecretJWTKeyForDevelopment'; 

app.use(cors()); 
app.use(bodyParser.json());

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'your-email@gmail.com',
    pass: 'your-email-password',
  },
});

const generateOTP = () => Math.floor(100000 + Math.random() * 900000).toString();

// Test 
app.get('/test', (req, res) => {
  res.status(200).send('API is working');
});

// Signup 
app.post('/signup', async (req, res) => {
  const { name, email, contact, password } = req.body;
  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser = new User({ name, email, contact, password: hashedPassword });

  try {
    await newUser.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Login 
app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
});

// Forgot password 
app.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const otp = generateOTP();
  user.otp = otp;
  await user.save();

  // Send OTP via email
  transporter.sendMail({
    from: 'your-email@gmail.com',
    to: user.email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  });

  res.status(200).json({ message: 'OTP sent to email' });
});

// Verify OTP 
app.post('/verify-otp', async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email, otp });

  if (!user) {
    return res.status(400).json({ error: 'Invalid OTP' });
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
});

// Send OTP for login 
app.post('/send-login-otp', async (req, res) => {
  const { email } = req.body;
  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({ error: 'User not found' });
  }

  const otp = generateOTP();
  user.otp = otp;
  await user.save();

  // Send OTP via email
  transporter.sendMail({
    from: 'your-email@gmail.com',
    to: user.email,
    subject: 'Your OTP Code',
    text: `Your OTP code is ${otp}`,
  });

  res.status(200).json({ message: 'OTP sent to email' });
});

// Verify OTP for login
app.post('/login-with-otp', async (req, res) => {
  const { email, otp } = req.body;
  const user = await User.findOne({ email, otp });

  if (!user) {
    return res.status(400).json({ error: 'Invalid OTP' });
  }

  const token = jwt.sign({ email: user.email }, JWT_SECRET, { expiresIn: '1h' });
  res.status(200).json({ token });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});
