import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';


const ContactMe = () => {

  const form = useRef();

  const submitForm = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_n9o0cr9', 'template_bmf4lkb', form.current, 'user_N140sqGvuuceRnrKjG8k7')
    .then((result) => {
      alert('Thank You For Sending a Message')
    }, (error) => {
      console.log(error.text);
    });
    e.target.reset();

  }




  return (
    <div className='max-w-[1000px] mx-auto p-4 py-20 flex flex-col justify-center w-full h-full'>
      <div className='pb-8'>
        <h2 className='text-3xl font-semibold inline border-b-4 border-[#585959]'>Contact</h2>
        <p className='py-5'>Submit  the form bellow or shoot me an email</p>
      </div>

      <form className='flex flex-col max-w-[600px] w-full' ref={form} onSubmit={submitForm}>
        <input type="text" name='Name' placeholder='Name' className='py-2 px-2 mb-3 text-[#084C72] font-semibold text-base outline-none focus:outline-none focus:shadow-outline focus:ring-4 focus: ring-[#0E67F0]' required />
        <input type="email" name='Email' placeholder='Email@email.com' className='py-2 px-2 mb-3 text-[#084C72] font-semibold text-base outline-none focus:outline-none focus:shadow-outline focus:ring-4 focus: ring-[#0E67F0]' required />
        <textarea name="Message" type='text' placeholder='Message' className='resize-none py-2 px-2 mb-3 text-[#084C72] h-[200px] font-semibold text-base outline-none focus:outline-none focus:shadow-outline focus:ring-4 focus: ring-[#0E67F0]' required />
        <div className='flex justify-center'>
        <button type='submit' className='text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-[#8A8C8C] border-[#8A8C8C]'>Get in Touch</button>
        </div>
      </form>
    </div>
  )
}

export default ContactMe