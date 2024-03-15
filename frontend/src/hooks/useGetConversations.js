import axios from 'axios';
import { useState, useEffect } from 'react';

const useGetConversations = () => {
    const [loading, setLoading] = useState(false);
    const [conversations, setConversations] = useState([]);

    useEffect(() => {
        const getConversations = async () => {
            try {
                setLoading(true);
                // const user = await localStorage.getItem("chat-user");
                const res = await axios.get("/api/users");
                console.log(res.data);
                setConversations(res.data);
            } catch (err) {
                console.log(err);
            } finally {
                setLoading(false);
            }
        };

        getConversations();

    }, []);

    return { loading, conversations };
};

export default useGetConversations;
