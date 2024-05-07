const jwt = require('jsonwebtoken')
exports.jwt = async (req, res) => {
    try{
        const token = jwt.sign(
            req.body,
            process.env.JWT_SECRET,
            {expiresIn: process.env.JWT_EXPIRES})
        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',

        })
                .send({success:true})
    }catch (error){
        res.status(400).json({
            message: error.message,
        })
    }
}