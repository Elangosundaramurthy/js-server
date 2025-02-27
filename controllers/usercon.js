const User = require('../model/userregis');
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: 'User already exists' });
        user = new User({ name, email, password });
        await user.save();
        res.status(201).json({ message: 'User registered successfully', user });
    }catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};
module.exports={registerUser}