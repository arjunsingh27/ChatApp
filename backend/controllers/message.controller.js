import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMesssage = async (req, res) => {
 try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;
   
    let conversation = await Conversation.findOne({participants:{$all:[senderId,receiverId]}}) 

    if(!conversation){
        conversation = await Conversation.create({participants:[senderId,receiverId]})
    }

    const newMessage = new Message({
        senderId,
        receiverId,
        message
    })
    
    if(newMessage){
     
        conversation.messages.push(newMessage._id)
    }
    // await conversation.save()
    // await newMessage.save()

    await Promise.all([conversation.save(),newMessage.save()]);

    res.status(200).json(newMessage);

 } catch (error) {
    console.log("Error in message Controller", error);
 }
};
export const getMessages = async (req, res) => {
try {
    console("getMessages");
} catch (error) {
    
}
}