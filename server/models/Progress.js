const pool = require('../config/db');

class Progress {
    static async create(progressData) {
        const [result] = await pool.execute(
            'INSERT INTO progress (application_id, milestone, status, completion_date) VALUES (?, ?, ?, ?)',
            [
                progressData.application_id,
                progressData.milestone,
                progressData.status,
                progressData.completion_date
            ]
        );
        return result.insertId;
    }

    static async findByApplicationId(applicationId) {
        const [rows] = await pool.execute(
            'SELECT * FROM progress WHERE application_id = ? ORDER BY completion_date',
            [applicationId]
        );
        return rows;
    }

    static async updateStatus(id, status) {
        await pool.execute(
            'UPDATE progress SET status = ?, completion_date = ? WHERE id = ?',
            [status, new Date(), id]
        );
    }

    static async addFeedback(progressId, feedback) {
        await pool.execute(
            'UPDATE progress SET feedback = ? WHERE id = ?',
            [feedback, progressId]
        );
    }
}

module.exports = Progress; 