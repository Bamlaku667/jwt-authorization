const generateToken = require("../utils/generateToken");
const { BadRequestError } = require("../errors");

const login = async (req, res, next) => {
  const { username, password } = req.body;
  if (!username || !password) {
    throw new BadRequestError("please provide credentials");
  }
  const id = new Date().getDate();
  const tokenData = { username, id };
  const token = await generateToken(tokenData);

  res.status(200).json({msg: 'user created', token});
};

const getDashboard = (req,res) => {
     
  const user = req.user
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({ msg: `hello ${user.username}`, secret: `you luck number is ${luckyNumber}` });
};

module.exports = { login, getDashboard };
