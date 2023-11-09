import { createContext, useState } from 'react';
import { AiFillEye, AiFillGithub, AiFillGoogleCircle, AiOutlineEye, AiOutlineMail } from 'react-icons/ai'
import { RiArrowLeftCircleFill, RiLockPasswordLine } from 'react-icons/ri'
import useAuth from '../../Hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

export const CurrentLoggedUser = createContext()
const Login = () => {
    const firebaseAuth = useAuth()
    const { user, login, googleLogin, gitHubLogin } = firebaseAuth
    const [passType, setPassType] = useState("password")
    const [error, setError] = useState([])
    const location = useLocation()

    const navigate = useNavigate()

    const handleGoogleLogin = () => {
        googleLogin()
            .then(res => {
                console.log(res.user)
                if (res.user != null) {
   
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    navigate(location.state || '/')
                    // signOut()
                }
            }
            )
            .catch(error => setError(error.message))
    }

    const handleGitHubLogin = () => {
        gitHubLogin()
            .then(res => {
                console.log(res.user)

                if (res.user != null) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    navigate(location.state || "/")
                    // signOut()
                }
            }
            )
            .catch(error => error(error.message))
    }


    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value

        console.log(email, password)
        login(email, password)
            .then(res => {
                console.log(res.user)
                if (res.user != null) {
                    const Toast = Swal.mixin({
                        toast: true,
                        position: 'top-end',
                        showConfirmButton: false,
                        timer: 1000,
                        timerProgressBar: true,
                        didOpen: (toast) => {
                            toast.addEventListener('mouseenter', Swal.stopTimer)
                            toast.addEventListener('mouseleave', Swal.resumeTimer)
                        }
                    })

                    Toast.fire({
                        icon: 'success',
                        title: 'Signed in successfully'
                    })
                    navigate(location.state || '/')
                    // signOut()
                }
            }
            )
            .catch(error => setError(error.message))
        form.reset()
        console.log(user)
    }

    // const value = { loggeduser }

    return (
        <div className='p-8'>
            <Link to="/" className='w-20 flex justify-center border border-black p-1 rounded'>Home
            </Link>
            <div className='h-[90vh] flex flex-col justify-center items-center'>
                <div className="w-full lg:w-[1/2] md:w-1/2 h-[1/2] flex flex-col justify-center items-center">
                    <div>
                        <h2 className="text-2xl font-bold text-[#010101] text-center pb-8">Learn Together</h2>
                    </div>
                    <div className="w-full flex flex-col md:flex-row lg:flex-row gap-4 py-4 font-bold">
                        <div className='flex-1 text-[#F4F9FD] bg-[#2BAFFC] flex flex-row-reverse justify-center items-center gap-2 p-2 rounded cursor-pointer' onClick={handleGoogleLogin}>
                            <span>Login with Google</span> <AiFillGoogleCircle className='text-2xl'></AiFillGoogleCircle>
                        </div>
                        <div className='flex-1 text-[#F4F9FD] bg-[#2BAFFC] flex flex-row-reverse justify-center items-center gap-2 p-2 rounded cursor-pointer' onClick={handleGitHubLogin}>
                            <span>Login with GitHub</span> <AiFillGithub className='text-2xl'></AiFillGithub>
                        </div>
                    </div>
                    <div className='flex justify-center items-center gap-2 font-bold py-4'>
                        <div className='w-24 lg:w-48 md:w-48 h-[1px] bg-[#010101]'></div>
                        <div>Or</div>
                        <div className='w-24 lg:w-48 md:w-48 h-[1px]  bg-[#010101]'></div>
                    </div>
                    <div className=' w-full'>
                        <form onSubmit={handleLogin}>
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
                                        <div onClick={() => setPassType("text")} className={passType == "text" && "hidden"}><AiFillEye></AiFillEye></div>
                                        {
                                            passType == "text" && <div onClick={() => setPassType("password")}><AiOutlineEye></AiOutlineEye></div>
                                        }
                                    </div>
                                </div>
                                <div>
                                    {error ? <small className='text-red-700'>{error}</small> : <p></p>}
                                </div>
                                <div>
                                    <input type="submit" value="Login" className='input input-bordered rounded w-full text-[#F4F9FD] bg-[#2BAFFC] hover:bg-transparent hover:border-[#2BAFFC] hover:text-[#010101] cursor-pointer font-bold' />
                                </div>

                            </div>
                        </form>
                        <div className=' py-6'>
                            <small>Do not have an account? Go to <Link to="/register" className="text-red-500 font-bold">Sign Up</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>);
};

export default Login;