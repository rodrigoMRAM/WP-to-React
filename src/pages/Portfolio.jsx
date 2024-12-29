import React from 'react'
import imagen1 from '../assets/img/imagen1.webp'
import imagen2 from '../assets/img/imagen2.webp'
import imagen3 from '../assets/img/imagen3.webp'


export const Portfolio = () => {

  const content = [
    {imagen : imagen1, title: 'Harrison Hudson', description: 'Offering the best image box WordPress plugin. Now you will know about all the features!'},
    {imagen : imagen2, title: 'Elizabeth Sofia', description: 'image box carousel for Elementor! A great starting for your beautiful WordPress sites.'},
    {imagen : imagen3 , title: 'Charlie Cooper', description :'Do you know how to add image box in WordPress website with elementary. Download Elementskit.'},
    {imagen : imagen2, title: 'Elizabeth Sofia', description: 'image box carousel for Elementor! A great starting for your beautiful WordPress sites.'},
    {imagen : imagen3 , title: 'Charlie Cooper', description :'Do you know how to add image box in WordPress website with elementary. Download Elementskit.'},
    {imagen : imagen1, title: 'Harrison Hudson', description: 'Offering the best image box WordPress plugin. Now you will know about all the features!'},
  ]


  return (
    <div className='w-full flex flex-col text-center items-center py-10 h-auto bg-[#D6D6D629]'>
        <h1>Portfolio</h1>
        <div className='flex flex-wrap max-w-4xl gap-4 justify-center '>

      {content.map(item => (
        
        <div className='w-[250px] h-[640px] flex flex-col my-10 bg-white'>
      <div className='h-1/2 w-full'>

        <img src={item.imagen} alt="" className='w-full h-full'/>
      </div>
        <div className='h-1/2 text-center flex flex-col items-center justify-evenly'>

        <h3>{item.title}</h3>
        <p>{item.description}</p>
        <button className='w-32 text-red-600 py-3 px-4 rounded hover:bg-red-600 hover:text-white'>Read more</button>
        </div>
    </div>  
      ))}
      </div>
    </div>
  )
}
