import React from 'react';
import Cover from '../../sheared/Cover/Cover';
import coverImg from '../../assets/contact/banner.jpg'
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Location from '../../components/Location/Location';
import ContactForm from '../../components/ContactForm/ContactForm';

const ContactUs = () => {
    return (
        <div>
            <Cover
                bgImg={coverImg}
                title={"contact us"}
                describe={"Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."}
            >
            </Cover>
            <div className="">
                <SectionHeading
                    subHeading={"---Visit us---"}
                    mainHeading={"Our Location"}
                ></SectionHeading>
                {/* <locationCard></locationCard> */}
                <Location />
                <SectionHeading
                    subHeading={"---Send us a Message---"}
                    mainHeading={"Contact Form"}
                ></SectionHeading>
                <ContactForm />
            </div>
        </div >
    );
};

export default ContactUs;