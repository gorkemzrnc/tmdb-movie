import React from 'react'

const Container = ({children}) => {
  return (
    <div className='h-full w-full p-3 flex flex-wrap justify-between'>
      {children}
    </div>
  )
}

export default Container