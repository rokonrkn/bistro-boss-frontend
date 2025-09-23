import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";

const AddItem = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const [loading, setLoading] = useState(false);

    const categories = [
        { value: "food", label: "Food" },
        { value: "drinks", label: "Drinks" },
        { value: "dessert", label: "Dessert" },
        { value: "snacks", label: "Snacks" },
    ];

    const onSubmit = async (data) => {
        setLoading(true);

        // Create FormData
        const formData = new FormData();
        formData.append("recipe", data.recipe);
        formData.append("category", data.category);
        formData.append("price", data.price);
        formData.append("details", data.details);
        if (data.image && data.image[0]) {
            formData.append("image", data.image[0]);
        }

        for (let pair of formData.entries()) { console.log(pair[0] + ": ", pair[1]); }

        // Example: POST to backend
        // try {
        //   const response = await fetch("/api/add-item", {
        //     method: "POST",
        //     body: formData,
        //   });
        //   const result = await response.json();
        //   console.log("Server response:", result);

        //   // Reset form
        //   reset();
        // } catch (error) {
        //   console.error("Error uploading item:", error);
        // } finally {
        //   setLoading(false);
        // }
    };

    return (
        <div className="md:px-44">
            <div className="bg-[#E8E8E8] md:p-10 shadow-md">
                <SectionHeading
                    subHeading="---What's New?---"
                    mainHeading="Add an Item"
                />
                <div className="mt-10">
                    <form onSubmit={handleSubmit(onSubmit)}>

                        {/* Recipe Name */}
                        <div className="form-control w-full flex flex-col mb-4">
                            <label htmlFor="recipe">Recipe Name <sup>*</sup></label>
                            <input
                                id="recipe"
                                type="text"
                                placeholder="Recipe Name"
                                {...register("recipe", { required: "Recipe Name is required" })}
                                className="border p-2 rounded bg-white focus:outline-none"
                            />
                            {errors.recipe && (
                                <span className="text-red-500 text-sm mt-1">{errors.recipe.message}</span>
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
                            <label htmlFor="details">Recipe Details <sup>*</sup></label>
                            <textarea
                                id="details"
                                placeholder="Write Your Recipe Details Here"
                                {...register("details", { required: "Recipe details is required" })}
                                className="border p-2 rounded bg-white focus:outline-none"
                            />
                            {errors.details && (
                                <span className="text-red-500 text-sm mt-1">{errors.details.message}</span>
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
