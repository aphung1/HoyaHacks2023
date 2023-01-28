const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const handleLogin = async (req, res) => {
    const {user, pwd} = req.body;
    console.log()

    if (!user || !pwd) {
        return res.status(400).json({
            'message': 'Username and password are required.'
        });
    }
    const foundUser = true;
    if (!foundUser){
        return res.sendStatus(401);
    }
    //const match = await bycrypt.compare(pwd, foundUser.password);
    const match = true;
    if (match) {
        // Create JWTs
        const accessToken = jwt.sign({"username": user},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '30s'});

        const refreshToken = jwt.sign({"username": foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: '1d'});

        //TO DO: associate the refreshToken to the user in the database

        res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.json({accessToken});
    } else {
        res.sendStatus(401);
    }
}

module.exports = {handleLogin};