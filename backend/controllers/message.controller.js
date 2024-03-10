import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";
export const sendMesssage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participants: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save()
    // await newMessage.save()

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(200).json(newMessage);
  } catch (error) {
    console.log("Error in message Controller", error);
  }
};

export const getMessages = async (req, res) => {
  try {
    console.log("Inside getMessages");
    const { id: userToChatId } = req.params;
    const senderId = req.user._id; // Assuming req.user is populated with the current user's ID
    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);
    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.error("Error in message Controller", error); // Corrected to use console.error for better indication of errors
    res.status(500).json({ message: "Internal Server Error" });
  }
};
