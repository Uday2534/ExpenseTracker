import { useState } from "react";
import AuthLayout from "../../components/layouts/AuthLayout";
import {Link, useNavigate} from "react-router-dom"
import Input from "../../components/Inputs/Inputs";
import { validateEmail } from "../../utils/helper";
import axiosInstance from "../../utils/axiosInstance";
import { API_PATHS } from "../../utils/apiPath";
const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState(null)
    const navigate=useNavigate();
    const handleSubmit=async(e)=>{
        e.preventDefault();
        if(!validateEmail(email)){
          setError("Please Enter a valid Email Address")
          return;
        }
        if(!password){
            setError("Please Enter the Password")
            return;
        }
        setError("")
        try{
            const response=await axiosInstance.post(API_PATHS.AUTH.LOGIN,{
                email,
                password,
            })
            const {token,user}=response.data
            if(token){
                localStorage.setItem("token",token)
                navigate("/dashboard")
            }
        }
        catch(error){
            if(error.response && error.response.data.message){
                setError(error.response.data.message)
            }
            else{
                setError("Invalid Credentials.")
            }
        }
    }
    return ( 
        <AuthLayout>
            <div className="lg:w-[70%] h-3/4 md:h-full flex flex-col justify-center">
                <h3 className="text-xl text-black">Welcome Back</h3>
                <p className="text-xs text-slate-700 mt-[5px] mb-6">Please Enter your details to login</p>
                <form onSubmit={handleSubmit}>
                    <Input
                      value={email}
                      onChange={(e)=>{setEmail(e.target.value)}}
                      label="Email Address"
                      placeholder="you@example.com"
                      type="text"
                    />
                    <Input
                      value={password}
                      onChange={(e)=>{setPassword(e.target.value)}}
                      label="Password"
                      placeholder="min 8 characters"
                      type="password"
                      
                    />
                    {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
                    <button type="submit" className="btn-primary">LOGIN</button>
                    <p className="text-[13px] text-slate-800 mt-3">
                        Don't have an account?{" "}
                        <Link className="font-medium text-primary decoration-0 underline" to="/signUp">
                         SignUp
                        </Link>
                    </p>
                </form>
            </div>
        </AuthLayout>
    )
}
 
export default Login;