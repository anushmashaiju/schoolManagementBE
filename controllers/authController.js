import User from "../model/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";

// User login
// export const login = async (req, res) => {
//     const { email, password } = req.body;

//     try {
//         // Find user by email
//         const user = await User.findOne({ email });
//         if (!user) return res.status(400).json({ error: 'User not found' });

//         // Check password match
//         const isMatch = await bcrypt.compare(password, user.password);
//         if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

//         // Generate JWT token
//         const token = jwt.sign(
//             { id: user._id, role: user.role }, // Embed role in token
//             'your_jwt_secret', // Your secret key
//             { expiresIn: '1h' } // Token expires in 1 hour
//         );

//         // Send back user data and token
//         res.json({
//             token,
//             user: {
//                 id: user._id,
//                 role: user.role,
//                 email: user.email,
//                 name: user.name // You can include more user data as needed
//             }
//         });
//     } catch (err) {
//         res.status(500).json({ error: 'Server error' });
//     }
// };

// // Optional: Logout function
// export const logout = (req, res) => {
//     res.json({ message: 'Logged out successfully' });
// };

export const userRegister = async (req, res, next) => {
  try {
    const { username, password, email } = req.body;
    const emailalreadyexists = await User.findOne({ email: email });

    if (emailalreadyexists) {
      res.status(401).json({
        message: "email already exists",
      });
    }

    const newUser = await User.create({
      username: username,
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
