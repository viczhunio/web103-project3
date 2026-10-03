import { pool } from '../config/database.js';

const getLocations = async (req, res) => {
    try {
        const results = await pool.query('SELECT * FROM locations ORDER BY id ASC')
        res.status(200).json(results.rows)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

const getLocationById = async (req, res) => {
    try {
        const id = req.params.id
        const results = await pool.query('SELECT * FROM locations WHERE id = $1', [id])
        const location = results.rows[0]

        if (!location) {
            return res.status(404).json({ error: 'Location not found' })
        }
        res.status(200).json(location)
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export default { getLocations, getLocationById }