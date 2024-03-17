import React from 'react'
import Searchbar from './Searchbar'
import {useSelector} from 'react-redux'

const Header = () => {
  const selected = useSelector(state => state.config.selectedMenu);
  
  return (
    <header className='flex justify-between w-full p-5'>
      <div>
        <div className='font-bold text-xl'>{selected} Movies</div>
      </div>
      <Searchbar/>  
    </header>
  )
}

export default Header