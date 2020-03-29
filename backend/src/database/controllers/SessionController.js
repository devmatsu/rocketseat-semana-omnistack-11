const connection = require('../connection');

module.exports = {
    async store (req, res) {
        const { id } = req.body;

        if (!id) return res.status(400).json({ error: 'Missing ID' });

        const ong = await connection('ongs')
          .where('id', id)
          .select('name')
          .first();

        if (!ong) {
            return res.status(400).json({ error: 'No ONG found with this ID' })
        }

        return res.json(ong);
    }
}