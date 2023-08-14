const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.route('/')
    .post(async (req, res, next) => 
    {
        try
        {
            // Find user in database to check if the email is duplicated
            const emailQuery = await User.find({ email: req.body.email });

            if (emailQuery.length !== 0)
            {
                res.status(200).json({ status: "duplicated", email: emailQuery[0].email, userStatus: emailQuery[0].userStatus})
            }

            // Then create a new user in the database
            const newUser = await User.create
            ({
                name: req.body.name,
                email: req.body.email,
                studentID: req.body.studentID,
                phoneNumber: req.body.phoneNumber,
                sex: req.body.sex,
                userStatus: "Waiting"
            });
            
            // console.log(newUser);
            
            const verifyQuery = await User.find({ email: req.body.email });
            if (verifyQuery.length !== 0)
            {
                res.status(201).json({ status: "success", email: verifyQuery[0].email, userStatus: verifyQuery[0].userStatus });
            }
            else
            {
                throw new Error('Failed to create the user');
            }

        }
        catch (err)
        {
            console.log('Failed to register the user');
            // console.error(err);
            next(err);
        }
    });

module.exports = router;