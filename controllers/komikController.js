const { Komik } = require('../models');

// Get all komik
exports.getAllKomik = async (req, res) => {
    try {
        const komik = await Komik.findAll();

        res.status(200).json({
            success: true,
            data: komik
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Get komik by ID
exports.getKomikById = async (req, res) => {
    try {
        const komik = await Komik.findByPk(req.params.id);

        if (!komik) {
            return res.status(404).json({
                success: false,
                message: 'Komik not found'
            });
        }

        res.status(200).json({
            success: true,
            data: komik
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

// Create new komik
exports.createKomik = async (req, res) => {
    try {
        const komik = await Komik.create(req.body);

        res.status(201).json({
            success: true,
            data: komik
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Update komik
exports.updateKomik = async (req, res) => {
    try {
        const komik = await Komik.findByPk(req.params.id);

        if (!komik) {
            return res.status(404).json({
                success: false,
                message: 'Komik not found'
            });
        }

        await komik.update(req.body);

        res.status(200).json({
            success: true,
            data: komik
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message
        });
    }
};

// Delete komik
exports.deleteKomik = async (req, res) => {
    try {
        const komik = await Komik.findByPk(req.params.id);

        if (!komik) {
            return res.status(404).json({
                success: false,
                message: 'Komik not found'
            });
        }

        await komik.destroy();

        res.status(200).json({
            success: true,
            message: 'Komik deleted successfully'
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};