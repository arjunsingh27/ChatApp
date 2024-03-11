import GenderCheckbox from "./GenderCheckbox";
const SignUp = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
      <div className="w-full p-6 rounded-lg shadow-md br-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <h1 className="text-3xl text-center pb-2">
          Sign Up <span className="text-blue-400"> Chat App</span>
        </h1>
        <form action="">
          <div>
            <label className="lable p-2">
              <span className="text-base lable-text">Full Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter FullName"
              className="w-full input input-bordered h-10"
            />
          </div>
          <div>
            <label className="lable p-2">
              <span className="text-base lable-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="Enter Username"
              className="w-full input input-bordered h-10"
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
            />
          </div>
          <GenderCheckbox />
          <a href=""> Already have an Account ! Login</a>
          <button className="btn btn-block btn-sm mt-2">SignUp</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
