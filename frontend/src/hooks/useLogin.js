import axios from 'axios';
import  { useState } from 'react'; // Added { useState }
import { toast } from 'react-hot-toast'; // Assuming toast is defined elsewhere
import { useAuthContext } from '../context/AuthContext';

const useLogin = () => {
    const [loading, setLoading] = useState(false); // Corrected setLoading
    const { setAuthUser } = useAuthContext();

    const login = async ({ username, password }) => {
        try {
            const res = await axios.post("/api/auth/login", { username, password }); // Added await
            localStorage.setItem("chat-user", JSON.stringify(res.data)); // Added JSON.stringify
            setAuthUser(res.data);

        } catch (error) {
            toast.error(error.response.data.message); // Assuming toast is defined elsewhere
        } finally {
            setLoading(false); // Corrected setLoading
        }
    };

    return { login, loading }; // Added return statement
};

export default useLogin; // Moved export statement outside of the function
