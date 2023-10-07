import React from 'react';

function CardMedia({img, logo, order}) {
    return (
        <div className='w-full flex'>
            <img className={`w-1/2 ${ order ? "order-1":"order-2"}`} src={`../../public/img/4_Media/${img}.webp`} alt="OdontoPic" />
            <div className={`w-1/2 flex justify-center items-center ${ order ? "order-2":"order-1"}`} >
                <img className='w-1/3' src={`../../public/img/Logos/${logo}.webp`} alt={logo}/>    
            </div>
        </div>
    );
}

export default CardMedia;