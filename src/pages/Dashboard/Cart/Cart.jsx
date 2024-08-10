import useCart from '../../../hooks/useCart';
import Title from '../Title/Title';
import { RiDeleteBin6Fill } from 'react-icons/ri';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import Swal from 'sweetalert2';

const Cart = () => {
    const [cart, refetch] = useCart()
    const axiosSecure = useAxiosSecure()
    const totalPrice = cart.reduce((total, item) => total + item.price, 0)

    const handleCart = (id) => {
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
          axiosSecure.delete(`/carts/${id}`)
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
        <div className='font-serif'>
            <Title
                subHeading="My Cart"
                heading="Wanna Add More?"
            ></Title>
            <div className='md:px-14'>
            <div className='flex my-8 justify-around items-center'>
                <h1 className='text-3xl font-bold'>Total Orders: {cart.length}</h1>
                <h1 className='text-3xl font-bold'>Total Price: ${totalPrice}</h1>
                <button className='btn btn-warning'>Pay</button>
            </div>
            <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>
          <label>#</label>
        </th>
        <th>Item Image</th>
        <th>Item Name</th>
        <th>Price</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row  */}
      {
        cart.map((item, index) => <tr key={item._id}
        >
          <th>
            <label>
              {index+1}
            </label>
          </th>
          <td>
            <div className="flex items-center gap-3">
              <div className="avatar">
                <div className="mask mask-squircle h-12 w-12">
                  <img src={item.image} alt="" />
                </div>
              </div>
            </div>
          </td>
          <td>
           <div>{item.name}</div>
          </td>
          <td>{item.price}</td>
          <th>
            <button onClick={()=>handleCart(item._id)} className="btn btn-ghost"><RiDeleteBin6Fill className='text-2xl text-red-600'/></button>
          </th>
        </tr>)
      }
      
    </tbody>
  </table>
</div>
            </div>
        </div>
    );
};

export default Cart;