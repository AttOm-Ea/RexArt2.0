import { Route, Routes, NavLink, Link } from 'react-router-dom'
import Design from './pages/Design'
import Home from './pages/Home'
import Web from './pages/Web';
import { useState } from 'react'



function App() {
  const [sideBar, setSideBar] = useState(false);
  const [icontools, setIcontools] = useState(false);
  const [annimate, setAnnimate ] = useState(true);

  function sliseMedia(openClose) {
    if (openClose) {
      setAnnimate(false)
      setIcontools(true)
      
    }else{
      setAnnimate(true)
      
    }
  }

  return (
    <>
      <div className={`w-full flex flex-col relative overscroll-none`}>
        <div className={`h-screen fixed top-0 left-0 ease-in-out duration-0 ${sideBar? 'w-full' : 'w-0'}`} onClick={()=>setSideBar(!sideBar)}> 
          <div className={`w-full h-full ease-in-out duration-500 ${sideBar? 'bg-gray-900/60' : 'bg-inherit'}`} onClick={()=>setSideBar(!sideBar)}> </div>
        </div>
        <nav className={`h-screen bg-white fixed top-0 left-0 ease-in duration-[500ms] overflow-hidden ${sideBar? 'w-2/12 block' : 'w-0 block' }`}>
          <ul className='w-full cursor-pointer'>
            <li> <NavLink className={({isActive}) => isActive? "bg-slate-700" : "bg-none"} to="/"> Home </NavLink> </li>
            <li> <NavLink className={({isActive}) => isActive? "bg-slate-700" : "bg-none"} to="/design"> Diseño </NavLink> </li>
            <li> <NavLink className={({isActive}) => isActive? "bg-slate-700" : "bg-none"} to="/web"> Web </NavLink> </li>
            <li> <NavLink className={({isActive}) => isActive? "bg-slate-700" : "bg-none"} to="/media"> Media </NavLink> </li>
            <li> <NavLink className={({isActive}) => isActive? "bg-slate-700" : "bg-none"} to="/marketing"> Marketing </NavLink> </li>
            <li className='' onClick={()=>sliseMedia(true)} onMouseLeave={()=>sliseMedia(false)}> Contacto </li>
          </ul>
        </nav>
        <div className='h-12 fixed top-2 right-2 cursor-pointer' onClick={()=>setSideBar(!sideBar)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="65px" viewBox="0 0 24 24" width="65px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"/></svg>
        </div>

        <div className='w-12 flex flex-col-reverse justify-between items-center fixed bottom-10 right-10 cursor-pointer duration-[150ms] ease-in text-white text-center' onMouseEnter={()=>setIcontools(true)} onMouseLeave={()=>setIcontools(false)}>
          <Link href="" className={`w-11 aspect-square flex rounded-full bg-black shadow-[0px_5px_10px_1px_rgba(0,0,0,0.6)] ${annimate? 'animate-bounce' : 'animate-ping'}`}> 
            <img className="w-full h-full p-1" src="../Favicon/Fav.png" alt="Dino"/>
          </Link>
          <Link href="" className={`mt-1 mb-5 flex aspect-square rounded-full overflow-hidden bg-[url('/SocialMedia/whats.png')] bg-center bg-[length:140%_140%] shadow-[0px_5px_10px_1px_rgba(0,0,0,0.6)] duration-[500ms] ease-in ${icontools? 'h-8':'h-0'} ${icontools? 'border-white border-2':'border-none'}`}> </Link> 
          <Link href="" className={`my-1 flex aspect-square rounded-full overflow-hidden bg-[url('/SocialMedia/face.png')] bg-center bg-[length:140%_140%] shadow-[0px_5px_10px_1px_rgba(0,0,0,0.6)] duration-[500ms] ease-in ${icontools? 'h-8':'h-0'} ${icontools? 'border-white border-2':'border-none'}`}> </Link>
          <Link href="" className={`my-1 flex aspect-square rounded-full overflow-hidden bg-[url('/SocialMedia/insta.png')] bg-center bg-[length:150%_150%] shadow-[0px_5px_10px_1px_rgba(0,0,0,0.6)] duration-[500ms] ease-in ${icontools? 'h-8':'h-0'} ${icontools? 'border-white border-2':'border-none'}`}> </Link>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/design' element={<Design/>}/>
          <Route path='/web' element={ <Web/> }/>
          <Route path='/media' element={<h1> hi media!</h1>}/>
          <Route path='/marketing' element={<h1> hi marketing!</h1>}/>
          <Route path='/*' element={<h1> 404 Not Found this page</h1>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
