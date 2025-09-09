import React from 'react';
import Cover from '../../../sheared/Cover/Cover';
import coverImg from "../../../assets/shop/banner2.jpg"
import useOurManu from '../../../hooks/useOurManu';
import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';




const OurShop = () => {

    const [manu] = useOurManu();

    const offered = manu.filter(item => item.category === 'offered');
    const dessert = manu.filter(item => item.category === 'dessert');
    const pizza = manu.filter(item => item.category === 'pizza');
    const salad = manu.filter(item => item.category === 'salad');
    const soup = manu.filter(item => item.category === 'soup');


    return (
        <div>
            <Cover bgImg={coverImg} title={"Our Shop"} describe={"Would you like to try a dish?"}></Cover>
            <div className="md:mx-20">
                <Tabs>
                    <TabList>
                        <Tab>Title 1</Tab>
                        <Tab>Title 2</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Any content 1</h2>
                    </TabPanel>
                    <TabPanel>
                        <h2>Any content 2</h2>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default OurShop;