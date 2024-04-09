const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('../models/user');
const Session = require('../models/session');

const generateAccessToken = (user) => {
    return jwt.sign({ userId: user._id }, "secretpassword", { expiresIn: '15m' });
};

const generateRefreshToken = (user) => {
    try {
        return jwt.sign({ userId: user._id }, "secretpassword2", { expiresIn: '1d' });
    } catch (error) {
        console.log("Error here", error);
    }

};

exports.signup = async (req, res) => {
    try {
        const { email, name, userName, password, terms } = req.body;
        console.log("hi");
        // Check if user with the email or userName already exists
        const existingEmailUser = await User.findOne({ email });
        const existingUserNameUser = await User.findOne({ userName });
        if (existingEmailUser) {
            return res.status(409).json({ message: 'Email is already registered' });
        }
        if (existingUserNameUser) {
            return res.status(409).json({ message: 'Username is already taken' });
        }

        // Create a new user
        const newUser = await User.create({ email, name, userName, password, terms });
        const accessToken = generateAccessToken(newUser);
        const refreshToken = generateRefreshToken(newUser);
        newUser.refreshToken = refreshToken;
        const result = await newUser.save();
        console.log(result);

        // Set refresh token as HTTP cookie
        res.cookie('refreshToken', refreshToken, {
            httpOnly: true,
            secure: true,
            sameSite: 'None',
            maxAge: 7 * 24 * 60 * 60 * 1000
        });

        res.status(201).json({ message: 'User created successfully', user: newUser, accessToken: accessToken });
    } catch (error) {
        // Handle any unexpected errors
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
};


// exports.checkExisting = async (req, res) => {
//     try {
//         const { email, userName } = req.body;

//         // Check if email exists
//         const existingEmailUser = await User.findOne({ email });
//         // Check if username exists
//         const existingUserNameUser = await User.findOne({ userName });

//         if (existingEmailUser) {
//             return res.status(409).json({ message: 'Email is already registered' });
//         }
//         if (existingUserNameUser) {
//             return res.status(409).json({ message: 'Username is already taken' });
//         }

//         res.status(200).json({ message: 'Email and username are available' });
//     } catch (error) {
//         console.error('Error checking existing email and username:', error);
//         res.status(500).json({ error: 'Internal server error' });
//     }
// };



// exports.login = async (req, res) => {
//     try {
//         const { email, password } = req.body;
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }
//         const isValidPassword = await bcrypt.compare(password, user.password);
//         if (!isValidPassword) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }
//         const accessToken = generateAccessToken(user);
//         const refreshToken = generateRefreshToken(user);
//         res.status(200).json({ accessToken, refreshToken });
//     } catch (error) {
//         res.status(500).json({ error: error.message });
//     }
// };

// exports.login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Find user by email
//         const user = await User.findOne({ email });
//         if (!user) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Verify password
//         const isPasswordValid = await bcrypt.compare(password, user.password);
//         if (!isPasswordValid) {
//             return res.status(401).json({ message: 'Invalid email or password' });
//         }

//         // Generate access token and refresh token
//         const accessToken = generateAccessToken(user);
//         const refreshToken = generateRefreshToken(user);

//         // Store session in database
//         const session = new Session({
//             userId: user._id,
//             accessToken,
//             refreshToken
//         });
//         await session.save();

//         res.json({ accessToken, refreshToken });
//     } catch (error) {
//         console.error('Login error:', error);
//         res.status(500).json({ message: 'Internal server error' });
//     }
// };