import React from 'react'
import imagen from '../img/softwareImg.jpg'
import CardToReuse from './CardToReuse'
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

            <div className='flex flex-col justify-center items-center bg-slate-300'>
                <h2 className='font-bold text-2xl mt-10'>Our testimonial</h2>
                <p className='text-gray-600'>Standards compliant e-business.Phosfluorescently expedite functional products via premium action items wireless innovation compliant e-business.

                </p>
                <div>
                    <div className='cardTestimonio z-40 flex w-[350px] h-72 flex-col justify-between items-center text-center text-gray-600  bg-white py-4 px-4 relative overflow-hidden hover:text-white'>
                    <span class="material-symbols-outlined text-gray-500 font-thin self-start hover:text-white text-2xl">
format_quote
</span>
                        <h3>Logo</h3>
                        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about</p>
                        <div className='w-[40px] h-[2px] text-gray-600 bg-slate-300'></div>
                        <p>Shams W.Pawel</p>
                        <p>Founder & CEO</p>
                    </div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </>
    )
}

export default About