import React from 'react'
import { useState } from 'react'

const Services = () => {
const [state, setState] = useState(false);

function changeColor(){
    setState(!state)
}

function quitarEvento(){
    setState(!state)
}

  return (
    <div className='flex justify-center items-center w-full'>

    <div className='flex flex-col items-center w-3/5' >
        <div className='flex '>
        <div>
            <p className='mt-5'>WHAT WE DO</p>
            <h3 className='mt-5'>OUR SERVICES</h3>
        </div>

        </div>
    <div className='flex gap-3'>

        <div className='flex w-[300px] bg-white py-5 px-6 rounded efecto_hover'>
            <div className='flex items-start'>
            <span class={`material-symbols-outlined text-5xl circle_rounded rounded-full p-2 mr-4 ${state? "bg-cyan-200" : ""} `}>
support_agent
</span>

            </div>
            <div>

            <p className='mb-5 font-bold'>QA Consulting</p>
            <p>Analysis, planning and execution of tests according to the needs of your business. Applying processes and techniques based on ISTQB standards</p>
            </div>
        </div>

        <div className='flex w-[300px] bg-white py-5 px-6 rounded efecto_hover' onMouseOver={changeColor} onMouseOut={quitarEvento}>
            <div className='flex items-start'>
            <span class="material-symbols-outlined text-5xl circle_rounded rounded-full p-2 mr-4 ">
computer
</span>
            </div>
            <div>

            <p className='mb-5 font-bold'>Implementation of Automated Tests </p>
            <p>
            Feasibility, costs and maintenance of automated testing frameworks such as Selenium, Playwright and Cypress
            </p>
            </div>
        </div>
        <div className='flex w-[300px] bg-white py-5 px-6 rounded efecto_hover'>
            <div className='flex items-start'>
            <span class="material-symbols-outlined text-5xl circle_rounded rounded-full p-2 mr-4">
design_services
</span>

            </div>
            <div>

            <p className='mb-5 font-bold'>Test Equipment Training</p>
            <p>Evaluation of the QA team, Definition of quality processes, Policies, Strategies, Test Plans and career plan for each of the members. Based on TMMi maturity model</p>
            </div>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Services