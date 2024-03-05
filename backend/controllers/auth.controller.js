import User from '../models/user.models.js';
export const login = (req, res) => {
  res.send("Login");
};


export const logout = (req, res) => {
  res.send("Logout");
};


export const signin = (req, res) => {
  res.send("Signin");
};


 
export const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        // Check if user with given email already exists
        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({ error: "User already exists" });
        }

        // Create a new user
        const newUser = new User({
            email,
            password
        });

        await newUser.save(); // Save the new user to the database

        res.status(200).json({ message: "User created successfully" });
    } catch (error) {
        console.log(error);
        res.status(400).json({ error: "Error in creating user" });
    }
};
