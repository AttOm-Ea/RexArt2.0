import React from 'react';

function CardWeb({imgDesktop, imgMobile, logo, functionZoom, functionZoomName}) {
    return (
        <>
            <div className='w-full md:w-11/12 h-3/6 md:h-4/6 flex items-center justify-center'>
                <div className='w-10/12 md:w-7/12 h-3/6 md:h-5/6 shadow-[.3rem_.2rem_.2rem_.1rem_rgba(0,0,0,0.6)] hover:shadow-[.3rem_.5rem_.2rem_.1rem_rgba(0,0,0,0.6)] ml-2 md:ml-0 hover:mb-4 duration-300' onClick={()=>{functionZoom(true), functionZoomName(imgDesktop)}}>
                    <img className='object-cover h-full w-full object-top cursor-pointer' src={`../../public/img/3_Web/${imgDesktop}.webp`} alt="ejemplo"/>
                </div>
                <div className='w-3/12 md:w-2/12 h-2/5 md:h-3/5 shadow-[.3rem_.2rem_.2rem_.1rem_rgba(0,0,0,0.6)] hover:shadow-[.3rem_.5rem_.2rem_.1rem_rgba(0,0,0,0.6)] -ml-14 md:-ml-16 mt-40 hover:mb-4 duration-300' onClick={()=>{functionZoom(true), functionZoomName(imgMobile)}}>
                    <img className='object-cover h-full w-full object-top cursor-pointer' src={`../../public/img/3_Web/${imgMobile}.webp`} alt="ejemplo"/>    
                </div>
            </div>
            <div className='w-full h-2/6 flex justify-center'>
                <img className='object-contain h-1/2 w-1/2' src={`../../public/img/Logos/${logo}.webp`} alt={logo}/>
            </div>
        </>
    );
}

export default CardWeb;