// import { useState } from 'react'
import './App.sass'
import { SideBar } from './components/Side_bar/SideBar'
import { Header } from './components/Header/Header'


function App() {

  return (
    <div className="container">
      <SideBar/>
      <Header/>
    </div>
  )
}

export default App
