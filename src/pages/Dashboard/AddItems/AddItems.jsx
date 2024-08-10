import { GiForkKnifeSpoon } from 'react-icons/gi';
import Title from '../Title/Title';
import { useForm } from 'react-hook-form';
import useAxiosPublic from '../../../hooks/useAxiosPublic';
import useAxiosSecure from '../../../hooks/useAxiosSecure';

const img_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY
const image_hosting_api = `https://api.imgbb.com/1/upload?&key=${img_hosting_key}`

const AddItems = () => {
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { register, handleSubmit } = useForm()
    const onSubmit = async (data) => {
        console.log(data.image)
        //image upload to imgbb and then get an url
        const imgFile = {image: data.image[0]}
        const res = await axiosPublic.post(image_hosting_api, imgFile, {
            headers: {'Content-Type': 'multipart/form-data' },
        })
        if(res.data.success){
            //now send the menu data to the server with img url
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseFloat(data.price),
                recipe: data.recipe,
                image: data.image
            }
            const menuRes = await axiosSecure.post('/menu', menuItem)
            console.log(menuRes.data)
            
        }
        console.log(res.data)
    }
    return (
        <div>
            <Title
                heading="Add an Item"
                subHeading="What's new?"
            ></Title>
            <div className='md:w-3/4 mx-auto'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <label className="form-control w-full pt-4">
                        <div className="label">
                            <span className="label-text">Recipe Name*</span>
                        </div>
                        <input
                            type="text"
                            {...register("name", {required: true})}
                            placeholder="Recipe Name*"
                            className="input input-bordered w-full" />

                    </label>
                    <div className='flex gap-6'>
                        <label className="form-control w-full">
                            <div className="label">
                                <span className="label-text">Category*</span>
                            </div>
                            <select defaultValue='default' {...register("category", {required: true})}
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
                            placeholder="Recipe details"
                            {...register('recipe')}
                        ></textarea>

                    </label>
                    <input type="file" {...register('image', {required: true})} className="file-input  w-full my-4" />
                    <div className='text-start'>
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

export default AddItems;