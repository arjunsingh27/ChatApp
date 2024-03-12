 
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const LogoutButton = () => {
  const { loading, logout } = useLogout();

  return (
   !loading ? (
      <div className="mt-auto">
        <BiLogOut className='w-6 h-6 text-white cursor-pointer' onClick={logout} />
      </div>
    ) : ( 
      <span className='loading loading-spinner'></span>
    )
  );
}

export default LogoutButton;
