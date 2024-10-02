import React, { useEffect, useRef, useState } from 'react';
import CircularProgressCountUp from './ProgressEffect';

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

                <div className="porcentaje" ref={ref}>
        <div className="porcentajes h-[600px] flex justify-center items-center">
            <div className='text-center flex flex-col items-center'>
        {isVisible ? <CircularProgressCountUp color="danger" valorFinal={20}/> : ""}
                <h2 className='porcentaje_texto'>Innovations</h2>
                <p>Are you looking for trust who are ready to.</p>
            </div>
            <div className='text-center flex flex-col items-center'>
            {isVisible ? <CircularProgressCountUp color="primary" valorFinal={70} /> : ""}
                <h2 className='porcentaje_texto'>Action Plans</h2>
                <p>Are you looking for trust who are ready to.</p>
            </div>
            <div className='text-center flex flex-col items-center'>
        {isVisible ? <CircularProgressCountUp color="danger" valorFinal={20}/> : ""}
                <h2 className='porcentaje_texto'>Big Projects</h2>
                <p>Are you looking for trust who are ready to.</p>
            </div>
            <div className='text-center flex flex-col items-center'>
        {isVisible ? <CircularProgressCountUp color="danger" valorFinal={20}/> : ""}
                <h2 className='porcentaje_texto'>Great Tests</h2>
                <p>Are you looking for trust who are ready to.</p>
            </div>
   
        </div>
        </div>


  );
};

export default ObservedComponent;
