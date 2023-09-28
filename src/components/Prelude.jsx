import React from 'react';

function Prelude({title, file, pic, text}) {
    return (
        <section className='h-screen w-full py-1 md:py-4 flex flex-col md:flex-row'>
            <div className='w-full md:w-1/2 h-full font-coco flex flex-col justify-center items-center text-center md:text-right'>
                <h3 className='text-5xl md:text-6xl uppercase w-3/4 mb-10 md:mb-0'> {title} </h3>
                <p className='text-base md:text-xl w-3/4'> {text} </p>
            </div>
            <div className='w-full md:w-1/2 h-full'>
                <img className="h-full w-full" src={`../../public/img/${file}/${pic}.webp`} alt={pic}/>    
            </div>
        </section>
    );
}

export default Prelude;