import React from 'react';

function ModalWeb({imgZoom, imgNameZoom, setImgZoom}) {
    return (
        <div className={`h-screen py-14 bg-black/80 fixed top-0 overflow-auto duration-500 cursor-pointer ${ imgZoom? "w-full left-0":"left-[50%] w-0 h-0"}`} onClick={()=>{setImgZoom(false)}}>
            <img className='object-cover w-[90%] md:w-[35%] object-bottom m-auto border-2 border-stone-400 ' src={`/img/3_Web/${imgNameZoom}.webp`} alt="ejemplo"/> 
        </div>
    );
}

export default ModalWeb;