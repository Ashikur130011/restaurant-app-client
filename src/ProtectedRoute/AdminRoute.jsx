import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({children}) => {
    const [isAdmin, isAdminLoading] = useAdmin()
    const {user, loading} =useAuth()
    const location = useLocation()

    if(loading || isAdminLoading){
        return <span className="loading loading-spinner text-warning"></span>
    }
    if(user && isAdmin){
        return children
    }
    return <Navigate state={location.pathname} to="/"></Navigate>;
};

export default AdminRoute;