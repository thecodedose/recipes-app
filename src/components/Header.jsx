import { useState } from "react"
import Explore from "./Explore"
import ExploreRegion from "./ExploreRegion"
import SetMenu from "./SetMenu"

const tabs = ["Explore", "Explore Region", "Set Menu"]

function Header() {
  const [tabSelected, setTabSelected] = useState(0)

  let selectedView = <Explore></Explore>

  if (tabSelected === 1) {
    selectedView = <ExploreRegion></ExploreRegion>
  } else if (tabSelected === 2) {
    selectedView = <SetMenu></SetMenu>
  }

  return (
    <div className='flex flex-col justify-center w-full items-center mt-10'>
      <h1 className='text-2xl'>Recipes</h1>
      <div className='flex gap-10'>
        {tabs.map((tab, index) => (
          <button
            className={
              tabSelected === index
                ? "border-b-4 borde border-indigo-800"
                : "border-b-4 borde border-orange-100"
            }
            onClick={() => setTabSelected(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className='w-full'>{selectedView}</div>
    </div>
  )
}

export default Header
