import { useQuery } from '@tanstack/react-query';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Title from '../Title/Title';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { HiUserGroup } from 'react-icons/hi';
import Swal from 'sweetalert2';

const ManageUsers = () => {
    const axiosSecure = useAxiosSecure()
    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users', )
            return res.data
        }
    })

    const handleMakeAdmin = (id, name) => {

        axiosSecure.patch(`users/admin/${id}`)
        .then(res => {
            if(res.data.modifiedCount > 0){
                Swal.fire({
                    title: "Admin selected successfully",
                    text: `From now ${name} is an Admin `,
                    icon: "success"
                  });
                  refetch()
            }
        })
        
    }
    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          }).then((result) => {
            if (result.isConfirmed) {
              axiosSecure.delete(`/users/${id}`)
            .then(res=> {
              if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                  title: "Deleted!",
                  text: "Your file has been deleted.",
                  icon: "success"
                });
              }
            })
              
            }
          });
    }
    return (
        <div >
            <Title
                subHeading="How many ??"
                heading="Manage All users"
            ></Title>
            <div className='md:px-14'>
                <div className='my-8 text-start'>
                    <h1 className='text-2xl font-bold'>Total Users: {users.length}</h1>
                </div>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            {
                                users.map((user, index) => <tr key={user._id}>
                                    <th>{index +1}</th>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>
                                        {
                                            user.role === 'admin' ? <p className='font-bold text-green-600'>Admin</p> :
                                            <button onClick={()=>handleMakeAdmin(user._id, user.name)} className="btn btn-ghost"><HiUserGroup className='text-2xl text-green-700'/></button>
                                        }
                                    </td>
                                    <td><button onClick={()=>handleDelete(user._id)} className="btn btn-ghost"><RiDeleteBin6Fill className='text-2xl text-red-600'/></button></td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default ManageUsers;