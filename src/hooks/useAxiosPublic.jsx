import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'https://restaurant-project-server-peach.vercel.app'
})
const useAxiosPublic = () => {

    return axiosSecure;
};

export default useAxiosPublic;