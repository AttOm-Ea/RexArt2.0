import React from 'react';
import Footer from '../components/footer';
import CardDesing from '../components/design/CardDesing';

function Design() {
    return (
        <>
            <h2 className='hidden'> Diseño digital </h2>
            <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/img/2_Diseño/DiseñoBgSd.webp')] md:bg-[url('/img/2_Diseño/DiseñoBgMd.webp')] lg:bg-[url('/img/2_Diseño/DiseñoBgLg.webp')] xl:bg-[url('/img/2_Diseño/DiseñoBgXl.webp')]">
                <div className="w-full h-full bg-[length:125%_] lg:bg-contain  bg-no-repeat bg-center bg-[url('/img/2_Diseño/DiseñoDino.webp')]"> </div>
            </div>
            <section className='h-screen w-full py-1 md:py-4 flex flex-col md:flex-row'>
                <div className='w-full md:w-1/2 h-full font-coco flex flex-col justify-center items-center text-center md:text-right'>
                    <h3 className='text-5xl md:text-6xl uppercase w-3/4 mb-10 md:mb-0'> Diseño </h3>
                    <p className='text-base md:text-xl w-3/4'> Optimiza y mejora la comunicación gráfica de tu marca con un diseño artístico y creativo que vuelva única tu identidad. </p>
                </div>
                <div className='w-full md:w-1/2 h-full'>
                    <img className='h-full w-full' src="../../public/img/2_Diseño/PicDiseño.webp" alt="PicDiseño"/>    
                </div>
            </section>
            <div className=' w-full h-16 bg-gray-900/90'> {/* Divider */} </div>
            <section className='w-full'>
                <h4 className='font-coco text-3xl md:text-6xl uppercase w-full text-slate-500 text-center mt-8'> Colection </h4>
                <CardDesing img="LaHuerta" logo="Logo-01" order={true}/>
                <CardDesing img="Freyja" logo="Logo-02" order={false}/>
                <CardDesing img="SpaceHund" logo="Logo-03" order={true}/>
                <CardDesing img="EndoStore" logo="Logo-04" order={false}/>
            </section>
            <Footer/>
        </>
    );
}

export default Design;