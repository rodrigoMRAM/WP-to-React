import React from 'react'

export const Footer = () => {
  return (
    <footer>
        <div className='w-full  h-auto text-white flex flex-col justify-around footer max-md:h-auto '>
            <div className='flex justify-around max-md:leading-[23px] flex-wrap  w-full max-md:justify-start max-md:flex-col mt-5  max-md:px-4 mb-24'>
                <div className="about">
                    <h4 className='mb-2 my-4 font-bold text-2xl'>About us</h4>
                    <div className='h-[2px] w-20 bg-white text-white'></div>
                    <div className='h-[2px] mt-8 w-20 bg-white text-white'></div>
                </div>
                <div className="">
                    <h4 className='mb-2 my-4  text-2xl font-bold'>Important Links</h4>
                      
                    <div className='h-[2px] mb-5 w-20 bg-white text-white'></div>
                    <ul>
                          <li className='mb-2 mt-2'>Contact us</li>
                          <li className='mb-2'>Team</li>
                          <li className='mb-2'>Mission</li>
                          <li className='mb-2'>Vision</li>
                        </ul>
                        <div className='h-[2px] w-20 bg-white text-white'></div>
                </div>
                <div className="contacts">
                    <h4 className='my-4 text-2xl font-bold'>Contacts</h4>
                    <div className='h-[2px] w-20 bg-white text-white'></div>
                    <ul className=''>
                        <li className='mb-2 mt-2'>Have Any Questions?</li>
                        <li className='mb-2'>+54 11 2520-9854</li>
                        <li className='mb-2'>Mail Us</li>
                        <li className='mb-2'>lucas.tula@krakiolabs.com</li>
                    </ul>
                    <div className='h-[2px] w-20 bg-white text-white'></div>
                </div>
            </div>
            <p className='text-center'>© 2024 Krakio Labs </p>

          
        </div>
    </footer>
  )
}
