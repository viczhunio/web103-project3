import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Event from '../components/Event'
import LocationsAPI from '../services/LocationsAPI'
import EventsAPI from '../services/EventsAPI'
import '../css/LocationEvents.css'

const LocationEvents = () => {
    const { id } = useParams()
    const [location, setLocation] = useState(null)
    const [events, setEvents] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            setLoading(true)
            setError(null)
            try {
                const loc = await LocationsAPI.getLocationById(id)
                setLocation(loc)
                if (loc) setEvents(await EventsAPI.getEventsByLocation(id))
            } catch (err) {
                console.error(err)
                setError('Something went wrong loading this location. Please try again.')
            } finally {
                setLoading(false)
            }
        })()
    }, [id])

    if (loading) return <h2 className='status-message'>Loading...</h2>
    if (error) return <h2 className='status-message'>⚠️ {error}</h2>
    if (!location) return <h2 className='status-message'>👻 That location doesn't exist.</h2>

    return (
        <div className='location-events'>
            <header>
                <div className='location-image'>
                    <img src={location.image} alt={location.name} />
                </div>
                <div className='location-info'>
                    <h2>{location.name}</h2>
                    <p>{location.description}</p>
                </div>
            </header>

            <main>
                {events.length > 0 ? events.map(event =>
                    <Event
                        key={event.id}
                        id={event.id}
                        title={event.title}
                        description={event.description}
                        eventTime={event.event_time}
                        image={event.image}
                    />
                ) : <h2>No events scheduled at this location yet!</h2>}
            </main>
        </div>
    )
}

export default LocationEvents