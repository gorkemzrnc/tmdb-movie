import React from 'react'
import Logo from '../components/Logo.jsx'
import Genres from './Genres.jsx';

 
const Sidebar = () => {
  return (
    <div className='flex flex-col w-48 min-w-48 h-full border-r-[1px] border-slate-400 fixed left-0 top-0 bg-white'>
      <Logo/>
      <Genres/>
    </div>
  )
}

export default Sidebar