import { NavLink} from 'react-router-dom'
import React from 'react';

function Nav({sliseMedia, sideBar}) {
    return (
        <nav className={`h-screen bg-white fixed top-0 left-0 ease-in duration-[500ms] overflow-hidden ${sideBar? 'w-6/12 lg:w-2/12 block' : 'w-0 block' }`}>
            <ul className='h-4/5 w-full cursor-pointer uppercase list-disc  font-coco flex flex-col mt-2'>
                <NavLink className={({isActive}) => isActive? "text-teal-600" : ""} to="/"> 
                    <li className="w-full flex items-center hover:bg-teal-600/90 hover:text-white hover:duration-500"> 
                        <span className='text-teal-600 font-extrabold text-3xl mx-1 pb-2'>•</span>
                        Home     
                    </li>
                </NavLink>
                
                <NavLink className={({isActive}) => isActive? "text-teal-600" : ""} to="/design"> 
                    <li className="w-full flex items-center hover:bg-teal-600/90 hover:text-white hover:duration-500"> 
                        <span className='text-teal-600 font-extrabold text-3xl mx-1 pb-2'>•</span>
                        Diseño 
                    </li>
                </NavLink>
                
                <NavLink className={({isActive}) => isActive? "text-teal-600" : ""} to="/web"> 
                    <li className="w-full flex items-center hover:bg-teal-600/90 hover:text-white hover:duration-500"> 
                        <span className='text-teal-600 font-extrabold text-3xl mx-1 pb-2'>•</span>
                        Web
                    </li>
                </NavLink>
                
                <NavLink className={({isActive}) => isActive? "text-teal-600" : ""} to="/media"> 
                    <li className="w-full flex items-center hover:bg-teal-600/90 hover:text-white hover:duration-500"> 
                        <span className='text-teal-600 font-extrabold text-3xl mx-1 pb-2'>•</span>
                        Media
                    </li>
                </NavLink>
                
                <NavLink className={({isActive}) => isActive? "text-teal-600" : ""} to="/marketing">
                    <li className="w-full flex items-center hover:bg-teal-600/90 hover:text-white hover:duration-500"> 
                        <span className='text-teal-600 font-extrabold text-3xl mx-1 pb-2'>•</span>
                        Marketing
                    </li>
                </NavLink>
                
                <li className="w-full flex hover:bg-teal-600/90 hover:text-white hover:duration-500" onClick={()=>sliseMedia(true)} onMouseLeave={()=>sliseMedia(false)}> 
                    <span className='text-teal-600 font-extrabold text-3xl mb-2 mx-1'>•</span> 
                    <span className='my-auto'> Contacto </span>
                </li>
            </ul>
            <div className='h-1/5 '>
                <img className='w-4/6 m-auto' src="../public/img/Stuffs/RxLogoBlack.webp" alt=""/>
            </div>
        </nav>
    );
}

export default Nav;