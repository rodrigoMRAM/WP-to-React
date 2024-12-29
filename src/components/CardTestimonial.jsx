import React from 'react'
import KrakioLogo from '../assets/img/krakioImg.png'
const CardTestimonial = ({margin}) => {
  return (
    <div className={`cardTestimonio z-40 shadow-xl flex mb-16 w-[350px] h-[460px] flex-col ${margin} justify-between items-center text-center text-gray-600 bg-[#fff] py-4 px-4 relative overflow-hidden hover:text-white`}>
                    <span className="material-symbols-outlined text-gray-200 font-thin self-start text-6xl hover:text-white">
format_quote
</span>
                        <img src={KrakioLogo} alt="" className='grayscale opacity-50' />
                        <h3>Logo</h3>
                        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about</p>
                        <div className='w-[40px] h-[2px] text-gray-600 bg-slate-300'></div>
                        <p>Shams W.Pawel</p>
                        <p>Founder & CEO</p>
                    </div>
  )
}

export default CardTestimonial