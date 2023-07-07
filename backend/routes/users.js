const express = require('express');
const User = require('../schemas/user');

const router = express.Router();

router.route('/')
    .get(async (req, res, next) =>
    {
        try
        {
            const users = await User.find().where('email').equals('req.body.email');
            res.send(true); // 확인 필요
        }
        catch (err)
        {
            console.error(err);
            res.send('cannot find user');
        }
    })
    .post(async (req, res, next) =>
    {
        try
        {
            const user = await User.create
            ({
                name: req.body.name,
                email: req.body.email,
                studentID: req.body.studentID,
                phoneNumber: req.body.phoneNumber,
                sex: req.body.sex,                
            });
            console.log(user);
            res.status(201).send(true);
        }
        catch (err)
        {
            console.error(err);
            res.send('cannot create user');
        }
    });


module.exports = router;