// import { useState } from 'react'

import './App.sass'
import { SideBar } from './components/Side_bar/index'
import { Header } from './components/Header/index'
import { Header_mobile } from './components/Header_mobile/index'
import { Content } from './components/Content/index'
import './DefaultSass/grid.sass';


function App() {

  return (
    <div className="container">
      <div className="menu grid-2 grid-0-sm">
        <SideBar className="miss-md"/>
      </div>
      <div className="grid-10 grid-12-sm">
        <Header />
        <Header_mobile/>
        <Content>

        </Content>
      </div>
        
      
    </div>
  )
}

export default App
