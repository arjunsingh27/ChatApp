import User from "../models/user.models.js";
export const getUserForSideBar = async (req, res) => {
  try {
    const loggedInUserId = req.user._id;
    // console.log("Logged in user id", loggedInUserId);

    const filteredUsers = await User.find({
      _id: { $ne: loggedInUserId },
    }).select("-password");

    res.status(200).json(filteredUsers);
  } catch (error) {
    console.error("Error in user Controller", error); // Corrected to use console.error for better indication of errors
  }
};
