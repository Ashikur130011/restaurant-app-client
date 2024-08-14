import axios from "axios";
import { useNavigate } from "react-router-dom";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})

const useAxiosSecure = () => {
    const navigate = useNavigate()
    const {logOut} = useAuth()
    // request interceptor to add authorization header for every secure call to the api
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`;
        return config; 
    }, function (error) {
        return Promise.reject(error)
    })

    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) =>{
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        const status = error.response.status
        if(status === 401 || status === 403){
            await logOut()
        }
        return Promise.reject(error);
    })
    return axiosSecure;
}
export default useAxiosSecure;