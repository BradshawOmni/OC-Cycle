module.exports = {
    ensureAuthenticated: (req, res, next) => {
        if(req.isAuthenticated()) {
            return next();
        } else {
            res.json({
                success: false,
                message: "You are not authenticated"
            });
        }
    }
}