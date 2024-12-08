import React, { useEffect, useRef, useState } from 'react';
import { Spinner1,Spinner2, Spinner3, Spinner4 } from '../components/Spinners/Spinner1';

const ObservedComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [color, setcolor] = useState("primary")
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cambia el estado basado en la visibilidad del elemento
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.3, // Se considera visible cuando el 10% del elemento es visible
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Limpieza del observer al desmontar el componente
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (

                <div className="porcentaje  max-md:h-auto" ref={ref}>
        <div className="porcentajes h-[600px] flex justify-center max-md:h-auto items-center flex-wrap max-md:w-auto max-md:py-20">
            <div className='text-center flex flex-col items-center w-[300px] max-md:w-full max-md:h-[200px]'>
        {isVisible ? <Spinner1 color="danger"/> : ""}
                <h2 className='porcentaje_texto'>Innovations</h2>
                <p className='text-[#716c80]'>Are you looking for trust who are ready to.</p>
            </div>
            <div className='text-center flex flex-col items-center w-[300px] max-md:w-full max-md:h-[200px]'>
            {isVisible ? <Spinner2 color="primary" /> : ""}
                <h2 className='porcentaje_texto'>Action Plans</h2>
                <p className='text-[#716c80]'>Are you looking for trust who are ready to.</p>
            </div>
            <div className='text-center flex flex-col items-center w-[300px] max-md:w-full max-md:h-[200px]'>
        {isVisible ? <Spinner3 color="danger"/> : ""}
                <h2 className='porcentaje_texto'>Big Projects</h2>
                <p className='text-[#716c80]'>Are you looking for trust who are ready to.</p>
            </div>
            <div className='text-center flex flex-col items-center w-[300px] max-md:w-full max-md:h-[200px]'>
        {isVisible ? <Spinner4 color="danger" /> : ""}
                <h2 className='porcentaje_texto'>Great Tests</h2>
                <p className='text-[#716c80]'>Are you looking for trust who are ready to.</p>
            </div>
   
        </div>
        </div>


  );
};

export default ObservedComponent;
