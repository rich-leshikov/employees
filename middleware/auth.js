const {prisma} = require('../prisma/prisma-client')
const jwt = require('jsonwebtoken')

const auth = async (req, res, next) => {
  try {
    let token = req.headers.authorization?.split(' ')[1]

    const decoded = jwt.verify(token, process.env.JWT_SECRET)

    req.user = await prisma.user.findUnique({
      where: {id: decoded.id}
    })

    next()
  } catch(err) {
    res.status(401).json({message: 'You are not authorized'})
  }
}

module.exports = {
  auth
}