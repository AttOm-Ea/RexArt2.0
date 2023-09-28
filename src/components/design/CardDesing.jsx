import React from 'react';

function CardDesing({img, logo, order}) {
    return (
        <div className='w-full md:h-screen flex flex-col md:flex-row justify-between items-center p-7'>
            <img className={`w-full md:w-9/12 md:h-full ${order?"order-1":"order-1 md:order-2"}`} src={`../../../public/img/2_Diseño/${img}.webp`} alt={img}/>
            <div className={`w-full md:w-3/12 h-1/5 md:h-full mt-4 md:mt-0 flex ${order?"order-2 justify-end":"order-1 justify-start"}`}>
                <div className='w-full md:w-11/12 h-36 md:h-full border rounded-md md:rounded-xl flex justify-center items-center'>
                    <img className='w-4/12 md:w-4/5' src={`../../../public/img/Logos/${logo}.webp`} alt={logo}/>
                </div>    
            </div>
        </div>
    );
}

export default CardDesing;