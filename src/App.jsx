import { Route, Routes, NavLink, Link } from 'react-router-dom'
import Design from './pages/Design'
import Home from './pages/Home'
import Web from './pages/Web';
import { useState } from 'react'
import Media from './pages/Media';
import Marketing from './pages/Marketing';
import Nav from './components/Nav';



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
      <h1 className='hidden'> Colectivo artistico y digital</h1>
      <div className={`w-full flex flex-col relative overscroll-none`}>
        <div className={`h-screen fixed top-0 left-0 ease-in-out duration-0 ${sideBar? 'w-full' : 'w-0'}`} onClick={()=>setSideBar(!sideBar)}> 
          <div className={`w-full h-full ease-in-out duration-500 ${sideBar? 'bg-gray-900/60' : 'bg-inherit'}`} onClick={()=>setSideBar(!sideBar)}> </div>
        </div>
        <Nav sideBar={sideBar} sliseMedia={sliseMedia}/>
        <div className='h-12 fixed top-2 right-2 cursor-pointer' onClick={()=>setSideBar(!sideBar)}>
          <svg xmlns="http://www.w3.org/2000/svg" height="65px" viewBox="0 0 24 24" width="65px" fill="#000000"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M3 18h13v-2H3v2zm0-5h10v-2H3v2zm0-7v2h13V6H3zm18 9.59L17.42 12 21 8.41 19.59 7l-5 5 5 5L21 15.59z"/></svg>
        </div>

        <div className='w-12 flex flex-col-reverse justify-between items-center fixed bottom-10 right-10 cursor-pointer duration-[150ms] ease-in text-white text-center' onMouseEnter={()=>setIcontools(true)} onMouseLeave={()=>setIcontools(false)}>
          <Link href="" className={`w-14 aspect-square flex rounded-full bg-[url('/img/Social/IconRX.webp')] bg-center bg-contain shadow-[0px_5px_10px_1px_rgba(0,0,0,0.6)] ${annimate? 'animate-bounce' : 'animate-ping'}`}> </Link>
          <Link href="" className={`mt-1 mb-5 flex aspect-square rounded-full overflow-hidden bg-[url('/img/Social/IconWA.webp')] bg-center bg-contain shadow-[0px_5px_10px_1px_rgba(0,0,0,0.6)] duration-[500ms] ease-in ${icontools? 'h-12':'h-0'}`}> </Link> 
          <Link href="" className={`my-1 flex aspect-square rounded-full overflow-hidden bg-[url('/img/Social/IconFB.webp')] bg-center bg-contain shadow-[0px_5px_10px_1px_rgba(0,0,0,0.6)] duration-[500ms] ease-in ${icontools? 'h-12':'h-0'}`}> </Link>
          <Link href="" className={`my-1 flex aspect-square rounded-full overflow-hidden bg-[url('/img/Social/IconIG.webp')] bg-center bg-contain shadow-[0px_5px_10px_1px_rgba(0,0,0,0.6)] duration-[500ms] ease-in ${icontools? 'h-12':'h-0'}`}> </Link>
        </div>

        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/design' element={<Design/> }/>
          <Route path='/web' element={ <Web/> }/>
          <Route path='/media' element={<Media/> }/>
          <Route path='/marketing' element={ <Marketing/> }/>
          <Route path='/*' element={<h1> 404 Not Found this page</h1>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
