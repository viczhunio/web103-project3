import React, { useState, useEffect } from 'react'
import EventsAPI from '../services/EventsAPI'
import LocationsAPI from '../services/LocationsAPI'

const Events = () => {
    const [events, setEvents] = useState([])
    const [locations, setLocations] = useState([])
    const [selected, setSelected] = useState('all')
    const [error, setError] = useState(null)

    useEffect(() => {
        (async () => {
            try {
                setEvents(await EventsAPI.getAllEvents())
                setLocations(await LocationsAPI.getAllLocations())
            } catch (error) {
                console.error(error)
                setError('Something went wrong loading events. Please try again.')
            }
        })()
    }, [])

    if (error) return <h2 className='status-message'>⚠️ {error}</h2>

    const shown = selected === 'all'
        ? events
        : events.filter(e => e.location_id === Number(selected))

    return (
        <div style={{ padding: '20px 40px', position: 'relative', zIndex: 1 }}>
            <h2>All Events</h2>

            <select value={selected} onChange={e => setSelected(e.target.value)}>
                <option value='all'>All locations</option>
                {locations.map(l => (
                    <option key={l.id} value={l.id}>{l.name}</option>
                ))}
            </select>

            {shown.map(event => (
                <div key={event.id} style={{ margin: '20px 0' }}>
                    <h3>{event.title}</h3>
                    <p>{new Date(event.event_time).toLocaleString()}</p>
                    <p>{event.description}</p>
                </div>
            ))}
        </div>
    )
}

export default Events