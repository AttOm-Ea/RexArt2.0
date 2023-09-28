import React from 'react';
import Footer from '../components/footer';
import Prelude from '../components/Prelude';

function Media(props) {
    return (
        <>
            <h2 className='hidden'> Social Media </h2>
            <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/img/4_Media/MediaBgSd.webp')] md:bg-[url('/img/4_Media/MediaBgMd.webp')] lg:bg-[url('/img/4_Media/MediaBgLg.webp')] xl:bg-[url('/img/4_Media/MediaBgXl.webp')]">
                <div className="w-full h-full bg-contain bg-no-repeat bg-center bg-[url('/img/4_Media/MediaDinoSd.webp')] lg:bg-[url('/img/4_Media/MediaDinoLg.webp')] "> </div>
            </div>
            <Prelude title="Media" file="4_Media" pic="PicMedia" text="Herramientas profesionales para la obtención de contenido audiovisual con el fin de extraer el máximo potencial de tu marca."/>
            <Footer/>
        </>
    );
}

export default Media;