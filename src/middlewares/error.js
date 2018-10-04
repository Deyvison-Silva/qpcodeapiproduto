exports.notFound = (req, res) => {
    res.status(404).json({ "error": "A página digitada não foi encontrada." })
};