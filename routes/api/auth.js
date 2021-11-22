const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { check, validationResult } = require('express-validator');


const User = require('../../models/User');

// @route   GET api/auth
// @desc    Test route
// @access  Public
router.get('/', auth, async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        res.json(user);
    }catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

router.post('/', [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
], async (req, res) => {
    const errors = validationResult(req); 

    if(!errors.isEmpty()) {
        return res.status(400).json({errors: errors.array()});
    }

    // see if user exists
    const {email, password} = req.body;

    try {

        // see if user exists
        let user = await User.findOne({ email });

        if(!user) {
            return res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
        }
        
        // check matches

        const isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch) {
            return res.status(400).json({errors: [{msg: 'Invalid credentials'}]});
        }

        const payload = {
            user: {
                id: user.id
            }
        }

        jwt.sign(
            payload, 
            process.env.JWTSECRET,
            {expiresIn: 360000}, 
            (err, token) => {
                if(err) throw err;
                res.json({token});
            });
        
    }catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;