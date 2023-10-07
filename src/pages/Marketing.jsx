import React from 'react';
import Footer from '../components/footer';
import Prelude from '../components/Prelude';
import Divider from '../components/Divider';

function Marketing(props) {
    return (
        <>
            <h2 className='hidden'> Marketing </h2>
            <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/img/5_Marketing/MktBgSd.webp')] md:bg-[url('/img/5_Marketing/MktBgMd.webp')] lg:bg-[url('/img/5_Marketing/MktBgLg.webp')] xl:bg-[url('/img/5_Marketing/MktBgXl.webp')]">
                <div className="w-full h-full bg-contain bg-no-repeat bg-center bg-[url('/img/5_Marketing/MktDino.webp')] "> </div>
            </div>
            <Prelude title="Marketing" file="5_Marketing" pic="PicMarketing" text="Exploración, creación y entrega de valor de estrategias cuyo fin es la satisfacción de las necesidades de tu marca."/>
            <Divider/>
            <section className='py-4'>
                <h4 className='font-coco text-3xl md:text-6xl uppercase w-full text-slate-500 text-center my-8'> Colection </h4> 

                <div className='w-full h-44 md:h-80 flex justify-center items-center bg-slate-100'>
                    <img className='w-6/12 md:w-4/12' src="../../public/img/Logos/Logo-05.webp" alt="Logo-05"/>
                </div>

                <div className='w-full h-44 md:h-80 flex justify-center items-center'>
                    <img className='w-4/12 md:w-3/12' src="../../public/img/Logos/Logo-07.webp" alt="Logo-07"/>
                </div>

                <div className='w-full h-44 md:h-80 flex justify-center items-center bg-slate-100'>
                    <img className='w-6/12 md:w-4/12' src="../../public/img/Logos/Logo-08.webp" alt="Logo-08"/>
                </div>

            </section>
            <Footer/>
        </>
    );
}

export default Marketing;