const express = require('express');
const User = require('../schemas/user');

const router = express.Router();


router.route('/')
    .post(async (req, res, next) =>
    {
        try
        {
            const query_email = req.body.email;
            const query = await User.find({ email: query_email });
            let userStatus = "";
            if (query.length === 0)
            {
                userStatus = "Not Exist";
            }
            else
            {
                userStatus = query[0].status;
            }
            res.json({ email: query_email, status: userStatus });
        }
        catch (err)
        {
            console.error(err);
            next(err);
        }
    });

module.exports = router;