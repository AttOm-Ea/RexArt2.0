import React from 'react';
import Footer from '../components/footer';
import Prelude from '../components/Prelude';

function Web() {
    return (
        <>
            <h2 className='hidden'> Diseño Web </h2>
            <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/img/3_Web/WebBgSd.webp')] md:bg-[url('/img/3_Web/WebBgMd.webp')] lg:bg-[url('/img/3_Web/WebBgLg.webp')] xl:bg-[url('/img/3_Web/WebBgXl.webp')]">
                <div className="w-full h-full bg-[length:180%_] md:bg-[length:175%_] lg:bg-contain bg-no-repeat bg-center bg-[url('/img/3_Web/WebDinoSd.webp')] md:bg-[url('/img/3_Web/WebDinoMd.webp') lg:bg-[url('/img/3_Web/WebDinoLg.webp')] xl:bg-[url('/img/3_Web/WebDinoXl.webp')] "> </div>
            </div>
            <Prelude title="Web" file="3_Web" pic="PicWeb" text="El espacio virtual de tu marca donde el mundo entero será testigo de tu contenido, productos y servicios."/>
            <Footer/>
        </>
    );
}

export default Web;