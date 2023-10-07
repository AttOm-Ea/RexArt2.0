import React from 'react';
import Prelude from '../components/Prelude';
import CardDesing from '../components/design/CardDesing';
import Footer from '../components/footer';
import Divider from '../components/Divider';

function Design() {
    return (
        <>
            <h2 className='hidden'> Diseño digital </h2>
            <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/img/2_Diseño/DiseñoBgSd.webp')] md:bg-[url('/img/2_Diseño/DiseñoBgMd.webp')] lg:bg-[url('/img/2_Diseño/DiseñoBgLg.webp')] xl:bg-[url('/img/2_Diseño/DiseñoBgXl.webp')]">
                <div className="w-full h-full bg-[length:125%_] lg:bg-contain  bg-no-repeat bg-center bg-[url('/img/2_Diseño/DiseñoDino.webp')]"> </div>
            </div>
            <Prelude title="Diseño" file="2_Diseño" pic="PicDiseño" text="Optimiza y mejora la comunicación gráfica de tu marca con un diseño artístico y creativo que vuelva única tu identidad."/>
            <Divider/>
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