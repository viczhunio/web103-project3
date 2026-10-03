const getAllEvents = async () => {
    const response = await fetch('/api/events')
    if (!response.ok) throw new Error(`Could not load events (status ${response.status})`)
    return await response.json()
}

const getEventsByLocation = async (locationId) => {
    const response = await fetch(`/api/locations/${locationId}/events`)
    if (!response.ok) throw new Error(`Could not load events (status ${response.status})`)
    return await response.json()
}

export default { getAllEvents, getEventsByLocation }