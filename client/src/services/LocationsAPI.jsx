const getAllLocations = async () => {
    const response = await fetch('/api/locations')
    if (!response.ok) throw new Error(`Could not load locations (status ${response.status})`)
    return await response.json()
}

const getLocationById = async (id) => {
    const response = await fetch(`/api/locations/${id}`)
    if (response.status === 404) return null   // "not found" is not an error
    if (!response.ok) throw new Error(`Could not load location (status ${response.status})`)
    return await response.json()
}

export default { getAllLocations, getLocationById }