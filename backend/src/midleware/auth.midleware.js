const jwt = require('jsonwebtoken');
require('dotenv').config();
const tokenAuth = function (req, res, next)
{
    try {
        const cookieToken = req.cookies.auth_token;
        if (!cookieToken)
        {
            res.json({ "type": "error", "msg": "not auth_token" });
            //next();
        }
        const decode = jwt.verify(cookieToken, process.env.SECRET_KEY);
        req.authUser = decode;
        next();
    }
    catch (err)
    {
        res.json({"type":"error","msg":err.message});
        //next();
    }
}


module.exports = tokenAuth;