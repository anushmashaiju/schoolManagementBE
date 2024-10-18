import User from "../model/User.js";
import sendToken from "../service/sendToken.js";

export const userRegister = async (req, res, next) => {
  try {
    const {  password, email } = req.body;
    const emailalreadyexists = await User.findOne({ email: email });

    if (emailalreadyexists) {
      res.status(401).json({
        message: "email already exists",
      });
    }

    const newUser = await User.create({
      password: password,
      email: email,
    });

    res.status(201).json({
      message: "User  created successfully",
      data: newUser,
    });
  } catch (error) {
    console.log(error);
  }
};

export const userLogin = async (req, res, next) => {
  try {
    const { password, email } = req.body;
    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(401).json({
        message: "User not Found",
      });
    }

  // Send token and return user data including role
  sendToken(user, res); // Now sends both token and user data
} catch (error) {
  console.error("Login error:", error);
  res.status(500).json({
    message: "Server error",
  });
}
};

 
