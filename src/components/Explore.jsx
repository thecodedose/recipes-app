import { useState } from "react"

const searches = [
  {
    imgSrc: "1.jpg",
    title: "Samosa",
  },
  {
    imgSrc: "1.jpg",
    title: "Pizza",
  },
  {
    imgSrc: "1.jpg",
    title: "Pasta",
  },
  {
    imgSrc: "1.jpg",
    title: "Samosa",
  },
  {
    imgSrc: "1.jpg",
    title: "Pizza",
  },
  {
    imgSrc: "1.jpg",
    title: "Pasta",
  },
]

function Explore() {
  const searchElements = searches.map(({ imgSrc, title }) => (
    <div className='w-1/4 p-2'>
      <img src={imgSrc} className='w-full rounded-full' />
      <p className='text-center'>{title}</p>
    </div>
  ))
  return (
    <div className='w-full flex flex-col items-center justify-center mt-5'>
      <input
        className='bg-white px-4 py-2 w-1/2 border border-indigo-800 rounded-full'
        placeholder='Know what you want? Search it!'
      ></input>
      <div className='grid grid-cols-3'>{searchElements}</div>
    </div>
  )
}

export default Explore
