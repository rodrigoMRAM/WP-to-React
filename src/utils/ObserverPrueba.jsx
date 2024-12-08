import React, { useEffect, useRef, useState } from 'react';
import CircularProgressCountUp from './ProgressEffect';
import { Spinner1,Spinner2, Spinner3, Spinner4 } from '../components/spinners/Spinner1';

const ObservedComponent = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [color, setcolor] = useState("primary")
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Cambia el estado basado en la visibilidad del elemento
        setcolor("danger")
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

                <div className="porcentaje h-[600px]" ref={ref}>
        <div className="porcentajes h-[600px] flex justify-center items-center flex-wrap ">
            <div className='text-center flex flex-col items-center w-[300px] max-md:w-full'>
        {isVisible ? <Spinner1 color="danger"/> : ""}
                <h2 className='porcentaje_texto'>Innovations</h2>
                <p>Are you looking for trust who are ready to.</p>
            </div>
            <div className='text-center flex flex-col items-center w-[300px] max-md:w-full'>
            {isVisible ? <Spinner2 color="primary" /> : ""}
                <h2 className='porcentaje_texto'>Action Plans</h2>
                <p>Are you looking for trust who are ready to.</p>
            </div>
            <div className='text-center flex flex-col items-center w-[300px] max-md:w-full'>
        {isVisible ? <Spinner3 color="danger"/> : ""}
                <h2 className='porcentaje_texto'>Big Projects</h2>
                <p>Are you looking for trust who are ready to.</p>
            </div>
            <div className='text-center flex flex-col items-center  max-md:w-full'>
        {isVisible ? <Spinner4 color="danger" /> : ""}
                <h2 className='porcentaje_texto'>Great Tests</h2>
                <p>Are you looking for trust who are ready to.</p>
            </div>
   
        </div>
        </div>


  );
};

export default ObservedComponent;
