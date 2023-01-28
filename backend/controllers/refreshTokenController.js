const usersDB = {
    users: require('../models/users.json'),
    setUsers: function (data) {this.users = data}
}

const jwt = require('jsonwebtoken');
require('dotenv').config();


const handleRefreshToken =  (req, res) => {
    const cookies = req.cookies;
    console.log()

    if (!cookies?.jwt) {
        return res.sendStatus(401);
    }
    const refreshToken = cookies.jwt;

    // TO-DO: Find the user that has this refresh token
    const foundUser = usersDB.users.find(person => person.refreshToken === refreshToken);
    if (!foundUser){
        return res.sendStatus(403);
    }

    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
            if (err || foundUser.username !== decoded.username) {
                return res.sendStatus(403);
            }
            const accessToken = jwt.sign(
                {"username": decoded.username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '30s'}
            );
            res.json({accessToken})
        }
    )
}

module.exports = {handleRefreshToken};