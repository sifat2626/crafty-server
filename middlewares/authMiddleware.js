const jwt = require('jsonwebtoken')

exports.verifyToken = (req, res, next) => {
    const token = req.cookies?.token
    console.log(token)
    if(!token) return res.status(400).send({message:"Unauthorized access ",token})
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
        if(err) return res.status(403).send({message:"Unauthorized access"})
        req.user = decoded
        next()

    })
    // next()
}