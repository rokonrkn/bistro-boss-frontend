import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddItem = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);

    const categories = [
        { value: "food", label: "Food" },
        { value: "drinks", label: "Drinks" },
        { value: "dessert", label: "Dessert" },
        { value: "snacks", label: "Snacks" },
    ];

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;


    const onSubmit = async (data) => {
        setLoading(true);
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("description", data.description);
        formData.append("category", data.category);
        formData.append("price", data.price);
        if (data.image && data.image[0]) {
            formData.append("image", data.image[0]);
        }

        // for (let pair of formData.entries()) { console.log(pair[0] + ": ", pair[1]); }
        console.log([...formData]);

        try {
            const response = await fetch(`${apiBaseUrl}/api/menuItems`, {
                method: "POST",
                body: formData,
            });
            const result = await response.json();
            console.log("Server response:", result);
            reset();
            toast.success(result.message);

        } catch (error) {
            console.error("Error uploading item:", error);
            toast.error(error.message);

        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="md:px-44">
            <ToastContainer />
            <div className="bg-[#E8E8E8] md:p-10 shadow-md">
                <SectionHeading
                    subHeading="---What's New?---"
                    mainHeading="Add an Item"
                />
                <div className="mt-10">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/*  Name */}
                        <div className="form-control w-full flex flex-col mb-4">
                            <label htmlFor="name">Recipe Name <sup>*</sup></label>
                            <input
                                id="name"
                                type="text"
                                placeholder="Recipe Name"
                                {...register("name", { required: "Recipe Name is required" })}
                                className="border p-2 rounded bg-white focus:outline-none"
                            />
                            {errors.name && (
                                <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>
                            )}
                        </div>

                        {/* Category & Price */}
                        <div className="grid md:grid-cols-2 gap-4">
                            <div className="left">
                                <div className="form-control w-full flex flex-col mb-4 relative">
                                    <label htmlFor="category">Category <sup>*</sup></label>
                                    <select
                                        id="category"
                                        {...register("category", { required: "Category is required" })}
                                        className="border p-2 rounded bg-white focus:outline-none appearance-none pr-8"
                                    >
                                        <option value="" className="text-gray-400">Category</option>
                                        {categories.map((cat, index) => (
                                            <option key={index} value={cat.value}>{cat.label}</option>
                                        ))}
                                    </select>
                                    <div className="absolute top-9 right-3 pointer-events-none">
                                        <svg
                                            className="w-4 h-4 text-gray-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </div>
                                    {errors.category && (
                                        <span className="text-red-500 text-sm mt-1">{errors.category.message}</span>
                                    )}
                                </div>
                            </div>

                            <div className="right">
                                <div className="form-control w-full flex flex-col mb-4">
                                    <label htmlFor="price">Price <sup>*</sup></label>
                                    <input
                                        id="price"
                                        type="text"
                                        placeholder="Price"
                                        {...register("price", { required: "Price is required" })}
                                        className="border p-2 rounded bg-white focus:outline-none"
                                    />
                                    {errors.price && (
                                        <span className="text-red-500 text-sm mt-1">{errors.price.message}</span>
                                    )}
                                </div>
                            </div>
                        </div>

                        {/* Recipe Details */}
                        <div className="form-control w-full flex flex-col mb-4">
                            <label htmlFor="description">Recipe description <sup>*</sup></label>
                            <textarea
                                id="description"
                                placeholder="Write Your Recipe description Here"
                                {...register("description", { required: "Recipe description is required" })}
                                className="border p-2 rounded bg-white focus:outline-none"
                            />
                            {errors.description && (
                                <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>
                            )}
                        </div>

                        {/* File Upload */}
                        <div className="form-control w-full flex flex-col mb-4">
                            <label htmlFor="image">Upload Image <sup>*</sup></label>
                            <input
                                type="file"
                                id="image"
                                {...register("image", { required: "Image is required" })}
                                className="border p-2 rounded bg-white focus:outline-none"
                            />
                            {errors.image && (
                                <span className="text-red-500 text-sm mt-1">{errors.image.message}</span>
                            )}
                        </div>

                        {/* Submit Button */}
                        <div className="flex justify-center">
                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-4 text-white px-4 py-2 rounded flex items-center gap-2
                  bg-gradient-to-r from-[#835D23] to-[#B58130]
                  disabled:opacity-50"
                            >
                                {loading ? "Adding..." : "Add Item"} <IoIosSend />
                            </button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddItem;
