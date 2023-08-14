const express = require('express');
const User = require('../schemas/user');

const router = express.Router();


router.route('/')
    .post(async (req, res, next) =>
    {
        try
        {
            const queryEmail = req.body.email;
            const query = await User.find({ email: queryEmail });
            let clientStatus = "";

            if (query.length === 0)
            {
                clientStatus = "Not Exist";
            }
            else
            {
                // console.log(query);
                clientStatus = query[0].userStatus;
            }

            res.json({ email: queryEmail, userStatus: clientStatus });
        }
        catch (err)
        {
            // console.error(err);
            next(err);
        }
    });

module.exports = router;