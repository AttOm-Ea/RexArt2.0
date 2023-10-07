import React, { useState } from 'react';
import Footer from '../components/footer';
import Prelude from '../components/Prelude';
import Divider from '../components/Divider';
import CardWeb from '../components/web/CardWeb';
import ModalWeb from '../components/web/ModalWeb';

function Web() {
    const [imgZoom, setImgZoom] = useState(false);
    const [imgNameZoom, setImgNameZoom] = useState("");

    return (
        <div className='overflow-hidden	h-full static'>
            <h2 className='hidden'> Diseño Web </h2>
            <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/img/3_Web/WebBgSd.webp')] md:bg-[url('/img/3_Web/WebBgMd.webp')] lg:bg-[url('/img/3_Web/WebBgLg.webp')] xl:bg-[url('/img/3_Web/WebBgXl.webp')]">
                <div className="w-full h-full bg-[length:180%_] md:bg-[length:175%_] lg:bg-contain bg-no-repeat bg-center bg-[url('/img/3_Web/WebDinoSd.webp')] md:bg-[url('/img/3_Web/WebDinoMd.webp') lg:bg-[url('/img/3_Web/WebDinoLg.webp')] xl:bg-[url('/img/3_Web/WebDinoXl.webp')] "> </div>
            </div>
            <Prelude title="Web" file="3_Web" pic="PicWeb" text="El espacio virtual de tu marca donde el mundo entero será testigo de tu contenido, productos y servicios."/>
            <Divider/>
            <section className='h-screen py-3 flex'>
                <div className="w-full h-full bg-[url('/img/3_Web/BackGroundMob.jpeg')] md:bg-[url('/img/3_Web/BackGroundDes.jpeg')] bg-center bg-cover"> 
                    <div className="w-full md:w-8/12 h-full flex flex-col items-center pt-8 pb-14 md:pb-0">
                        <h4 className='font-coco text-3xl md:text-6xl uppercase w-full text-slate-500 text-center mt-8'> Colection </h4> 
                        <div className='w-full flex flex-col items-center overflow-auto'>
                            <ModalWeb imgZoom={imgZoom} imgNameZoom={imgNameZoom} setImgZoom={setImgZoom}/>
                            <CardWeb imgDesktop="EndoStoreWebPC" imgMobile="EndoStoreWebMOV" logo="Logo-04" functionZoom={setImgZoom} functionZoomName={setImgNameZoom}/>
                            <CardWeb imgDesktop="DomcareWebPC" imgMobile="DomcareWebMOV" logo="Logo-06" functionZoom={setImgZoom} functionZoomName={setImgNameZoom}/>    
                        </div>
                    </div>
                </div>
            </section>
            <Footer/>
        </div>
    );
}

export default Web;