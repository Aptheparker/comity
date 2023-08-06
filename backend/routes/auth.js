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
            let _userStatus = "";
            if (query.length === 0)
            {
                _userStatus = "Not Exist";
            }
            else
            {
                _userStatus = query[0].userStatus;
            }
            res.json({ email: query_email, userStatus: _userStatus });
        }
        catch (err)
        {
            console.error(err);
            next(err);
        }
    });

module.exports = router;