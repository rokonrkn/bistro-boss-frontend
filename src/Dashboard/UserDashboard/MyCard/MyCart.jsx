import React, { useContext } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { ToastContainer } from 'react-toastify';

const MyCart = () => {
  const { addCart , handleRemoveCartItem, totalAddedAmount } = useContext(AuthContext);

  return (
    <div>
      <ToastContainer />
      <SectionHeading
        subHeading={"---My Cart---"}
        mainHeading={"WANNA ADD MORE?"}
      />
      <div>
        <h2 className="text-2xl font-bold mb-4">Total Added Amount: ${totalAddedAmount}</h2>
        <table className="w-full">
          <thead>
            <tr className="bg-[#D1A054] text-white">
              <th>SL</th>
              <th>Item Image</th>
              <th>Item Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {addCart.map((item, index) => (
              <tr key={item._id} className="text-center">
                <td>{index + 1}</td>
                <td><img width={100} src={item.image} alt="" /></td>
                <td>{item.name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleRemoveCartItem(item)}
                    className="btn bg-[#D1A054] text-white"
                  >
                    Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCart;
