const User = require("../model/admin");

const login = async function (req, res, next) {
  console.log("login===>");
  const { email, password } = req.body;
  console.log(email, password);
  if (!email || !password) {
    return res.status(404, "Please Provide Credentials");
  }
  try {
    const user = await User.findOne({ email }).select("+password");
    if (!user) {
      return res.status(400).json({ message: "No User Exists" });
    }
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      console.log(isMatch)
      console.log(password)
      return res.status(400).json({ message: "Invalid password" });
    }
    let token = user.getToken();
    res.status(200).json({
      success: true,
      token,
      user,
    });
  } catch (error) {
    console.log(error.message);
    return res.status(400).json({ message: err.message });
  }
};

module.exports = login;
