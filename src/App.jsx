import { useState } from "react"
import "./App.css"
import Sidebar from "./components/Sidebar"
import Header from "./components/Header"
import SearchResults from "./components/SearchResults"

function App() {
  return (
    <div className='text-indigo-800'>
      <Header />
      <Sidebar />
      <SearchResults />
    </div>
  )
}

export default App
