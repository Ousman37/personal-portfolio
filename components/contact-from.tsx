"use client" //🚀
import React from 'react';
import SectionHeading from './section-heading';

import { motion } from 'framer-motion';
import { useSectionInView } from '@/lib/hooks';
import { sendEmail} from "@/server/sendEmail"
import SubmitBtn from './submit-btn';
import toast from 'react-hot-toast';

const ContactForm = () => {
  const {ref } = useSectionInView("Contact")
 

  

  return (
    <motion.section id='contact' ref={ref} className=' py-8 mb-20 sm:-28 w-[min (100%, 38rem)]'
    initial={{
      opacity: 0,
    }}
    whileInView={{
      opacity: 1,
    }}
    transition={{
      duration: 1,
    }}
    viewport={{
      once: true,
    }}
    
    
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className='text-gray-700 text-center my-4 dark:text-white/80'>
     Please feel free to contact me directly at{' '}
      <a className='text-blue-500 hover:underline' href='mailto:Ousman.didibela@gmail.com'>
      Ousman.didibela@gmail.com
      </a>{' '}
     or through this form.
     </p>

      <div className='container mx-auto'>
        <div className='max-w-2xl mx-auto bg-white dark:bg-black/5 rounded-md p-6 shadow-lg'>
          <form className='mt-10 dark:text-black' action={async formData =>{

        const { error} = await  sendEmail(formData)


        if(error){
         toast.error(error)
          return
        }
        toast.success("Email sent successfully")
          }}>
            <div className='mb-4'>
              <label htmlFor='name' className='block text-gray-600 font-semibold dark:text-white'>
                Your Name
              </label>
              <input
                type='text'
                name='senderName'
                id='name'
                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all'
                placeholder='Enter your name' required maxLength={10}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='email' className='block text-gray-600 font-semibold dark:text-white '>
                Your Email
              </label>
              <input
               name='senderEmail'
                type='email'
                id='email'
                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all'
                placeholder='Enter your email' required maxLength={500}
              />
            </div>
            <div className='mb-4'>
              <label htmlFor='message' className='block text-gray-600 font-semibold dark:text-white '>
                Message
              </label>
              <textarea
              id='message'
              name='message'
                rows={4} // Use a numeric value, not a string
                className='w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-blue-400  dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all'
                placeholder='Enter your message' required maxLength={5000}
               ></textarea>
              
            </div>
           
             <SubmitBtn />
            
          </form>
        </div>
      </div>
    </motion.section>
  );
};

export default ContactForm;
