import React, { useContext, useState } from "react";
import Cover from "../../../sheared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import useOurManu from "../../../hooks/useOurManu";
import "react-tabs/style/react-tabs.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { useParams } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";

const OurShop = () => {
  const {manu} = useOurManu();
  const { category } = useParams();
  const { handleAddToCart } = useContext(AuthContext);


  const tabItem = ["salad", "pizza", "soup", "dessert", "offered"];

  const categories = {
    salad: manu.filter((item) => item.category === "salad"),
    pizza: manu.filter((item) => item.category === "pizza"),
    soup: manu.filter((item) => item.category === "soup"),
    dessert: manu.filter((item) => item.category === "dessert"),
    offered: manu.filter((item) => item.category === "offered"),
  };

  // Pagination states
  const [currentPage, setCurrentPage] = useState({});
  const [loading, setLoading] = useState({});
  const itemsPerPage = 6;

  const handlePageChange = (tab, page) => {
    // set loading true for that tab
    setLoading((prev) => ({ ...prev, [tab]: true }));

    // simulate API delay (optional)
    setTimeout(() => {
      setCurrentPage((prev) => ({ ...prev, [tab]: page }));
      setLoading((prev) => ({ ...prev, [tab]: false }));
    }, 600); // 600ms delay
  };

  return (
    <div>
      <Cover
        bgImg={coverImg}
        title="Our Shop"
        describe="Would you like to try a dish?"
      />
      <div className="md:mx-20 my-10">
        <Tabs>
          <TabList>
            {tabItem.map((item, index) => (
              <Tab key={index} className="capitalize">
                {item}
              </Tab>
            ))}
          </TabList>

          {tabItem.map((item, index) => {
            const activePage = currentPage[item] || 1;
            const startIndex = (activePage - 1) * itemsPerPage;
            const endIndex = startIndex + itemsPerPage;
            const paginatedItems = categories[item].slice(startIndex, endIndex);
            const totalPages = Math.ceil(categories[item].length / itemsPerPage);

            return (
              <TabPanel key={index}>
                {/* Loader */}
                {loading[item] ? (
                  <div className="flex justify-center items-center py-10">
                    <div className="animate-spin rounded-full h-10 w-10 border-4 border-gray-300 border-t-black"></div>
                  </div>
                ) : (
                  <>
                    <div className="grid md:grid-cols-3 gap-6 py-6">
                      {paginatedItems.length > 0 ? (
                        paginatedItems.map((menuItem) => (
                          <div
                            key={menuItem._id}
                            className="border rounded-xl bg-[#F3F3F3] relative"
                          >
                            <img
                              src={menuItem.image}
                              alt={menuItem.name}
                              className="w-full h-40 object-cover mb-3"
                            />
                            <p className="absolute right-2 top-2 text-white bg-black px-2 py-1">
                              ${menuItem.price}
                            </p>
                            <div className="p-4 space-y-3">
                              <h3 className="text-lg font-semibold text-center">
                                {menuItem.name}
                              </h3>
                              <p className="text-sm text-gray-600">
                                {menuItem.recipe}
                              </p>
                              <button onClick={() => handleAddToCart(menuItem)} className="uppercase bg-[#c1bebe] px-2 py-2 rounded">
                                Add to cart
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <p className="text-gray-500">No items found in {item}</p>
                      )}
                    </div>

                    {/* Pagination */}
                    {totalPages > 1 && (
                      <div className="flex justify-center gap-2 mt-6">
                        <button
                          disabled={activePage === 1}
                          onClick={() => handlePageChange(item, activePage - 1)}
                          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                        >
                          Prev
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                          <button
                            key={i}
                            onClick={() => handlePageChange(item, i + 1)}
                            className={`px-3 py-1 rounded ${
                              activePage === i + 1
                                ? "bg-black text-white"
                                : "bg-gray-200"
                            }`}
                          >
                            {i + 1}
                          </button>
                        ))}
                        <button
                          disabled={activePage === totalPages}
                          onClick={() => handlePageChange(item, activePage + 1)}
                          className="px-3 py-1 bg-gray-200 rounded disabled:opacity-50"
                        >
                          Next
                        </button>
                      </div>
                    )}
                  </>
                )}
              </TabPanel>
            );
          })}
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
