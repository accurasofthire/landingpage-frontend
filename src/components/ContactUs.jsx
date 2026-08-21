import React, { useState } from 'react'
import { FaPhoneAlt } from "react-icons/fa";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Squared gradient border via border-image (renders square corners, as original).
// On error, swap the gradient to rose — keeping the same squared shape.
// `rounded` tunes the box shape; textarea needs modest rounding so corner
// radii don't curve in over the text on a tall element.
const inputClasses = (hasError, rounded = 'rounded-full') =>
  `w-full px-4 py-2 mt-2 text-blue-600 ${rounded} bg-transparent border focus:outline-none focus:ring-0 ${
    hasError
      ? 'formBorder-gradient-error'
      : 'formBorder-gradient'
  }`;

// Reserve a fixed-height slot for errors so the form height never shifts.
const FieldError = ({ message }) => (
  <p className='mt-1 h-5 px-2 text-xs text-rose-400'>{message}</p>
);

const ContactUs = () => {
    const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
    const [errors, setErrors] = useState({});
    const [status, setStatus] = useState('idle');

    const validate = (values = form) => {
        const nextErrors = {};
        if (!values.name.trim()) nextErrors.name = 'Full name is required.';
        if (!values.email.trim()) nextErrors.email = 'Email is required.';
        else if (!EMAIL_REGEX.test(values.email.trim())) nextErrors.email = 'Enter a valid email address.';
        if (!values.subject.trim()) nextErrors.subject = 'Subject is required.';
        if (!values.message.trim()) nextErrors.message = 'Message is required.';
        return nextErrors;
    };

    const handleChange = (field) => (event) => {
        const nextForm = { ...form, [field]: event.target.value };
        setForm(nextForm);
        setErrors((prev) => ({ ...prev, [field]: validate(nextForm)[field] }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const nextErrors = validate();
        setErrors(nextErrors);
        if (Object.keys(nextErrors).length > 0) return;

        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            setForm({ name: '', email: '', subject: '', message: '' });
            setTimeout(() => setStatus('idle'), 4000);
        }, 800);
    };

    const sending = status === 'loading';

    return (
        <div id='contact' className='container mx-auto'>
            <div className='lg:flex lg:px-32 gap-x-10 '>
                <div className=' flex-grow'>
                    <section className="w-full bg-gradient-to-l  from-[#110D2E]/30  to-[#fc466a4a]/10  rounded-md shadow-md  p-16">
                        <div className='flex flex-col mb-10 justify-center items-center'>
                            <h2 className="text-2xl font-semibold  capitalize text-white">Drop Us Your Message</h2>
                            <p className='text-gray-400 '>Freely contact with us anytime. We're available here for you.</p>
                        </div>
                        <form noValidate onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 gap-6 mt-4 lg:grid-cols-2">
                                <div className='col-span-2 lg:col-span-1'>
                                    <input
                                        value={form.name}
                                        onChange={handleChange('name')}
                                        type="text"
                                        className={inputClasses(errors.name)}
                                        placeholder='Full Name'
                                    />
                                    <FieldError message={errors.name} />
                                </div>

                                <div className='col-span-2 lg:col-span-1'>
                                    <input
                                        value={form.email}
                                        onChange={handleChange('email')}
                                        type="email"
                                        className={inputClasses(errors.email)}
                                        placeholder='Your Email'
                                    />
                                    <FieldError message={errors.email} />
                                </div>

                                <div className='col-span-2'>
                                    <input
                                        value={form.subject}
                                        onChange={handleChange('subject')}
                                        type="text"
                                        className={inputClasses(errors.subject)}
                                        placeholder='Subject'
                                    />
                                    <FieldError message={errors.subject} />
                                </div>
                                <div className='col-span-2 '>
                                    <textarea
                                        value={form.message}
                                        onChange={handleChange('message')}
                                        rows={5}
                                        className={inputClasses(errors.message, 'rounded-2xl px-6')}
                                        placeholder='Message...'
                                    />
                                    <FieldError message={errors.message} />
                                </div>
                            </div>

                            <div className="flex justify-start mt-6">
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className={`px-6 py-2 rounded-full bg-[#6318F1] text-white duration-200 ${
                                        sending
                                            ? 'cursor-not-allowed opacity-60'
                                            : 'hover:shadow-lg hover:bg-gradient-to-r hover:from-[#FC466B]/40 hover:to-[#3F5EFB]/40 hover:scale-105'
                                    }`}
                                >
                                    {sending ? 'Sending...' : 'Send Messages'}
                                </button>
                            </div>

                            {status === 'success' && (
                                <p className='mt-4 rounded-full border border-green-500/40 bg-green-500/10 px-5 py-2 text-sm text-green-300'>
                                    Your message has been sent. We'll get back to you soon!
                                </p>
                            )}
                        </form>
                    </section>
                </div>


                <div className='  lg:w-[22%] flex flex-col items-center justify-center mx-16 formBorder-gradient border'>

                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaPhoneAlt size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Phone</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                    </div>

                   
                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <MdMarkEmailUnread size={44} className='text-blue-700 my-4'/>
                        <div className='text-white text-lg py-1'>Email</div>
                        <div className='text-gray-400 text-lg'>0310 - 7756294</div>
                      </div>
                        <hr className='w-32 align-bottom bg-gradient-to-r h-[1px] from-[#FC466B] to-[#3F5EFB] '/>
                    </div>

                    
                    <div className='flex flex-1 flex-col items-center justify-around '>      
                      <div className='flex flex-col justify-center items-center py-4'>
                      <FaLocationDot size={44} className='text-blue-700 my-4'/>
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