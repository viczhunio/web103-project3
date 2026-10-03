import React from 'react'
import { useRoutes, Link } from 'react-router-dom'
import Locations from './pages/Locations'
import LocationEvents from './pages/LocationEvents'
import Events from './pages/Events'
import './App.css'

const App = () => {
  let element = useRoutes([
    {
      path: '/', 
      element: <Locations />
    },
    {
      path: '/locations/:id',
      element: <LocationEvents />
    },
    {
      path: '/events',
      element: <Events />
    }
    
  ])

  return (
    <div className='app'>
      <span className='ghost' style={{ top: '15%', left: '5%' }}>👻</span>
      <span className='ghost' style={{ top: '60%', left: '85%', animationDelay: '-4s' }}>👻</span>
      <span className='ghost' style={{ top: '75%', left: '15%', animationDelay: '-8s' }}>👻</span>
      <span className='ghost' style={{ top: '30%', left: '70%', animationDelay: '-2s' }}>👻</span>

      <header className='main-header'>
        <h1>Spooky Space</h1>

        <div className='header-buttons'>
          <Link to='/' role='button'>Home</Link>
          <Link to='/events' role='button'>Events</Link>
        </div>
      </header>

      <main>
        {element}
      </main>
    </div>
  )
}

export default App