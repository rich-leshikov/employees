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
    res.status(500).json({message: 'Can not get employees'})
  }
}

/**
 *
 * @route POST /api/employees/add
 * @desc Adding an employee
 * @access Private
 */
const add = async (req, res) => {
  const data = req.body

  try {
    if (!data.firstName || !data.lastName || !data.address || !data.age) {
      return res.status(400).json({message: 'All fields require'})
    }

    const employee = await prisma.employee.create({
      data: {
        ...data,
        userId: req.user.id
      }
    })

    return res.status(201).json(employee)
  } catch (err) {
    res.status(500).json({message: 'Something went wrong'})
  }
}

module.exports = {
  all,
  add
}