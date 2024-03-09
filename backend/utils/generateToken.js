import jwt from 'jsonwebtoken';
const generateTokenandSetCookie = (userId,res)=>{
    const token = jwt.sign({userId},process.env.JWT_SECRET,{
    expiresIn:"1d"
    });
    res.cookie("jwt",token,{
        maxAgae:15*24*60*60*1000,//ms
        httpOnly:true,//prevent cross site scripting attacks
        sameSite:"strict",//Csrf attacks cross site request forgery attacks
        secure:process.env.NODE_ENV !== "development" ? true : false
    })
}
export default generateTokenandSetCookie;