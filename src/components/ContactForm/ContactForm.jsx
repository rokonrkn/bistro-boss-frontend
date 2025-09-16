import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form"
import { IoIosSend } from "react-icons/io";


const ContactForm = () => {

    const [captchaValue, setCaptchaValue] = useState(null);

    const { register, handleSubmit, formState: { errors } } = useForm()
    const onSubmit = (data) => console.log(data)

    return (
        <div className='max-w-5xl mx-auto mb-12 bg-[#F3F3F3]'>
            <div className="p-10">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="left">
                            <div className="form-control w-full flex flex-col mb-4">
                                <label htmlFor="firstName">
                                    Name <sup>*</sup>
                                </label>
                                <input
                                    id="firstName"
                                    type="text"
                                    placeholder="Enter Your Name"
                                    {...register("firstName", { required: "Name is required" })}
                                    className="border p-2 rounded bg-white focus:outline-none "
                                />
                                {errors.firstName && (
                                    <span className="text-red-500 text-sm mt-1">
                                        {errors.firstName.message}
                                    </span>
                                )}
                            </div>
                        </div>
                        <div className="right"><div className="form-control w-full flex flex-col mb-4">
                            <label htmlFor="email">
                                Email <sup>*</sup>
                            </label>
                            <input
                                id="email"
                                type="text"
                                placeholder="Enter Your Email"
                                {...register("email", { required: "Email is required" })}
                                className="border p-2 rounded bg-white focus:outline-none "
                            />
                            {errors.firstName && (
                                <span className="text-red-500 text-sm mt-1">
                                    {errors.email.message}
                                </span>
                            )}
                        </div></div>
                    </div>
                    {/* phone number field  */}
                    <div className="form-control w-full flex flex-col mb-4">
                        <label htmlFor="phone">
                            Phone <sup>*</sup>
                        </label>
                        <input
                            id="phone"
                            type="text  "
                            placeholder="Enter Your Number"
                            {...register("phone", {
                                required: "Phone is required",
                                pattern: {
                                    value: /^[0-9]{11,12}$/, 
                                    message: "Phone number must be 11 digits"
                                }
                            })}

                            className="border p-2 rounded bg-white focus:outline-none "
                        />
                        {errors.phone && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.phone.message}
                            </span>
                        )}
                    </div>
                    {/* message field  */}
                    <div className="form-control w-full flex flex-col mb-4">
                        <label htmlFor="message">
                            Message <sup>*</sup>
                        </label>
                        <textarea
                            id="message"
                            type="text"
                            placeholder="Write Your Message Here"
                            {...register("message", { required: "Message is required" })}
                            className="border p-2 rounded bg-white focus:outline-none "
                        />
                        {errors.firstName && (
                            <span className="text-red-500 text-sm mt-1">
                                {errors.message.message}
                            </span>
                        )}
                    </div>

                    {/* reCAPTCHA */}
                    <ReCAPTCHA
                        sitekey="6LcNPiYrAAAAAO_ITKs6MXbV_zpu8mz6PzeDHTCr"
                        onChange={(value) => setCaptchaValue(value)}
                    />

                    <div className="flex justify-center">
                        <button
                            disabled={!captchaValue}
                            type="submit"
                            className="mt-4 text-white px-4 py-2 rounded flex items-center gap-2
                                    bg-gradient-to-r from-[#835D23] to-[#B58130]
                                    disabled:opacity-50"
                        >
                            Send Message <i><IoIosSend /></i>
                        </button>

                    </div>
                </form>
            </div>
        </div>
    );
};

export default ContactForm;