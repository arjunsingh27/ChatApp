import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../../zustand/useConversation";
import { extractTime } from "../../../utils/extractTime";

const Message = ({ message }) => {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  console.log(selectedConversation);
  // eslint-disable-next-line no-undef
  const formattedTime = extractTime(message.createdAt);
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
      <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedTime}</div>
    </div>
  );
};

export default Message;
