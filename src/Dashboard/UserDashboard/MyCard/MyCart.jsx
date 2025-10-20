import React, { useContext } from 'react';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';

const MyCart = () => {
  const { cart, handleRemoveCartItem } = useContext(AuthContext);

  return (
    <div>
      <SectionHeading
        subHeading={"---My Cart---"}
        mainHeading={"WANNA ADD MORE?"}
      />
      <div>
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
            {cart.map((item, index) => (
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
