import React from 'react'
import imagen from '../img/softwareImg.jpg'
import CardToReuse from './CardToReuse'
import CardTestimonial from './CardTestimonial'
const About = () => {
    return (
        <>
            <div className='flex tracking-widest'>
                <div className='w-7/12'>
                    <img src={imagen} alt="" srcset="" />
                </div>
                <div className='flex flex-wrap flex-col w-[40%]'>
                    <h3 className='text-[#5580FF] font-bold'>WELCOME TO</h3>
                    <h2 className='text-2xl font-bold text-gray-950'>About Company
                    </h2>
                    <p>Are constantly thriving to improve our already high standards to have you see us as the absolute best in the industry. It’s not enough to have trust in the cleaning.

                    </p>
                    <div className='flex'>
                        <div>

                            <span class="material-symbols-outlined mr-5 mt-1">
                                my_location
                            </span>
                        </div>
                        <div>

                            <h3 className='text-xl font-bold mb-5 text-gray-800'>Our Mission</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>
                    </div>
                    <div className='flex items-start mt-5'>
                        <div>

                            <span class="material-symbols-outlined mr-5 mt-1">
                                social_leaderboard
                            </span>
                        </div>
                        <div>

                            <h3 className='text-xl font-bold text-gray-800 mb-5'>Our Vission</h3>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
                        </div>

                    </div>
                </div>
            </div>
            <CardToReuse />

            <div className='flex flex-col justify-center items-center bg-[#f7f9fb]'>
                <h2 className='font-bold text-4xl mt-5 mb-5'>Our testimonial</h2>
                <p className='text-gray-600 mb-5'>Standards compliant e-business.Phosfluorescently expedite functional products via premium action items wireless innovation compliant e-business.

                </p>
                <div className='flex bg-white'>
                    <CardTestimonial margin="0"/>
                    <CardTestimonial margin="mx-4"/>
                    <CardTestimonial margin="0"/>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default About