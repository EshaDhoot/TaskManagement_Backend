export const validateRegisterUserAuth = (req, res, next) => {
    if(!req.body.name || !req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            error: 'Please fill all the required fields'
        });
    }
      next();
}

export const validateLoginUserAuth = (req, res, next) => {
    if(!req.body.email || !req.body.password) {
        return res.status(400).json({
            success: false,
            data: {},
            message: 'Something went wrong',
            error: 'Please fill all the required fields'
        });
    }
      next();
}

