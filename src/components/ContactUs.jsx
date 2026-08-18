import React, { useState, useEffect } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [errors, setErrors] = useState({});
    const [touched, setTouched] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        const newErrors = {};
        if (!formData.name.trim()) {
            newErrors.name = "Full Name is required.";
        }
        if (!formData.email.trim()) {
            newErrors.email = "Email address is required.";
        } else {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(formData.email)) {
                newErrors.email = "Please enter a valid email address.";
            }
        }
        if (!formData.message.trim()) {
            newErrors.message = "Message cannot be empty.";
        }
        setErrors(newErrors);
    }, [formData]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleBlur = (e) => {
        const { name } = e.target;
        setTouched(prev => ({
            ...prev,
            [name]: true
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const allTouched = { name: true, email: true, message: true };
        setTouched(allTouched);
        if (Object.keys(errors).length > 0) {
            return;
        }
        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            setIsSubmitted(true);

            setFormData({ name: '', email: '', subject: '', message: '' });
            setTouched({});

            setTimeout(() => {
                setIsSubmitted(false);
            }, 5000);
        }, 1200);
    };

    const isFormInvalid = Object.keys(errors).length > 0;

    return (
        <div id='contact' className='container mx-auto'>
            <div className='lg:flex lg:px-32 gap-x-10 '>
                <div className=' flex-grow'>
                    <section className="w-full bg-gradient-to-l  from-[#110D2E]/30  to-[#fc466a4a]/10  rounded-md shadow-md  p-16">
                        <div className='flex flex-col mb-10 justify-center items-center'>
                            <h2 className="text-2xl font-semibold  capitalize text-white">Drop Us Your Message</h2>
                            <p className='text-gray-400 '>Freely contact with us anytime. We're available here for you.</p>
                        </div>
                        {isSubmitted && (
                            <div className="mb-6 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-center text-sm font-semibold animate-fade-in">
                                Thank you! Your message has been sent successfully.
                            </div>
                        )}
                        <form onSubmit={handleSubmit} noValidate>
                            <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                                <div className='col-span-2 lg:col-span-1'>
                                    <input
                                        name="name"
                                        type="text"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-5 py-3 text-white rounded-full bg-transparent border outline-none transition-all placeholder-gray-500 ${touched.name && errors.name
                                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                                            : 'border-gray-800 hover:border-purple-500/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                                            }`}
                                        placeholder='Full Name *'
                                    />
                                    {touched.name && errors.name && (
                                        <p className="text-red-400 text-xs mt-1.5 ml-4 font-medium">{errors.name}</p>
                                    )}
                                </div>

                                <div className='col-span-2 lg:col-span-1'>
                                    <input
                                        name="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-5 py-3 text-white rounded-full bg-transparent border outline-none transition-all placeholder-gray-500 ${touched.email && errors.email
                                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                                            : 'border-gray-800 hover:border-purple-500/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                                            }`}
                                        placeholder='Your Email *'
                                    />
                                    {touched.email && errors.email && (
                                        <p className="text-red-400 text-xs mt-1.5 ml-4 font-medium">{errors.email}</p>
                                    )}
                                </div>

                                <div className='col-span-2'>
                                    <input
                                        name="subject"
                                        type="text"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        className="w-full px-5 py-3 text-white rounded-full bg-transparent border border-gray-800 hover:border-purple-500/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none transition-all placeholder-gray-500"
                                        placeholder='Select Subject'
                                    />
                                </div>

                                <div className='col-span-2'>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        className={`w-full px-6 py-4 text-white rounded-3xl bg-transparent border outline-none transition-all placeholder-gray-500 resize-none ${touched.message && errors.message
                                            ? 'border-red-500/50 focus:border-red-500 focus:ring-1 focus:ring-red-500'
                                            : 'border-gray-800 hover:border-purple-500/50 focus:border-purple-500 focus:ring-1 focus:ring-purple-500'
                                            }`}
                                        placeholder='Message... *'
                                        rows={5}
                                    />
                                    {touched.message && errors.message && (
                                        <p className="text-red-400 text-xs mt-1.5 ml-4 font-medium">{errors.message}</p>
                                    )}
                                </div>
                            </div>

                            <div className="flex justify-start mt-6">
                                <button
                                    type="submit"
                                    disabled={isLoading || (Object.keys(touched).length > 0 && isFormInvalid)}
                                    className={`px-8 py-3 rounded-full text-white font-bold transition-all duration-300 shadow-md ${isLoading || (Object.keys(touched).length > 0 && isFormInvalid)
                                        ? 'bg-gray-800 text-gray-500 cursor-not-allowed opacity-55'
                                        : 'bg-[#6318F1] hover:bg-gradient-to-r hover:from-[#FC466B] hover:to-[#3F5EFB] hover:scale-105 active:scale-95'
                                        }`}
                                >
                                    {isLoading ? (
                                        <span className="flex items-center gap-2">
                                            <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                            </svg>
                                            Sending...
                                        </span>
                                    ) : 'Send Message'}
                                </button>
                            </div>
                        </form>
                    </section>
                </div>


                <div className='  lg:w-[22%] flex flex-col items-center justify-center mx-16 formBorder-gradient border'>

                    <div className='flex flex-1 flex-col items-center justify-around '>
                        <div className='flex flex-col justify-center items-center py-4'>
                            <FaPhoneAlt size={44} className='text-blue-700 my-4' />
                            <div className='text-white text-lg py-1'>Phone</div>
                            <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                        </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] ' />
                    </div>


                    <div className='flex flex-1 flex-col items-center justify-around '>
                        <div className='flex flex-col justify-center items-center py-4'>
                            <MdMarkEmailUnread size={44} className='text-blue-700 my-4' />
                            <div className='text-white text-lg py-1'>Email</div>
                            <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                        </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] ' />
                    </div>


                    <div className='flex flex-1 flex-col items-center justify-around '>
                        <div className='flex flex-col justify-center items-center py-4'>
                            <FaLocationDot size={44} className='text-blue-700 my-4' />
                            <div className='text-white text-lg py-1'>Location</div>
                            <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                        </div>
                    </div>

                </div>


            </div>
        </div>
    )
}

export default ContactUs