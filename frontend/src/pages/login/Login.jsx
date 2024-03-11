 

const Login = () => {
  return (
    <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
    <div className="w-full p-6 rounded-lg  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <h1 className="text-3xl font-semibold text-center text-gray-300">
        Login
        <span className="text-blue-500"> Chat App</span>
      </h1>
      <form action="">
        <div>
          <label   className="lable p-2">
            <span className="text-base lable-text" >UserName</span>
          </label>
          <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
        </div>
        <div>
          <label   className="lable p-2">
            <span className="text-base lable-text" >Password</span>
          </label>
          <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
        </div>
        <a href="">{"Don't"} have an Account </a>
        <div>
          <button className="btn btn-block btn-sm mt-2">Login</button>
        </div>
      </form>
      
    </div>
  </div>
  
  )
}

export default Login


 

// const Login = () => {
//   return (
//     <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
//     <div className="w-full p-6 rounded-lg  bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
//       <h1 className="text-3xl font-semibold text-center text-gray-300">
//         Login
//         <span className="text-blue-500"> Chat App</span>
//       </h1>
//       <form action="">
//         <div>
//           <label   className="lable p-2">
//             <span className="text-base lable-text" >UserName</span>
//           </label>
//           <input type="text" placeholder="Enter Username" className="w-full input input-bordered h-10" />
//         </div>
//         <div>
//           <label   className="lable p-2">
//             <span className="text-base lable-text" >Password</span>
//           </label>
//           <input type="password" placeholder="Enter Password" className="w-full input input-bordered h-10" />
//         </div>
//         <a href="">{"Don't"} have an Account </a>
//         <div>
//           <button className="btn btn-block btn-sm mt-2">Login</button>
//         </div>
//       </form>
      
//     </div>
//   </div>
  
//   )
// }

// export default Login