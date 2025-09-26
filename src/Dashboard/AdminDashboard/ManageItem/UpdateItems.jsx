import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { IoIosSend } from "react-icons/io";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UpdateItems = ({ item, onClose, onUpdate }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        watch,
    } = useForm({
        defaultValues: {
            name: "",
            category: "",
            price: "",
            description: "",
            image: null,
        },
    });

    const [preview, setPreview] = useState("");

    // Watch the file input
    const watchImage = watch("image");

    // When item changes, reset form and set preview
    useEffect(() => {
        if (item) {
            reset({
                name: item.name || "",
                category: item.category || "",
                price: item.price || "",
                description: item.description || "",
                image: null,
            });
            setPreview(item.image ? `http://localhost:5000/uploads/${item.image}` : "");
        }
    }, [item, reset]);

    // Update preview when a new image is selected
    useEffect(() => {
        if (watchImage && watchImage[0]) {
            const file = watchImage[0];
            const objectUrl = URL.createObjectURL(file);
            setPreview(objectUrl);

            return () => URL.revokeObjectURL(objectUrl); // cleanup
        }
    }, [watchImage]);

    const onSubmit = async (data) => {
        try {
            const formData = new FormData();
            formData.append("name", data.name);
            formData.append("category", data.category);
            formData.append("price", data.price);
            formData.append("description", data.description);

            if (data.image && data.image[0]) {
                formData.append("image", data.image[0]);
            }

            const response = await fetch(`http://localhost:5000/api/menuItems/${item._id}`, {
                method: "PUT",
                body: formData,
            });

            const result = await response.json();

            if (response.ok) {
                console.log("Menu item updated successfully:", result.menuItem);
                if (typeof onUpdate === "function") {
                    onUpdate(result.menuItem); 
                }
                onClose();
                toast.success(result.message);
            } else {
                console.error("Failed to update menu item:", result.error);
            }
        } catch (error) {
            console.error("Error updating menu item:", error);
            toast.error(error.message);
        }
    };

    const categories = ["Breakfast", "Lunch", "Dinner"];

    return (
        <>
            {/* Overlay */}
            <div
                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                onClick={onClose}
            ></div>

            {/* Modal */}
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 z-50 rounded shadow-lg w-[50%] max-h-[90vh] overflow-y-auto">
                <h2 className="text-xl font-bold mb-4 text-center">Update Items</h2>

                <form onSubmit={handleSubmit(onSubmit)}>
                    {/* Name */}
                    <div className="form-control w-full flex flex-col mb-4">
                        <label htmlFor="name">Recipe Name <sup>*</sup></label>
                        <input
                            id="name"
                            type="text"
                            placeholder="Recipe Name"
                            {...register("name", { required: "Recipe Name is required" })}
                            className="border p-2 rounded bg-white focus:outline-none"
                        />
                        {errors.name && <span className="text-red-500 text-sm mt-1">{errors.name.message}</span>}
                    </div>

                    {/* Category & Price */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="form-control w-full flex flex-col mb-4 relative">
                            <label htmlFor="category">Category <sup>*</sup></label>
                            <select
                                id="category"
                                {...register("category", { required: "Category is required" })}
                                className="border p-2 rounded bg-white focus:outline-none appearance-none pr-8"
                            >
                                <option value="">Select Category</option>
                                {categories.map((cat, index) => (
                                    <option key={index} value={cat}>{cat}</option>
                                ))}
                            </select>
                            <div className="absolute top-9 right-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                            {errors.category && <span className="text-red-500 text-sm mt-1">{errors.category.message}</span>}
                        </div>

                        <div className="form-control w-full flex flex-col mb-4">
                            <label htmlFor="price">Price <sup>*</sup></label>
                            <input
                                id="price"
                                type="text"
                                placeholder="Price"
                                {...register("price", { required: "Price is required" })}
                                className="border p-2 rounded bg-white focus:outline-none"
                            />
                            {errors.price && <span className="text-red-500 text-sm mt-1">{errors.price.message}</span>}
                        </div>
                    </div>

                    {/* Description */}
                    <div className="form-control w-full flex flex-col mb-4">
                        <label htmlFor="description">Recipe Description <sup>*</sup></label>
                        <textarea
                            id="description"
                            placeholder="Write Your Recipe description Here"
                            {...register("description", { required: "Recipe description is required" })}
                            className="border p-2 rounded bg-white focus:outline-none"
                        />
                        {errors.description && <span className="text-red-500 text-sm mt-1">{errors.description.message}</span>}
                    </div>

                    {/* File Upload */}
                    <div className="form-control w-full flex flex-col mb-4">
                        <label htmlFor="image">Upload Image</label>
                        <input
                            type="file"
                            id="image"
                            {...register("image")}
                            className="border p-2 rounded bg-white focus:outline-none"
                        />
                        <small className="text-gray-500 text-sm mt-1">Leave empty to keep existing image</small>
                    </div>

                    {/* Image Preview */}
                    {preview && (
                        <div className="mb-4">
                            <p className="text-sm text-gray-700 mb-1">Image Preview:</p>
                            <img src={preview} alt="Preview" className="w-32 h-32 object-cover rounded" />
                        </div>
                    )}

                    {/* Submit Button */}
                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="mt-4 text-white px-4 py-2 rounded flex items-center gap-2 bg-gradient-to-r from-[#835D23] to-[#B58130]"
                        >
                            Update Item <IoIosSend />
                        </button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default UpdateItems;
