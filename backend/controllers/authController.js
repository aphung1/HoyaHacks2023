const bycrypt = require('bcrypt');

const handleLogin = async (req, res) => {
    const {user, pwd} = req.body;

    if (!user || !pwd) {
        return res.status(400).json({
            'message': 'Username and password are required.'
        });
    }
    const foundUser = false;
    if (!foundUser){
        return res.sendStatus(401);
    }
    return res.json({'success': `User ${user} is logged in!`});
    const match = await bycrypt.compare(pwd, foundUser.password);
    if (match) {
        res.json({'success': `User ${user} is logged in!`});
    } else {
        res.sendStatus(401);
    }
}

module.exports = {handleLogin};