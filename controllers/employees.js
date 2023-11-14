const {prisma} = require('../prisma/prisma-client')

/**
 *
 * @route GET /api/employees
 * @desc Getting all employees
 * @access Private
 */
const all = async (req, res) => {
  try {
    const employees = await prisma.employee.findMany()

    res.status(200).json(employees)
  } catch (err) {
    res.status(400).json({message: 'Can not get employees'})
  }
}

module.exports = {
  all
}