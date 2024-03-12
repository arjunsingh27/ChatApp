import { Link } from "react-router-dom";
import { useState } from "react";
import GenderCheckbox from "./GenderCheckbox";
import useSignup from "../../hooks/useSignup";
const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  });

  const {loading, signup} = useSignup();
  const handlesubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
     
    
  };
  const handleCheckBoxChange = (gender) => {
    
    setInputs({ ...inputs, gender});
  };
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md br-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center pb-2">
          Sign Up <span className="text-blue-400"> Chat App</span>
        </h1>
        <form onSubmit={handlesubmit}>
          <div>
            <label className="lable p-2">
              <span className="text-base lable-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="w-full input input-bordered h-10"
              value={inputs.fullName}
              onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base lable-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter username"
              className="w-full input input-bordered h-10"
              value={inputs.username}
              onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base lable-text">Password</span>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full input input-bordered h-10"
              value={inputs.password}
              onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base lable-text">Confirm Password</span>
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full input input-bordered h-10"
              value={inputs.confirmPassword}
              onChange={(e) =>
                setInputs({ ...inputs, confirmPassword: e.target.value })
              }
            />
          </div>
          <GenderCheckbox 
          onCheckboxChange={handleCheckBoxChange} selectedGender={inputs.gender}
          />
          <Link to="/login"> Already have an Account ! Login</Link>
          <button className="btn btn-block btn-sm mt-2">{loading ? <span className="loading loading-spinner"></span> : "Sign Up"}</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
