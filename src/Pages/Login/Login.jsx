import { useState } from 'react';
import { AiFillEye, AiFillGithub, AiFillGoogleCircle, AiOutlineEye, AiOutlineMail } from 'react-icons/ai'
import { RiLockPasswordLine } from 'react-icons/ri'
const Login = () => {
    const [passType, setPassType] = useState("password")

    return (
        <div className='h-[90vh] flex justify-center items-center'>
            <div className="w-full lg:w-[1/2] md:w-1/2 h-[1/2]  p-12 lg:p-0 md:p-0 flex flex-col justify-center items-center">
                <div>
                    <h2 className="text-2xl font-bold text-[#010101] text-center py-8">Learn Together</h2>
                </div>
                <div className="w-full flex flex-col md:flex-row lg:flex-row gap-4 py-4 font-bold">
                    <div className='flex-1 text-[#F4F9FD] bg-[#2BAFFC] flex flex-row-reverse justify-center items-center gap-2 p-2 rounded cursor-pointer'>
                        <span>Login with Google</span> <AiFillGoogleCircle className='text-2xl'></AiFillGoogleCircle>
                    </div>
                    <div className='flex-1 text-[#F4F9FD] bg-[#2BAFFC] flex flex-row-reverse justify-center items-center gap-2 p-2 rounded cursor-pointer'>
                        <span>Login with GitHub</span> <AiFillGithub className='text-2xl'></AiFillGithub>
                    </div>
                </div>
                <div className='flex justify-center items-center gap-2 font-bold py-4'>
                    <div className='w-24 lg:w-48 md:w-48 h-[1px] bg-[#010101]'></div>
                    <div>Or</div>
                    <div className='w-24 lg:w-48 md:w-48 h-[1px]  bg-[#010101]'></div>
                </div>
                <div className=' w-full'>
                    <form>
                        <div className='flex flex-col gap-6'>
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
                                    <div onClick={()=> setPassType("text")} className={passType=="text" && "hidden"}><AiFillEye></AiFillEye></div>
                                    {
                                        passType=="text" && <div onClick={()=>setPassType("password")}><AiOutlineEye></AiOutlineEye></div>
                                    }
                                </div>
                            </div>
                            <input type="submit" value="Login" className='input input-bordered rounded w-full text-[#F4F9FD] bg-[#2BAFFC] hover:bg-transparent hover:border-[#2BAFFC] hover:text-[#010101] cursor-pointer font-bold' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;