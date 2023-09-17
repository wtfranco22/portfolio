const contactController = require('../controllers/contactController');

module.exports = async (req, res) => {
    try {
        const { name, email, message } = req.body
        const response = await contactController({ name, email, message });
        return res.status(200).json(response);
    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
}