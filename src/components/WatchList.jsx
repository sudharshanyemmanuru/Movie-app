import React, { useState } from 'react'
import WatchListedMovie from './WatchListedMovie'

const WatchList = ({addedMovies}) => {
  const[search,setSearch]=useState('')
  let searchHandler=(e)=>{
    setSearch(e.target.value.toLowerCase())
  }
  return (
    <>
      <div className='flex justify-center my-4'>
        <input type="text" className='w-[28rem] h-[3rem] bg-gray-200 outline-none' placeholder='Search movie' onChange={searchHandler}/>
      </div>
      <div className='border border-black-200 m-4 rounded-lg'>
        <table className='w-full text-center text-black'>
          <thead className='border-b-2'>
              <tr>
                <th>Name</th>
                <th>Rating</th>
                <th>Popularity</th>
                <th>Genere</th>
              </tr>
          </thead>
          <tbody>
            {addedMovies.filter(
              (m)=> m.original_title.toLowerCase().includes(search)
            ).map((m)=>{
              return(<WatchListedMovie movie={m}/>)
            })
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList