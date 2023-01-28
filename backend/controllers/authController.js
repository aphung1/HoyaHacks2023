const usersDB = {
    users: require('../models/users.json'),
    setUsers: function (data) {this.users = data}
}

const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const fsPromises = require('fs').promises;
const path = require('path');

const handleLogin = async (req, res) => {
    const {user, pwd} = req.body;
    console.log()

    if (!user || !pwd) {
        return res.status(400).json({
            'message': 'Username and password are required.'
        });
    }
    
    // TO-DO: Find user in database
    const foundUser = usersDB.users.find(person => person.username === user);
    if (!foundUser){
        return res.sendStatus(401);
    }

    const match = await bycrypt.compare(pwd, foundUser.password);
    if (match) {
        // Create JWTs
        const accessToken = jwt.sign({"username": user},
        process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: '30s'});

        const refreshToken = jwt.sign({"username": foundUser.username },
        process.env.REFRESH_TOKEN_SECRET,
        {expiresIn: '1d'});

        //TO DO: associate the refreshToken to the user in the database
        const otherUsers = usersDB.users.filter(person => person.username !== foundUser.username);
        const currentUser = {...foundUser, refreshToken};
        usersDB.setUsers([...otherUsers, currentUser]);
        await fsPromises.writeFile(
            path.join(__dirname, '..', 'models', 'users.json'),
            JSON.stringify(usersDB.users)
        );

        res.cookie('jwt', refreshToken, {httpOnly: true, maxAge: 24 * 60 * 60 * 1000});
        res.json({accessToken});
    } else {
        res.sendStatus(401);
    }
}

module.exports = {handleLogin};