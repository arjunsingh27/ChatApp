import bcrypt from "bcryptjs";
import User from "../models/user.models.js";
import generateTokenandSetCookie from "../utils/generateToken.js";
export const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });
    const isPasswordCorrect =
      user && (await bcrypt.compare(password, user.password));

    if (!isPasswordCorrect || !user) {
      return res.status(400).json({ error: "Invalid Credentials" });
    }

    generateTokenandSetCookie(user._id, res); // Generate token and set cookie (in response header
    res.status(200).json({
      _id: user._id,
      fullName: user.fullName,
      username: user.username,
      profilePicture: user.profilePicture,
    });
  } catch (error) {
    console.log("Error in auth Controller", error);
  }
};

export const logout = async (req, res) => {
  try {
    res.cookie("jwt", "", { maxAge: 0 });
    res.status(200).json({ message: "Logged out successfully" });
  } catch (error) {
    res.status(400).json({ error: "Error in logging out" });
  }
};

export const signup = async (req, res) => {
  try {
    const { fullName, username, password, confirmPassword, gender } = req.body;

    // Check if user with given email already exists
    const existingUser = await User.findOne({ username });

    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    //Hash the password
    const salt = await bcrypt.genSalt(12);
    const hashedPassword = await bcrypt.hash(password, salt);
    //User dummy profile picture
    const boyProfile = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfile = `https://avatar.iran.liara.run/public/girl?username=${username}`;
    // Create a new user

    const newUser = new User({
      fullName,
      username,
      password: hashedPassword,
      gender,
      profilePicture: gender === "male" ? boyProfile : girlProfile,
    });

    if (newUser) {
      await generateTokenandSetCookie(newUser._id, res); // Generate token and set cookie (in response header
      await newUser.save(); // Save the new user to the database

      res.status(200).json({
        _id: newUser._id,
        fullName: newUser.fullName,
        username: newUser.username,
        profilePicture: newUser.profilePicture,
      });
    } else {
      res.status(400).json({ error: "Error in creating user" });
    }
  } catch (error) {
    console.log(error);
    res.status(400).json({ error: "Error in creating user" });
  }
};

 