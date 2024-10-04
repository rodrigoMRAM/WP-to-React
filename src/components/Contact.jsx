import React from 'react'
import imagen from "../img/kraioimg.jpeg"

export const Contact = () => {
    return (
        <div className='w-full flex justify-center mb-16 flex-wrap items-center text-center mt-7 contact'>
            <div className='contacto70'>

            <div className='text-center flex flex-col justify-center items-center'>
                <h2 className='font-bold text-3xl mb-5'>
                    Our Branch
                </h2>
                <p className='w-5/12 text-center mb-5'>
                    Interested in our IT services or need advice? Then please get in touch and we’ll be glad to help.
                </p>
            </div>
            <div className='flex flex-wrap mx:w-full'>
                <div className='flex flex-col mx:w-full'>
                    <img className='mx:w-full' src={imagen} alt="" />
                    <div className='flex flex-col justify-start items-start text-gray-600'>
                        <h3 className='font-bold mt-5 text-black text-3xl'>Parque Patricios</h3>

                        <div className='flex mt-5'>
                            <span class="material-symbols-outlined">
                                location_on
                            </span>
                            <p>Buenos Aires - Argentina</p>
                        </div>
                        <div className='flex mt-5'>
                        <span class="material-symbols-outlined">
phone_enabled
</span>
                        <p>+54 11 2520-9854</p>
                        </div>
                        <div className='flex mt-5'>
                        <span class="material-symbols-outlined">
mail
</span>
                        <p>lucas.tula@krakiolabs.com</p>

                        </div>
                    </div>
                </div>
                <div className='ml-20 mx:w-full'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13130.659882583359!2d-58.41195867681205!3d-34.63790581246921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccb1160a8e62b%3A0x42f33f7586b05be1!2sParque%20Patricios%2C%20Cdad.%20Aut%C3%B3noma%20de%20Buenos%20Aires!5e0!3m2!1ses!2sar!4v1726627421978!5m2!1ses!2sar"  loading="lazy" referrerpolicy="no-referrer-when-downgrade" width="600px" height="450px"></iframe>
                </div>
            </div>
            </div>
        </div>
    )
}
