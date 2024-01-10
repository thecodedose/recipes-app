import { useState } from "react"
import imgUrl from "../assets/Samosa.webp"
import { FireIcon, StarIcon, HeartIcon } from "@heroicons/react/24/solid"

// Star -> Vegan
// Heart -> Vegetarian
// Fire -> Spicy

const searches = [
  {
    id: 1,
    imgSrc: imgUrl,
    title: "Samosa",
    spicy: true,
    vegetarian: true,
    vegan: true,
  },
  {
    imgSrc: imgUrl,
    title: "V Pizza",
    spicy: true,
    vegetarian: true,
    vegan: false,
  },
  {
    imgSrc: imgUrl,
    title: "NV Pasta",
    spicy: true,
    vegetarian: false,
    vegan: false,
  },
  {
    imgSrc: imgUrl,
    title: "Samosa",
    spicy: true,
    vegetarian: true,
    vegan: true,
  },
  {
    imgSrc: imgUrl,
    title: "NV Pizza",
    spicy: false,
    vegetarian: false,
    vegan: false,
    type: '',
    ingredients: [],
  },
  {
    imgSrc: imgUrl,
    title: "V Pasta",
    spicy: false,
    vegetarian: true,
    vegan: true,
  },
]

const FILTERS = ["Spicy", "Vegetarian", "Vegan"]

function Explore() {
  const [selectedFilter, setSelectedFilter] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const searchElements = searches
    .filter(({ spicy, vegetarian, vegan }) => {
      if (selectedFilter === "") {
        return true
      } else if (selectedFilter === "Spicy") {
        return spicy
      } else if (selectedFilter === "Vegetarian") {
        return vegetarian
      } else if (selectedFilter === "Vegan") {
        return vegan
      }
    })
    .filter(({ title }) => title.toLowerCase().includes(searchTerm.toLowerCase()))
    .map(({ imgSrc, title, spicy, vegetarian, vegan }, index) => (
      <div className='p-5 border border-indigo-800' key={index}>
        <img src={imgSrc} className='w-full w-36' />
        <p className='text-center'>{title}</p>
        <div className='flex gap-2'>
          {spicy && <FireIcon className='w-10'></FireIcon>}
          {vegetarian && <HeartIcon className='w-10'></HeartIcon>}
          {vegan && <StarIcon className='w-10'></StarIcon>}
        </div>
      </div>
    ))

  return (
    <div className='w-full flex flex-col items-center justify-center mt-5'>
      <input
        className='bg-white px-4 py-2 w-1/2 border border-indigo-800 rounded-full'
        placeholder='Know what you want? Search it!'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      ></input>
      <div className='flex gap-5'>
        {FILTERS.map((filter) => (
          <button
            className={`border border-indigo-800 rounded-full py-1 px-3 my-5 ${
              selectedFilter === filter ? "bg-indigo-800 text-white" : ""
            }`}
            onClick={() => setSelectedFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>
      <div className='grid grid-cols-3 gap-5'>{searchElements}</div>
    </div>
  )
}

export default Explore
