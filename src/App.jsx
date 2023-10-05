import React from 'react'
import Invoice from './components/invoices/Invoice'
import Navbar from "./components/navbar/Navbar"
import Sidebar from "./components/sidebar/Sidebar"
import "./index.scss"

const App = () => {
  return (
    <div>
      <Navbar/>
        <div className='main'>
          <Sidebar/>
          <Invoice/>
        </div>
    </div>
  )
}

export default App
