import React from 'react';
import Footer from '../components/footer';

function Design() {
    return (
        <>
            <h2 className='hidden'> Diseño digital </h2>
            <div className="w-full h-screen bg-cover bg-no-repeat bg-center bg-[url('/img/2_Diseño/DiseñoBgSd.webp')] md:bg-[url('/img/2_Diseño/DiseñoBgMd.webp')] lg:bg-[url('/img/2_Diseño/DiseñoBgLg.webp')] xl:bg-[url('/img/2_Diseño/DiseñoBgXl.webp')]">
                <div className="w-full h-full bg-[length:125%_] lg:bg-contain  bg-no-repeat bg-center bg-[url('/img/2_Diseño/DiseñoDino.webp')]"> </div>
            </div>
            <Footer/>
        </>
    );
}

export default Design;