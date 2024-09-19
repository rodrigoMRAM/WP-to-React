import React from 'react'

export const Footer = () => {
  return (
    <footer>
        <div className='w-full  h-64 text-white flex flex-col justify-around footer'>
            <div className='flex justify-around w-full'>
                <div className="about">
                    <h4 className='mb-2'>About us</h4>
                    <div className='h-[2px] w-20 bg-white text-white'></div>
                </div>
                <div className="importantLinks">
                    <h4 className='mb-2'>Important Links</h4>
                      
                    <div className='h-[2px] w-20 bg-white text-white'></div>
                    <ul>
                          <li className='mb-2 mt-2'>Contact us</li>
                          <li className='mb-2'>Team</li>
                          <li className='mb-2'>Mission</li>
                          <li className='mb-2'>Vision</li>
                        </ul>
                        <div className='h-[2px] w-20 bg-white text-white'></div>
                </div>
                <div className="contacts">
                    <h4 className='mb-2'>Contacts</h4>
                    <div className='h-[2px] w-20 bg-white text-white'></div>
                    <ul>
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
