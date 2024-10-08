import { Link } from "react-router-dom"
import Login from "./Login";
import { useForm } from "react-hook-form"


function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit=  (data) => console.log(data)
  return (
    <div className="flex h-screen items-center justify-center border-black shadow-md">
        <div className="">
      <div className="modal-box w-screen dark:bg-slate-900 dark:text-white">
    <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Sign Up</h3>
    <div className="mt-3 space-y-2">
    <div className="mt-3">
        <span >User</span>
        <br/>
        <input type="text" className="w-80 px-4 py-1 border-black rounded-md mt-2" 
        placeholder="Enter your username"
        {...register("username", { required: true })}/>
         <br/>
         {errors.username && <span className="text-sm text-red-600">This field is required</span>}
    </div>
        <span >Email</span>
        <br/>
        <input type="email" className="w-80 px-4 py-1 border-black rounded-md mt-2" 
        placeholder="Enter your Email"
        {...register("email", { required: true })}/>
        <br/>
        {errors.email && <span className="text-sm text-red-600">This field is required</span>}
    </div>
    <div className="mt-3">
        <span >Password</span>
        <br/>
        <input type="password" className="w-80 px-4 py-1 border-black rounded-md mt-2" 
        placeholder="Enter your password"
        {...register("password", { required: true })}/>
         <br/>
         {errors.password && <span className="text-sm text-red-600">This field is required</span>}
    </div>
  
    <div className="mt-4 flex justify-around ">
    <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-800 duration-200">Sign Up</button>
    <p className="text-xl">Have Account?<button className="underline text-blue-600 cursor-pointer"
    onClick={()=>document.getElementById("my_modal_3").showModal()
    }
    >Login</button>{" "}
    <Login/>
    </p>
    </div> 
    </form> 
  </div>
  </div>
    </div>
  )
}

export default SignUp;