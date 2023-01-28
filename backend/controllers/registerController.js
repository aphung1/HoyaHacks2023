const bcrypt = require('bcrypt');

const handleNewUser = async (req, res) => {
    const { user, pwd } = req.body;
    if (!user || !pwd) {
        return res.status(400).json({
            'message': 'Username and password are required.'
        });
    }

    // TO-DO: Check for duplicate usernames
   const duplicate = false;
   if (duplicate){
    return res.sendStatus(409);
   } 

   try {
        const hashedPwd = await bcrypt.hash(pwd, 10);
        const newUser = {"username": user, "password": hashedPwd};
        // TO-DO: Add user
        res.status(201).json({'success': `New user ${user} created!`});

   } catch (err) {
    res.status(500).json({'message': err.message})
   }
}

module.exports = {handleNewUser};