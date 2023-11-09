const jwt = require('jsonwebtoken');
require('dotenv').config();
const{TOKEN_KEY} = process.env;
const generateToken = async(data) => {
    try {
        const token = jwt.sign(data, TOKEN_KEY, {expiresIn: '30d'});
        return token;
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = generateToken;