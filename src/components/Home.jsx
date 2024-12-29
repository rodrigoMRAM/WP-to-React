import React from 'react'
import imagen from '../assets/img/code.jpeg'
// import imagenMain from '../img/main.png'
import CircularProgressCountUp from '../utils/ProgressEffect'
import ObservedComponent from '../utils/ObserverPrueba'
import CardToReuse from './CardToReuse'
import '../effect.css'
import InteractiveBubble from './EffectHome'

import BackgroundImg from '../assets/img/background.jpg'

export const Home = () => {


  return (
    <>
    <div >
<div className="gradient-bg">

<img src={BackgroundImg} alt="" srcset="" />

    </div>
       <div className="flex flex-col justify-center items-center absolute top-44 w-full h-fit mt-10">
           <div className="flex flex-col justify-center items-center text-center">
               
               <h2 className="text-7xl font-bold mt-5 text-white flex">Software is a collection of <br /> programs and data.</h2>
                   <p className="text-center mt-5 text-white leading-6">Programmatically work but low hanging fruit so new economy cross-pollination. <br/>Quick sync new
                    economy onward and upward.</p>
                </div>
                <div className="mt-5"><button className="rounded button py-2 px-2 text-white font-medium transition delay-100 hover:bg-white hover:text-black">Learn More</button>
                    </div>
                    
                </div>
            </div>
            <div className="services">

            <div className="mt-24 flex items-center justify-center w-full">
                <div className="flex max-w-screen-xl items-center flex-wrap max-md:w-full justify-center max-md:gap-4">
                    <div className="flex flex-col text-center items-center w-[400px] flotante h-[320px] cursor-pointer group " >

                   
                        <div className='flex flex-col py-10 max-md:w-full ' >

                        <div className=''>
                            <span className={`material-symbols-outlined p-2  text-5xl bg-[#5580FF] border-4 border-[#5580FF] rounded-full text-white group-hover:text-[#5580FF] group-hover:bg-white  duration-200`}>
                            rewarded_ads
                            </span>
                        </div>
                            <h5 className="mt-5 font-bold">
                                Cognitive Automation
                            </h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center items-center w-[400px] ml-4 mr-4 border flotante h-[320px] cursor-pointer group">

                  
                        <div className='py-10'>
                            <span className={`material-symbols-outlined p-2  text-5xl bg-[#5580FF] border-4 border-[#5580FF] rounded-full text-white group-hover:text-[#5580FF] group-hover:bg-white duration-200`}>
social_leaderboard
</span>
                            <h5 className="mt-5 font-bold">
                                Cognitive Automation
                            </h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col text-center items-center w-[400px]  flotante h-[320px] cursor-pointer group">

        
                        <div className='py-10'>
                            <span className={`material-symbols-outlined p-2  text-5xl bg-[#5580FF] border-4 border-[#5580FF] rounded-full text-white group-hover:text-[#5580FF] group-hover:bg-white duration-200`}>
partner_exchange
</span>
                            <h5 className="mt-5 font-bold">
                                Cognitive Automation
                            </h5>
                            <p>
                                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam.
                            </p>
                        </div>
                        
                    </div>
                </div>

            </div>
            <div className="ourVision flex w-full mt-24">
                <div className='flex flex-col justify-center items-center w-full mt-24 mb-24'>
                <div className='mb-10'><h2 className='font-bold text-3xl'>Our Mission & Vision</h2></div>
                <div className='max-md:w-[90%] mb-4'><p className='text-center'>Standards compliant e-business.Phosfluorescently expedite functional products via <br />premium action items wireless innovation compliant e-business.</p></div>
                <div className='flex flex-col flex-wrap w-full px-[80px] max-md:px-[10px] max-md:w-full items-center max-md:gap-4'>
                    <div className='flex flex-wrap max-md:w-full max-md:gap-4 max-w-screen-xl'>

                    <div className='h-[250px] w-[30%] border-blue rounded flex items-center max-md:w-full  max-md:m-auto'>
                        <div className='flex '>

                        <div>

                    <span className="material-symbols-outlined p-2 text-[#5580FF] text-5xl border rounded-full mr-4">
select_check_box
</span>
                        </div>
                        <div>

                        <h3 className='font-bold'>
                        Social Security</h3>
                        <p>Progress moves us forward without marginalizing efforts to disrupt responsibility toward a potential the compromising.</p>
                        </div>
                    </div>
                        </div>
                    <div className='h-[250px] w-[30%] border-blue rounded flex items-center max-md:w-full max-md:m-auto'>
                        <div className="flex">

                        <div>

                    <span className="material-symbols-outlined p-2 text-[#5580FF] text-5xl border rounded-full mr-4">
cardiology
</span>
                        </div>
                        <div>

                        <h3 className='font-bold'>Medical Service
                        </h3>
                        <p>Progress moves us forward without marginalizing efforts to disrupt responsibility toward a potential the compromising.</p>
                        </div>
                    </div>
                        </div>
                    <div className='h-[250px] w-[30%] border-blue rounded flex items-center max-md:w-full max-md:m-auto'>
                        <div className='flex'>

                        <div>

                    <span className="material-symbols-outlined p-2 text-[#5580FF] text-5xl border rounded-full mr-4">
apartment
</span>
                        </div>
                        <div>

                        <h3 className='font-bold'>Foreign Policy</h3>
                    <p >Progress moves us forward without marginalizing efforts to disrupt responsibility toward a potential the compromising.</p></div>
                        </div>
                    </div>
                        </div>
                    <div className='division2 flex flex-wrap max-md:gap-4 max-w-screen-xl'>

                    <div className='h-[250px] w-[30%] border-blue rounded flex items-center max-md:w-full max-md:m-auto'>
                        <div className="flex">

                        <div>

                    <span className="material-symbols-outlined p-2 text-[#5580FF] text-5xl border rounded-full mr-4">
monitoring
</span>
                        </div>
                        <div>

                        <h3 className='font-bold'>Country Economic</h3>
                        <p>Progress moves us forward without marginalizing efforts to disrupt responsibility toward a potential the compromising.</p>
                        </div>
                    </div>
                        </div>
                    <div className='h-[250px] w-[30%] border-blue rounded flex items-center max-md:w-full max-md:m-auto'>
                        <div className="flex">

                        <div>

                    <span className="material-symbols-outlined p-2 text-[#5580FF] text-5xl border rounded-full mr-4">
support_agent
</span>
                        </div>
                        <div>

                        <h3 className='font-bold'>Women Rights</h3>
                    <p>Progress moves us forward without marginalizing efforts to disrupt responsibility toward a potential the compromising.</p></div>
                        </div>
                        </div>
                    <div className='h-[250px] w-[30%] border-blue rounded flex items-center max-md:w-full max-md:m-auto'>
                        <div className="flex">

                        <div>

                    <span className="material-symbols-outlined p-2 text-[#5580FF] text-5xl border rounded-full mr-4">
contract
</span>
                        </div>

                        <div>

                        <h3 className='font-bold'>
                    Focus on Education</h3>
                    <p>Progress moves us forward without marginalizing efforts to disrupt responsibility toward a potential the compromising.</p></div>
                        </div>
                    </div>
                        </div>
                </div>
                </div>
                
            </div>
        </div>
        <div className='w-full h-[300px] relative inline-block '>

        <div>
        <img className="h-[300px] w-full" src={imagen} alt=""  />
        </div>
        <div className="texto_imagen text-center">
              <p>let's Stand Together</p>
              <h2>Support Our Activities By a Donation</h2>
              

                </div>
        </div>
        <div>
            
<ObservedComponent></ObservedComponent>
        </div>
    <CardToReuse/>
    </>
  )
}
