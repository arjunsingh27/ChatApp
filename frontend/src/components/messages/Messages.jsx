 
import Message from './Message'
import MessageSkeleton from '../skeletons/MessageSkeleton'
import useGetMessages from "../../hooks/useGetMessages";

const Messages = () => {
  const {messages,loading} = useGetMessages();
  console.log("messages",messages);
  return (
     <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.map((message) => <Message key={message._id} message={message} />)}
      {loading && [...Array(3)].map((_,i) => <MessageSkeleton key={i} />)}
      {!loading && messages.length === 0 && (<p className="text-center ">Send a Message to start Conversation</p>)}

     </div>
  )
}

export default Messages