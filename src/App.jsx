import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Dashboard from './components/Dashboard';
import Header from './components/Header';
import Sidebar from './components/Sidebar';

function App() {
 

  return (
    <>
    <div className="flex bg-black font-outfit ">
      <Sidebar />
      <div className="flex flex-col">
        <Header />
        <Dashboard />
      </div>
    </div>
    </>
  )
}

export default App
