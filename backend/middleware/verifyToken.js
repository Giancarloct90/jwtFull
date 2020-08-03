const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    console.log(req.headers['x-access-token']);
    const token = req.headers['x-access-token'];
    if (token === 'false') {
        return res.status(404).json({
            ok: false,
            message: 'token not provided'
        });
    }
    let decoded = jwt.verify(token, 'mysecret');
    req.userID = decoded._id;
    next();
}

module.exports = verifyToken;