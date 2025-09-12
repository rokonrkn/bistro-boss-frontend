import React from 'react';
import Cover from '../../../sheared/Cover/Cover';
import coverImg from "../../../assets/shop/banner2.jpg"
import useOurManu from '../../../hooks/useOurManu';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useParams } from 'react-router-dom';

const OurShop = () => {
  const [manu] = useOurManu();
  const {category} = useParams();
  console.log("category", category);


  const tabItem = ['salad', 'pizza', 'soup', 'dessert', 'offered'];


  const categories = {
    salad: manu.filter(item => item.category === 'salad'),
    pizza: manu.filter(item => item.category === 'pizza'),
    soup: manu.filter(item => item.category === 'soup'),
    dessert: manu.filter(item => item.category === 'dessert'),
    offered: manu.filter(item => item.category === 'offered'),
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

          {tabItem.map((item, index) => (
            <TabPanel key={index}>
              <div className="grid md:grid-cols-3 gap-6 py-6 ">
                {categories[item].length > 0 ? (
                  categories[item].map(menuItem => (
                    <div
                      key={menuItem._id}
                      className="border rounded-xl  bg-[#F3F3F3] relative"
                    >
                      <img
                        src={menuItem.image}
                        alt={menuItem.name}
                        className="w-full h-40 object-cover mb-3"
                      />
                      <p className='absolute right-2 top-2 text-white bg-black px-2 py-1'>${menuItem.price}</p>
                      <div className="p-4 space-y-3">
                        <h3 className="text-lg font-semibold text-center  ">{menuItem.name}</h3>
                        <p className="text-sm text-gray-600">{menuItem.recipe}</p>
                        <button className='uppercase [#c1bebe] px-2 py-2'>Add to card</button>
                      </div>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 ">No items found in {item}</p>
                )}
              </div>
            </TabPanel>
          ))}
        </Tabs>
      </div>
    </div>
  );
};

export default OurShop;
