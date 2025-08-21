import { useState } from "react"
import { Link } from "react-router-dom";
import AuthLayout from "../../components/layouts/AuthLayout";
import Input from "../../components/Inputs/Inputs";
import ProfilePhotoSelector from "../../components/Inputs/ProfilePhotoSelector";
import { validateEmail } from "../../utils/helper";
const SignUp = () => {
    const [profilePic,setProfilePic]=useState("")
    const [email,setEmail]=useState("")
    const [fullName,setFullName]=useState("")
    const [password,setPassword]=useState("")
    const [error,setError]=useState(null)
    const handleSignup=async(e)=>{
        e.preventDefault();
        let profileImageURL=""
        if(!fullName){
            setError("Please enter your Fullname")
        }
        if(!validateEmail(email)){
            setError("Please enter a valid email address")
        }
        if(!password){
            setError("Please enter a password")
        }
        setError("")
    }
    return ( 
        <AuthLayout>
            <div className="lg:w-[100%] h-auto md:h-full mt-10 md:mt-0 pt- flex flex-col justify-center">
                <h3 className="text-xl text-black">Create an Account</h3>
                <p className="">
                    Join us today by entering your details
                </p>
                <form className="pt-4" onSubmit={handleSignup}>
                    <ProfilePhotoSelector image={profilePic} setImage={setProfilePic}/>
                    <div className="grid grid-col-1 md:grid-cols-2 gap-4 ">
                        <Input 
                            value={fullName}
                            onChange={(e)=>{setFullName(e.target.value)}}
                            label="Full Name"
                            placeholder="Enter Full Name"
                            type="text"
                            
                        />
                        <Input
                            value={email}
                            onChange={(e)=>{setEmail(e.target.value)}}
                            label="Email Address"
                            placeholder="you@example.com"
                            type="text"
                        />
                        <div className="col-span-2">
                            <Input
                                value={password}
                                onChange={(e)=>{setPassword(e.target.value)}}
                                label="Password"
                                placeholder="min 8 characters"
                                type="password"
                            />

                        </div>
                        {error && <p className="text-red-500 text-xs pb-2.5">{error}</p>}
                        <button type="submit" className="btn-primary">SIGNUP</button>
                        <p className="text-[13px] text-slate-800 mt-3">
                                Alresdy Have an Account?{" "}
                                <Link className="font-medium text-primary decoration-0 underline" to="/login">
                                Login
                                </Link>
                        </p>
                        
                    </div>
                    

                </form>
            </div>

        </AuthLayout>
     );
}
 
export default SignUp;