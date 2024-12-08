import React from 'react'
import { useState } from 'react'
import Computer from '../assets/computer.svg'
import Pencil from '../assets/pencilRule.svg'
import Person from '../assets/person_headphone.svg'
import SVGComputer from './SVGComponents/SvgComputer'
import SVGPencil from './SVGComponents/SvgPencil'
import SVGPerson from './SVGComponents/SvgPerson'


const Services = () => {


  return (
    <div className='flex justify-center items-center w-full pb-36 '>

    <div className='flex flex-col items-center w-3/5' >
        <div className='flex mb-14 mt-14 '>
        <div>
            <p className='mt-5 text-blue-400 font-bold text-center'>WHAT WE DO</p>
            <h3 className='mt-5 text-4xl font-bold'>OUR SERVICES</h3>
        </div>

        </div>
    <div className='flex gap-3'>

        <div className='flex w-[300px] bg-white py-5 px-6 rounded efecto_hover cursor-pointer group'>
            <div className='flex items-start'>
    <div  className={`w-16 circle_rounded rounded-full p-2 mr-4 hover:bg-blue-400 group-hover:bg-[#0693e3] duration-300`}>
<SVGPerson customClass="group-hover:fill-white duration-300"/>
  
    </div>


            </div>
            <div>

            <p className='mb-5 font-bold group-hover:text-[#0693e3] duration-300'>QA Consulting</p>
            <p>Analysis, planning and execution of tests according to the needs of your business. Applying processes and techniques based on ISTQB standards</p>
            </div>
        </div>

        <div className='flex w-[300px] bg-white py-5 px-6 rounded efecto_hover cursor-pointer group'>
            <div className='flex items-start'>
            <div  className={`w-16 circle_rounded rounded-full p-2 mr-4 group-hover:bg-[#9b51e0] duration-300 `}>

<SVGComputer customClass="group-hover:fill-white duration-300 "/>

</div>
            </div>
            <div>

            <p className='mb-5 font-bold group-hover:text-[#9b51e0] duration-300'>Implementation of Automated Tests </p>
            <p>
            Feasibility, costs and maintenance of automated testing frameworks such as Selenium, Playwright and Cypress
            </p>
            </div>
        </div>
        <div className='flex w-[300px] bg-white py-5 px-6 rounded efecto_hover cursor-pointer group'>
            <div className='flex items-start'>
            <div  className={`w-16 circle_rounded rounded-full p-2 mr-4 group-hover:bg-[#7bdcb5] duration-300`}>

<SVGPencil  customClass="group-hover:fill-white duration-300"/>


</div>

            </div>
            <div>

            <p className='mb-5 font-bold group-hover:text-[#7bdcb5] duration-300'>Test Equipment Training</p>
            <p>Evaluation of the QA team, Definition of quality processes, Policies, Strategies, Test Plans and career plan for each of the members. Based on TMMi maturity model</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Services