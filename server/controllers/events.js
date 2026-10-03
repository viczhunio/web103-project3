import { pool } from '../config/database.js';

const getEvents = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM events ORDER BY event_time ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(500).json({ error: error.message }) 
    }
}

const getEventsByLocation = async (req, res) => {
    try {
        const locationId = req.params.id 
        const results = await pool.query('SELECT * FROM events WHERE location_id = $1 ORDER BY event_time ASC', [locationId])
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(500).json({ error: error.message }) 
    }
}

export default { getEvents, getEventsByLocation }