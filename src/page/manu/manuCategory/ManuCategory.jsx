import React from 'react';
import useOurManu from '../../../hooks/useOurManu';
import SectionHeading from '../../../components/SectionHeading/SectionHeading';
import TodayOffer from './TodayOffer';
import coverImg from '../../../assets/home/chef-service.jpg'
import Cover from '../../../sheared/Cover/Cover';
import { Link } from 'react-router-dom';

const ManuCategory = () => {

    const {manu} = useOurManu();

    const offered = manu.filter(item => item.category === 'offered');
    const dessert = manu.filter(item => item.category === 'dessert');
    const pizza = manu.filter(item => item.category === 'pizza');
    const salad = manu.filter(item => item.category === 'salad');
    const soup = manu.filter(item => item.category === 'soup');

    return (
        <div>
            <SectionHeading subHeading={"---Don't miss---"} mainHeading={"Today's Offer"}></SectionHeading>
            <div className="grid md:grid-cols-2 gap-6 md:mx-20">
                {
                    offered.map(items => <TodayOffer
                        key={items._id}
                        items={items}>
                    </TodayOffer>)
                }
            </div>

            {/* dessert item  */}
            <div className="mt-16">
                <Cover bgImg={coverImg} title={"dessert"} describe={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
                <div className="grid md:grid-cols-2 gap-6 md:mx-20 mt-16">
                    {
                        dessert.map(items => <TodayOffer
                            key={items._id}
                            items={items}>
                        </TodayOffer>)
                    }
                </div>
                <Link to={`/ourShop/${dessert.categoriesName}`}>
                    <button className="btn btn-outline border-0 border-b-4 flex mx-auto mt-10">Order our favorite food</button>
                </Link>
            </div>
            {/* pizza item  */}
            <div className="mt-16">
                <Cover bgImg={coverImg} title={"pizza"} describe={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
                <div className="grid md:grid-cols-2 gap-6 md:mx-20 mt-16">
                    {
                        pizza.map(items => <TodayOffer
                            key={items._id}
                            items={items}>
                        </TodayOffer>)
                    }
                </div>
            </div>
            {/* salad item  */}
            <div className="mt-16">
                <Cover bgImg={coverImg} title={"salad"} describe={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
                <div className="grid md:grid-cols-2 gap-6 md:mx-20 mt-16">
                    {
                        salad.map(items => <TodayOffer
                            key={items._id}
                            items={items}>
                        </TodayOffer>)
                    }
                </div>
            </div>
            {/* soup item  */}
            <div className="mt-16">
                <Cover bgImg={coverImg} title={"soup"} describe={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}></Cover>
                <div className="grid md:grid-cols-2 gap-6 md:mx-20 mt-16">
                    {
                        soup.map(items => <TodayOffer
                            key={items._id}
                            items={items}>
                        </TodayOffer>)
                    }
                </div>
            </div>

        </div>
    );
};

export default ManuCategory;