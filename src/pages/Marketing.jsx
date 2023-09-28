import React from 'react';
import Footer from '../components/footer';
import Prelude from '../components/Prelude';

function Marketing(props) {
    return (
        <>
            <h2 className='hidden'> Marketing </h2>
            <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/img/5_Marketing/MktBgSd.webp')] md:bg-[url('/img/5_Marketing/MktBgMd.webp')] lg:bg-[url('/img/5_Marketing/MktBgLg.webp')] xl:bg-[url('/img/5_Marketing/MktBgXl.webp')]">
                <div className="w-full h-full bg-contain bg-no-repeat bg-center bg-[url('/img/5_Marketing/MktDino.webp')] "> </div>
            </div>
            <Prelude title="Marketing" file="5_Marketing" pic="PicMarketing" text="Exploración, creación y entrega de valor de estrategias cuyo fin es la satisfacción de las necesidades de tu marca."/>
            <Footer/>
        </>
    );
}

export default Marketing;