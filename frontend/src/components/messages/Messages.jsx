import { useEffect, useRef } from 'react';
import Message from './Message';
import MessageSkeleton from '../skeletons/MessageSkeleton';
import useGetMessages from "../../hooks/useGetMessages";

const Messages = () => {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    if (lastMessageRef.current) {
      lastMessageRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]); // Trigger effect when messages change

  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.map((message, index) => (
        <div key={message._id} ref={index === messages.length - 1 ? lastMessageRef : null}>
          <Message message={message} />
        </div>
      ))}
      {loading && [...Array(3)].map((_, i) => <MessageSkeleton key={i} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a Message to start Conversation</p>
      )}
    </div>
  );
};

export default Messages;
