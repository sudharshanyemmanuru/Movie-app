import React from 'react'

const Pagination = ({pageNumber,forwardCallback,backwardCallback}) => {
  return (
    <div className='text-white text-xl text-center w-full bg-gray-900/60'>
      <div className='px-8 flex space-x-8 items-center' onClick={backwardCallback}><i class="fa-solid fa-arrow-left"></i></div>
      <div className='text-white'>{pageNumber}</div>
      <div className='px-8 flex space-x-8 items-center' onClick={forwardCallback}><i class="fa-solid fa-arrow-right"></i></div>
    </div>
  )
}

export default Pagination