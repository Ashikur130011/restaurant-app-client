import { GiForkKnifeSpoon } from 'react-icons/gi';
import Title from '../Title/Title';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const UpdateItem = () => {
    const {category, name, price, recipe, _id } = useLoaderData()
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit, reset } = useForm()
    const onSubmit = async (data) => {
       
            //now send the menu data to the server with img url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
            }
            const menuRes = await axiosSecure.patch(`/menu/${_id}`, menuItem)
            console.log(menuRes.data)
            if(menuRes.data.modifiedCount > 0){
                reset()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} updated successfully`,
                    showConfirmButton: false,
                    timer: 1500
                  });
            }
            
    }
    return (
        <div>
            <Title heading="Update an item" subHeading="As your wish" ></Title>
            <div className='md:w-3/4 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full pt-4">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            type="text"
                            {...register("name", {required: true})}
                            defaultValue={name}
                            placeholder="Recipe Name"
                            className="input input-bordered w-full" />

                    </label>
                    <div className='flex gap-6'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue={category} {...register("category", {required: true})}
                                className='select select-bordered w-full'>
                                <option disabled value="default">Select a category</option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soup">Soup</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>

                        </label>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Price*</span>
                            </div>
                            <input
                                type="number"
                                {...register("price", {required: true})}
                                defaultValue={price}
                                placeholder="price"
                                className="input input-bordered w-full" />

                        </label>
                    </div>
                    
                    <label className="form-control">
                        <div className="label">
                            <span className="label-text">Recipe details</span>
                        </div>
                        <textarea
                            className="textarea textarea-bordered h-24"
                            defaultValue={recipe}
                            placeholder="Recipe details"
                            {...register('recipe')}
                        ></textarea>

                    </label>
                    {/* <input type="file" {...register('image', {required: true})} className="file-input  w-full my-4" /> */}
                    <div className='text-start mt-4'>
                    <button className="btn btn-warning">
                        Add Item
                        <GiForkKnifeSpoon className='text-xl'/>
                    </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateItem;