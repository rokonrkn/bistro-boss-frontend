import React from 'react';
import useOurManu from '../../../hooks/useOurManu';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { FiDelete, FiEdit } from 'react-icons/fi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageItem = () => {

    const apiBaseUrl = import.meta.env.VITE_API_BASE_URL;
     const { manu, setManu } = useOurManu();


    const handleUpdateButton = (id) => {
        console.log(id);
    }
    const handleDeleteButton = async (id) => {
        const proceed = window.confirm("Are you sure you want to delete?");
        if (proceed) {
            try {
                const response = await fetch(`${apiBaseUrl}/api/menuItems/${id}`, {
                    method: "DELETE",
                });
                const result = await response.json();

                if (response.ok) {
                    toast.success(result.message);
                    setManu((prev) => prev.filter((item) => item._id !== id));
                }
            } catch (error) {
                console.error("Error deleting item:", error);
                toast.error(error.message);
            }
        }
    };

    return (
        <div>
            <ToastContainer />
            <SectionHeading
                subHeading={"---Manage All Items---"}
                mainHeading={"Manage Items"}
            ></SectionHeading>
            <div className="">

                <h2 className='text-2xl uppercase mt-6'>Total Menu Items: {manu?.length}</h2>
                <table className="w-full border-collapse mt-4">
                    <thead className="bg-[#D99904] text-white">
                        <tr className="text-center">
                            <th className="px-4 py-2">SL</th>
                            <th className="px-4 py-2">Name</th>
                            <th className="px-4 py-2">Category</th>
                            <th className="px-4 py-2">Price</th>
                            <th className="px-4 py-2">Update</th>
                            <th className="px-4 py-2">Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {manu.map((item, index) => (
                            <tr key={item._id} className="text-center border-b">
                                <td className="px-4 py-2">{index + 1}</td>
                                <td className="px-4 py-2">{item.name}</td>
                                <td className="px-4 py-2">{item.category}</td>
                                <td className="px-4 py-2">{item.price}</td>
                                <td className="px-4 py-2"><button onClick={() => handleUpdateButton(item._id)} className='text-xl bg-[#D99904] p-2 rounded-sm text-white'><i><FiEdit /></i></button></td>
                                <td className="px-4 py-2"><button onClick={() => handleDeleteButton(item._id)} className='text-xl bg-[#B91C1C] p-2 rounded-sm text-white'><i><FiDelete /></i></button></td>

                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>
        </div>
    );
};

export default ManageItem;