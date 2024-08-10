import { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider';
import { useLocation, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

const SocialLogin = () => {
    const { googleSignIn } = useContext(AuthContext)
    const axiosPublic = useAxiosPublic()
    const location = useLocation()
    const navigate = useNavigate()

    //handle google login
    const handleGoogleLogin = () => {
        googleSignIn()
            .then(result => {
                console.log(result)
                const userInfo = {
                    name: result.user?.displayName,
                    email: result.user?.email
                }
                axiosPublic.post('/user', userInfo)
                .then(res => {
                    console.log(res.data)
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "Successfully Logged In By Google",
                        showConfirmButton: false,
                        timer: 1500
                    });
                    navigate(location?.state ? location.state : '/')
                })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='mb-4'>
            <button onClick={handleGoogleLogin} className="">
                <FcGoogle className='text-3xl ' />
            </button>

        </div>
    );
};

export default SocialLogin;