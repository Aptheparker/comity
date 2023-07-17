const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.route('/')
    .post(async (req, res, next) => 
    {
        try
        {
            const newUser = new User
            ({
                name: req.body.name,
                email: req.body.email,
                studentID: req.body.studentID,
                phoneNumber: req.body.phoneNumber,
                sex: req.body.sex,
                status: "Waiting"
            });
            newUser.save()
                .then(() => 
                {
                    console.log(`User named ${req.body.name} is created successfully`);
                })
                .catch((err) =>
                {
                    console.log(`Failed to create the user named ${req.body.name}`);
                    console.error(err);
                });
            console.log(newUser);
            
            const verifyQuery = User.findOne({ email: req.body.email });

            res
                .status(201)
                .json({ email: verifyQuery.email, status: verifyQuery.status });
        }
        catch (err)
        {
            console.log('Failed to register the user');
            console.error(err);
            next(err);
        }
    });

module.exports = router;