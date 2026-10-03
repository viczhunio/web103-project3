import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import LocationsAPI from '../services/LocationsAPI'
import '../css/Locations.css'

const Locations = () => {

    const [locations, setLocations] = useState([])
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                const data = await LocationsAPI.getAllLocations()
                setLocations(data)
            } catch (error) {
                console.error(error) 
                setError('Something went wrong loading locations. Please try again.')
            }
        }) ()
    }, [])

    if (error) return <h2 className='status-message'>⚠️ {error}</h2>

    return (
        <div className='available-locations'>
            {locations.map(location => (
                <Link 
                    key={location.id}
                    to={`/locations/${location.id}`}
                    className='orb'
                    title={location.description}
                    style={{ backgroundImage: `url(${location.image}) `}}
                >
                    <span className='orb-label'>{location.name}</span>
                </Link>
            ))}
        </div>
    )
}

export default Locations