import { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import regImage from '../../assets/others/authentication2.png'
import './Register.css'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import { AuthContext } from '../../providers/AuthProvider';

const Register = () => {

    const { createUser, googleSignIn, userProfile } = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    //handle google login
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user)
                navigate(location?.state ? location.state : '/' )
            })
            .catch(err => {
                console.log(err.message)
                console.log(err.code)
            })
    }

    //handle email-password register
    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const url = form.photoUrl.value
        const email = form.email.value
        const password = form.password.value
        console.log(name, url, email, password)

        createUser(email, password)
            .then(result => {
                console.log(result.user)
                userProfile(name, url)
                .then(() => {

                })
                .catch(error => {
                    console.log(error.message)
                })
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Resistered Successfully",
                    showConfirmButton: false,
                    timer: 1500
                });
                form.reset()
                navigate(location?.state ? location.state : '/' )
            })
            .catch(err => {
                console.log(err.message)
            })

    }
    return (
        <>
            <Helmet>
                <title>Restaurant | Register</title>
            </Helmet>
            <div className="p-8 font-serif bgImage min-h-screen">
                <h1 className="text-5xl py-16 text-orange-400 font-bold">Register Here!</h1>
                <div className="flex justify-around flex-col lg:flex-row-reverse">
                    <div>
                        <img src={regImage} alt="" />
                    </div>
                    <div className=" w-full max-w-sm shrink-0 shadow-md  rounded-2xl">

                        <form onSubmit={handleRegister} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input type="text" name='name' placeholder="name" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Photo Url</span>
                                </label>
                                <input type="text" name='photoUrl' placeholder="photo url" className="input input-bordered" required />
                            </div>
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

                            <div className="form-control">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className='text-sm'>
                                <p>Already have account? Please <Link to="/login" className='text-blue-600'>Login</Link></p>
                            </div>
                            <p className='text-sm text-green-600'>or Sign in with</p>
                        </form>

                        {/* google sign-in */}
                        <div className='mb-4'>
                            <button onClick={handleGoogleLogin} className="">
                                <FcGoogle className='text-3xl ' />
                            </button>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;