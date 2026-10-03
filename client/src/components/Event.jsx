import React, { useState, useEffect } from 'react'
import '../css/Event.css'

const getRemaining = (eventTime) => {
    const diff = new Date(eventTime) - new Date()
    const abs = Math.abs(diff) 
    const days = Math.floor(abs / 86400000) 
    const hours = Math.floor(abs / 3600000) % 24
    const minutes = Math.floor(abs / 60000) % 60
    const seconds = Math.floor(abs / 1000) % 60
    return { past: diff < 0, text: `${days}d ${hours}h ${minutes}m ${seconds}s` }
}

const Event = ({ title, description, eventTime, image }) => {

    const [remaining, setRemaining] = useState(getRemaining(eventTime))

    useEffect(() => {
        const timer = setInterval(() => setRemaining(getRemaining(eventTime)), 1000)
        return () => clearInterval(timer)
    }, [eventTime])

    return (
        <article className={`event-information ${remaining.past ? 'event-past' : ''}`}>
            {image && <img src={image} alt={title} />}

            <div className='event-text'>
                <h3>{title}</h3>
                <p className='event-date'>📅 {new Date(eventTime).toLocaleString()}</p>
                <p>{description}</p>
                <p className='event-countdown'>
                    {remaining.past ? `Event passed ${remaining.text} ago` : `Starts in ${remaining.text}`}
                </p>
            </div>
        </article>
    )
}

export default Event