const cors = require('cors')({
    origin: 'https://lokaverkefni-three.vercel.app/', 
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true,
  });
  
  const connectToDatabase = require('../utils/connectToDatabase');
  const { login } = require('../controllers/authController');
  
  module.exports = async (req, res) => {
    await cors(req, res, async () => {
      if (req.method !== 'POST') {
        res.status(405).json({ success: false, error: 'Method Not Allowed' });
        return;
      }
      await connectToDatabase();
      await login(req, res);
    });
  };
  