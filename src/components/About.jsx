import React from 'react'
import imagen from '../assets/img/softwareImg.jpg'
import CardToReuse from './CardToReuse'
import KrakioLogo from '../assets/img/krakioImg.png'

const About = () => {

    const cards = [
        { imagen: KrakioLogo, title: "Logo", content: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about", name: 'Shams W.Pawel', position: 'Founder & CEO' },
        { imagen: KrakioLogo, title: "Logo", content: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about", name: 'Shams W.Pawel', position: 'Founder & CEO' },
        { imagen: KrakioLogo, title: "Logo", content: "It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about", name: 'Shams W.Pawel', position: 'Founder & CEO' },
    ];

    return (
        <>
            <div className='flex tracking-widest max-sm:justify-center '>
                <div className='w-7/12 max-sm:hidden'>
                    <img src={imagen} alt="" />
                </div>
                <div className='flex flex-wrap flex-col w-[40%] max-sm:w-[95%] items-center justify-center max-sm:pt-10'>
                    <h3 className='text-[#5580FF] font-bold max-sm:text-center'>WELCOME TO</h3>
                    <h2 className='text-2xl font-bold text-gray-950 max-sm:text-center'>About Company
                    </h2>
                    <p className='w-[90%] text-center'>Are constantly thriving to improve our already high standards to have you see us as the absolute best in the industry. It’s not enough to have trust in the cleaning.

                    </p>
                    <div className='flex'>
                        <div>

                            <span className="material-symbols-outlined mr-5 mt-1 text-5xl">
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

                            <span className="material-symbols-outlined mr-5 mt-1 text-5xl">
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
                <div className='flex gap-5 max-sm:flex-col flex-wrap'>

                    {cards.map(card => (
                        <div className='flex bg-white max-sm:w-full'>

                            <div className={`cardTestimonio z-40 shadow-xl flex mb-16 w-[350px] max-sm:w-full h-[460px] flex-col  justify-between items-center text-center text-gray-600 bg-[#fff] py-4 px-4 relative overflow-hidden hover:text-white`}>
                                <span className="material-symbols-outlined text-gray-200 font-thin self-start text-6xl hover:text-white">
                                    format_quote
                                </span>
                                <img src={card.imagen} alt="" className='grayscale opacity-50' />
                                <h3>{card.title}</h3>
                                <p>{card.content}</p>
                                <div className='w-[40px] h-[2px] text-gray-600 bg-slate-300'></div>
                                <p>{card.name}</p>
                                <p>{card.position}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div></div>
                <div></div>
            </div>
        </>
    )
}

export default About