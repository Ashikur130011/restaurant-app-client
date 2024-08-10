import { Link, useLocation, useNavigate } from 'react-router-dom';
import loginImg from '../../assets/others/authentication2.png'
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { loadCaptchaEnginge, LoadCanvasTemplate, validateCaptcha } from 'react-simple-captcha';
import { useContext, useEffect, useRef, useState } from 'react';
import './Login.css'
import { Helmet } from 'react-helmet-async';
import { AuthContext } from '../../providers/AuthProvider';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const { signInUser } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    //captcha
    const captchaRef = useRef(null)
    const [disabled, setDisabled] = useState(true)

    useEffect(() => {
        loadCaptchaEnginge(6);
    }, [])


    const handleCaptcha = () => {
        const user_captcha_value = captchaRef.current.value
        console.log(user_captcha_value)
        if (validateCaptcha(user_captcha_value)) {
            setDisabled(false)
        }
    }

    //handle google login
   
    //handle email-password  login
    const handlelogin = (e) => {
        e.preventDefault()
        const form = e.target
        const email = form.email.value
        const password = form.password.value
        console.log(email, password)

        signInUser(email, password)
            .then(result => {
                console.log(result.user)
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Logged in Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset()
                navigate(location?.state ? location.state : '/')
            })
            .catch(err => {
                console.log(err.message)
            })

    }
    return (
        <>
            <Helmet>
                <title>Restaurant | Login</title>
            </Helmet>
            <div className="p-8 font-serif  bgImage min-h-screen">
                <h1 className="text-5xl py-8 text-orange-400 font-bold">Login now!</h1>
                <div className="flex justify-around flex-col lg:flex-row">
                    <div>
                        <img src={loginImg} alt="" />
                    </div>
                    <div className=" w-full max-w-sm shrink-0 shadow-md rounded-2xl">

                        <form onSubmit={handlelogin}  className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                            </div>

                            {/* Captcha */}
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Captcha</span>
                                </label>
                                <LoadCanvasTemplate />
                                <div className='flex items-center justify-around'>
                                    <input type="text" ref={captchaRef} name='captcha' placeholder="type the captcha above.." className="input input-bordered" required />
                                    <input onClick={handleCaptcha} type="checkbox" className="checkbox checkbox-primary" />
                                </div>
                            </div>
                            <div className="form-control">
                                <button disabled={disabled} className="btn btn-primary">Login</button>
                            </div>
                            <div className='text-sm'>
                                <p>Don't have account? Please <Link to="/register" className='text-blue-600'>Register</Link></p>
                            </div>
                            <p className='text-sm text-green-600'>or Sign in with</p>
                        </form>

                        {/* google sign-in */}
                        <SocialLogin/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;