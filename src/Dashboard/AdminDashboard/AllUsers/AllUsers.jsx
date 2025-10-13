import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import SectionHeading from "../../../components/SectionHeading/SectionHeading";
import { FaUsers } from "react-icons/fa";

const AllUsers = () => {
  const userData = useLoaderData();

  // State to control modal
  const [showModal, setShowModal] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [selectedRole, setSelectedRole] = useState("");
  const [userId, setUserId] = useState("");

  const bas4eUrl = import.meta.env.VITE_API_BASE_URL;


  const handleUserChangeModal = (user) => {
    setSelectedUser(user);
    setSelectedRole(user.role);
    setShowModal(true);
    setUserId(user._id);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
  };


  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };


  const handleUpdateRole = async () => {
    if (!selectedUser) return;

    try {
      const res = await fetch(`${bas4eUrl}/user/users/${userId}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ role: selectedRole }),
      });

      if (res.ok) {
        alert("Role updated successfully ✅");
        closeModal();
      } else {
        alert("Failed to update role ❌");
      }
    } catch (err) {
      console.error(err);
      alert("Error updating role ❌");
    }
  };

  return (
    <div>
      <SectionHeading
        subHeading={"---How Many?---"}
        mainHeading={"Manage All Users"}
      />

      <div className="bg-white mt-4 p-4">
        <h2 className="uppercase font-semibold text-2xl">
          Total Users : {userData?.length}
        </h2>

        <table className="w-full mt-4">
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th className="p-2 text-left rounded-tl-lg">SL</th>
              <th className="p-2 text-left">Name</th>
              <th className="p-2 text-left">Email</th>
              <th className="p-2 text-left">Role</th>
              <th className="p-2 text-left rounded-tr-lg">Action</th>
            </tr>
          </thead>
          <tbody>
            {userData?.map((item, index) => (
              <tr key={index} className="bg-white hover:bg-gray-50">
                <td className="p-2">{index + 1}</td>
                <td className="p-2">{item.username}</td>
                <td className="p-2">{item.email}</td>
                <td className="p-2 flex items-center gap-2">
                  <button
                    onClick={() => handleUserChangeModal(item)}
                    className="bg-[#D1A054] text-white p-2 rounded"
                  >
                    <FaUsers />
                  </button>
                </td>
                <td className="p-2">Action</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>



      {/* Modal */}
      {showModal && (
        <>
          
          <div
            className="fixed inset-0 bg-black bg-opacity-50"
            onClick={closeModal}
          ></div>

          {/* Modal Box start */}
          <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-xl w-80 z-50">
            <h2 className="text-xl font-semibold mb-4 text-center">
              Change User Role
            </h2>
            <p className="mb-2 text-center text-gray-600">
              {selectedUser?.email}
            </p>

            <div className="flex flex-col gap-2 mb-4">
              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="user"
                  checked={selectedRole === "user"}
                  onChange={handleRoleChange}
                />
                User
              </label>

              <label className="flex items-center gap-2">
                <input
                  type="radio"
                  name="role"
                  value="admin"
                  checked={selectedRole === "admin"}
                  onChange={handleRoleChange}
                />
                Admin
              </label>
            </div>

            <div className="flex justify-between">
              <button
                onClick={handleUpdateRole}
                className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
              >
                Update
              </button>
              <button
                onClick={closeModal}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
              >
                Cancel
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default AllUsers;
