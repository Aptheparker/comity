const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.route('/')
    .post(async (req, res, next) => 
    {
        try
        {
            const newUser = await User.create
            ({
                name: req.body.name,
                email: req.body.email,
                studentID: req.body.studentID,
                phoneNumber: req.body.phoneNumber,
                sex: req.body.sex,
                userStatus: "Waiting"
            });
            
            console.log(newUser);            
            const verifyQuery = await User.find({ email: req.body.email });
            if(verifyQuery.length !== 0)
            {
                res.status(201).json({ status: "success", email: verifyQuery.email, userStatus: verifyQuery[0].userStatus });
            }
            else
            {
                throw new Error('Failed to save the user');
            }

        }
        catch (err)
        {
            console.log('Failed to register the user');
            console.error(err);
            next(err);
        }
    });

module.exports = router;