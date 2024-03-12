import { useState } from 'react';
import axios from 'axios';
import { useAuthContext } from '../context/AuthContext';

const useLogout = (setAuthUser) => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser: contextSetAuthUser } = useAuthContext();

  const logout = async () => {
    setLoading(true);
    try {
      const res = await axios.post("http://localhost:4002/api/auth/logout");
      localStorage.removeItem("chat-user");
      if (setAuthUser) {
        setAuthUser(null);
      } else if (contextSetAuthUser) {
        contextSetAuthUser(null);
      }
      console.log(res.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return { loading, logout };
}

export default useLogout;
