import { FaSearch } from "react-icons/fa";
import { useState } from "react";
import useGetConversations from "../../hooks/useGetConversations";
import useConversations from "../../../zustand/useConversation";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  const { conversations } = useGetConversations();
  const { setSelectedConversation } = useConversations();

  const handleSubmit = (e) => {
    e.preventDefault();
    const result = conversations.filter(checkUsername);
    console.log(result);

    if (result.length > 0) {
      setSelectedConversation(result[0]);
      console.log("Conversations:", conversations);
    }

    console.log("Filtered Result:", result);
  };

  const checkUsername = (conversation) => {
    return conversation.username.toLowerCase().includes(search.toLowerCase());
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2">
      <input
        type="text"
        className="input input-bordered rounded-full"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit" className="btn btn-circle bg-sky-500 text-white">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchInput;
