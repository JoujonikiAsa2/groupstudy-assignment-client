import { useState } from "react";
import { AiFillEye, AiFillGithub, AiFillGoogleCircle, AiOutlineEye, AiOutlineFileImage, AiOutlineMail, AiOutlineProfile } from "react-icons/ai";
import { RiLockPasswordLine } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {

    const firebaseAuth = useAuth()
    const { createUser, signOut } = firebaseAuth
    // console.log(firebaseAuth,createUser,user)

    const [passType, setPassType] = useState("password")
    const [error, setError] = useState(null)


    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const image = form.photo.value
        const email = form.email.value
        const password = form.password.value

        const pattern = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

        if (password.length < 6) {
            setError("Password should be at 6 characters or longer")
            return
        }
        else if (!/[A-Z]/.test(password)) {
            setError('Don not have one uppercase character')
            return;
        }
        else if (!pattern.test(password)) {
            setError("Do not have special charater")
            return;
        }
        else{
            setError("")
        }

        createUser(email, password)
            .then(res => {
                toast.success(`Successfully signed up as ! ${res.user.displayName}`)
                console.log(res.user)
                signOut()
            })
            .catch(error => {
                console.log(error.code)
                toast.error(`Failed to sign up!`)
                setError(error.code)
            })
        // console.log(name, email, image, password)
        form.reset()

    }

    return (
        <div className='w-full h-[90vh] flex justify-center items-center p-12 lg:p-0 md:p-0'>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            <div className="w-full lg:w-[1/2] md:w-1/2 h-[1/2] flex flex-col justify-center items-center">
                <div>
                    <h2 className="text-2xl font-bold text-[#010101] text-center py-0 md:py-8 lg:py-8 pt-12">Learn Together</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row lg:flex-row gap-4 py-4 font-bold">
                    <div className='flex-1 text-[#F4F9FD] bg-[#2BAFFC] flex flex-row-reverse justify-center items-center gap-2 p-2 rounded cursor-pointer'>
                        <span>Sign Up with Google</span> <AiFillGoogleCircle className='text-xl'></AiFillGoogleCircle>
                    </div>
                    <div className='flex-1 text-[#F4F9FD] bg-[#2BAFFC] flex flex-row-reverse justify-center items-center gap-2 p-2 rounded cursor-pointer'>
                        <span>Sign Up with GitHub</span> <AiFillGithub className='text-xl'></AiFillGithub>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 font-bold py-4'>
                    <div className='w-24 lg:w-48 md:w-48 h-[1px] bg-[#010101]'></div>
                    <div>Or</div>
                    <div className='w-24 lg:w-48 md:w-48 h-[1px]  bg-[#010101]'></div>
                </div>
                <div className=' w-full'>
                    <form onSubmit={handleSignUp}>
                        <div className='flex flex-col gap-4'>
                            <div className="flex justify-center items-center gap-2">
                                <div className="flex-0"><AiOutlineProfile></AiOutlineProfile></div>
                                <div className="flex-1">
                                    <input type="text" name='name' placeholder='Enter your name...' className='input input-bordered rounded w-full' />
                                </div>
                            </div>
                            <div className="flex justify-center items-center gap-2">
                                <div className="flex-0"><AiOutlineFileImage></AiOutlineFileImage></div>
                                <div className="flex-1">
                                    <input type="text" name='photo' placeholder='Enter your photo URL...' className='input input-bordered rounded w-full' />
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-2'>
                                <div className='flex-0'>
                                    <AiOutlineMail></AiOutlineMail>
                                </div>
                                <div className='flex-1'>
                                    <input type="email" name='email' placeholder='Enter your email...' className='input input-bordered rounded w-full' />
                                </div>
                            </div>
                            <div className='flex justify-center items-center gap-2 relative'>
                                <div className='flex-0'>
                                    <RiLockPasswordLine></RiLockPasswordLine>
                                </div>
                                <div className='flex-1'>
                                    <input type={passType} name='password' placeholder='Enter your password...' className='input input-bordered rounded w-full' />
                                </div>
                                <div className='absolute right-4 cursor-pointer'>
                                    <div onClick={() => setPassType("text")} className={passType == "text" && "hidden"}><AiFillEye></AiFillEye></div>
                                    {
                                        passType == "text" && <div onClick={() => setPassType("password")}><AiOutlineEye></AiOutlineEye></div>
                                    }
                                </div>

                            </div>
                            <div>
                                {error && <small className="text-red-500 font-bold">{error}</small>}
                            </div>
                            <input type="submit" value="Sign Up" className='input input-bordered rounded w-full text-[#F4F9FD] bg-[#2BAFFC] hover:bg-transparent hover:border-[#2BAFFC] hover:text-[#010101] cursor-pointer font-bold' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;