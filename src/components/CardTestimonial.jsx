import React from 'react'

const CardTestimonial = ({margin}) => {
    console.log(margin)
  return (
    <div className={`cardTestimonio z-40 shadow-xl flex mb-16 w-[350px] h-[350px] flex-col ${margin} justify-between items-center text-center text-gray-600 bg-[#fff] py-4 px-4 relative overflow-hidden hover:text-white`}>
                    <span class="material-symbols-outlined text-gray-500 font-thin self-start text-4xl hover:text-white text-2xl">
format_quote
</span>
                        <h3>Logo</h3>
                        <p>It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about</p>
                        <div className='w-[40px] h-[2px] text-gray-600 bg-slate-300'></div>
                        <p>Shams W.Pawel</p>
                        <p>Founder & CEO</p>
                    </div>
  )
}

export default CardTestimonial