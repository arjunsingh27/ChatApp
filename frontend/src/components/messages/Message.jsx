import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../../zustand/useConversation";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  console.log(selectedConversation);
  const fromMe = message.senderId === authUser._id; // Corrected typo "messahe" to "message"
  const chatClassName = fromMe ? "chat-end" : "chat-start";
  const profilePic = fromMe ? authUser.profilePic : selectedConversation.profilePicture;
  const bubbleBgColor = fromMe ? "bg-blue-500" : "bg-gray-500";
  return (
    <div className={`chat ${chatClassName}`}> {/* Corrected backticks for className */}
      <div className="avatar chat-image">
        <div className="w-10 rounded-full">
          <img src={profilePic} alt="" /> {/* Changed source to profilePic */}
        </div>
      </div>
      <div className={`chat-bubble text-white ${bubbleBgColor}`}>{message.message}</div> {/* Used bubbleBgColor for dynamic background color */}
    </div>
  );
};

export default Message;
