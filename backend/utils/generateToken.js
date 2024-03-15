import jwt from "jsonwebtoken";
import express from "express"

const generateTokenAndSetCookie = (userId, res) => {
     
	const token = jwt.sign({ userId }, process.env.JWT_SECRET, {
		expiresIn: "15d",
	});
	console.log(token);

	res.cookie("jwt", token, {
		maxAge: 15 * 24 * 60 * 60 * 1000, // MS
		httpOnly: false, // Allow access from client-side scripts
		sameSite: "", // Allow cross-origin requests
		secure: false, // Allow non-secure HTTP connections
	});
	
};

export default generateTokenAndSetCookie;
