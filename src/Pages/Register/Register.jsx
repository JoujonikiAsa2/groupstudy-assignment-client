import { useState } from "react";
import { AiFillEye, AiFillGithub, AiFillGoogleCircle, AiOutlineEye, AiOutlineFileImage, AiOutlineMail, AiOutlineProfile } from "react-icons/ai";
import { RiArrowLeftCircleFill, RiLockPasswordLine } from "react-icons/ri";
import useAuth from "../../Hooks/useAuth";
import toast, { Toaster } from "react-hot-toast";
import { updateProfile } from "firebase/auth";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Register = () => {

    const firebaseAuth = useAuth()
    const { createUser, signOut, googleLogin, gitHubLogin } = firebaseAuth
    // console.log(firebaseAuth,createUser,user)

    const [passType, setPassType] = useState("password")
    const [error, setError] = useState(null)

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
                    navigate('/')
                }
            })
            .catch(error => console.log(error.message))
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
                    navigate('/')
                    // signOut()
                }
            }
            )
            .catch(error => console.log(error.message))
    }


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
        else {
            setError("")
        }

        createUser(email, password)
            .then(res => {

                console.log(res.user)
                updateProfile(res.user, {
                    displayName: name,
                    photoURL: image,
                    email: email
                })

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
                        title: 'Registered successfully'
                    })
                    navigate('/login')
                } if (res.user != null) {
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
                    navigate('/login')
                    // signOut()
                }

            })
            .catch(error => {
                console.log(error.code)
                toast.error(`Failed to sign up!`)
                setError(error.code)
            })
        // console.log(name, email, image, password)
        form.reset()
        signOut()
            .then(() => console.log("Successfull"))
            .catch(error => console.log(error))
    }

    return (
        <div className="p-8">
            <Link to="/" className='w-20 flex justify-center border border-black p-1 rounded mb-6'>Home
            </Link>
            <div className='w-full h-[90vh] flex justify-center items-center '>
                <div className="w-full lg:w-[1/2] md:w-1/2 ">
                    <div className="">
                        <h2 className="text-2xl font-bold text-[#010101] text-center my-8 ">Learn Together</h2>
                    </div>
                    <div className="w-full flex flex-col md:flex-row lg:flex-row gap-4 font-bold">
                        <div className='flex-1 text-[#F4F9FD] bg-[#2BAFFC] flex flex-row-reverse justify-center items-center gap-2 p-2 rounded cursor-pointer' onClick={handleGoogleLogin}>
                            <span>Sign Up with Google</span> <AiFillGoogleCircle className='text-xl'></AiFillGoogleCircle>
                        </div>
                        <div className='flex-1 text-[#F4F9FD] bg-[#2BAFFC] flex flex-row-reverse justify-center items-center gap-2 p-2 rounded cursor-pointer' onClick={handleGitHubLogin}>
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
                        <div className=' py-6'>
                            <small>Already have an account? Go to <Link to="/login" className="text-red-500 font-bold">Login</Link></small>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Register;