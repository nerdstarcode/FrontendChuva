// import { useState } from 'react'

import './App.sass'
import { SideBar } from './components/Side_bar/SideBar'
import { Header } from './components/Header/Header'
import { Content } from './components/Content/Content'
import './DefaultSass/grid.sass';


function App() {

  return (
    <div className="container">
      <div className="grid-2">
        <SideBar/>
      </div>
      <div className="grid-10">
        <Header/>
        <Content>
  
        </Content>
      </div>
        
      
    </div>
  )
}

export default App
