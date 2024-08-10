import Title from '../Title/Title';
import useMenu from '../../../hooks/useMenu';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import { MdEditNote } from 'react-icons/md';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { Link } from 'react-router-dom';

const ManageItems = () => {
    const [menu, , refetch] = useMenu()
    const axiosSecure = useAxiosSecure()

    const handleDelete = (item) => {
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
                axiosSecure.delete(`/menu/${item._id}`)
                    .then(res => {
                        // console.log(res)
                        if (res.data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: `${item.name} has been deleted`,
                                icon: "success"
                            });
                            refetch()
                        }
                    })
                //   
            }
        });
    }
    return (
        <div>
            <Title subHeading="Hurry Up" heading="manage All Items"></Title>
            <div className="overflow-x-auto md:ml-16 mt-8">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Item Image</th>
                            <th>Item Name</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody className=' '>
                        {
                            menu.map((item, index) => <tr
                                className='text-base'
                                key={item._id}>
                                <th>{index + 1}</th>
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-16 w-16">
                                                <img src={item.image} alt="" />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <span className="">{item.name}</span>
                                </td>
                                <td>{item.price}</td>
                                <td>
                                    <Link to={`/dashboard/updateItem/${item._id}`} ><button className="btn"><MdEditNote className='text-2xl text-green-700' /></button></Link>
                                </td>
                                <td><button onClick={() => handleDelete(item)} className="btn btn-ghost"><RiDeleteBin6Fill className='text-2xl text-red-600' /></button></td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageItems;