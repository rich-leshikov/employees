const express = require('express')
const router = require('router')
const {auth} = require('../middleware/auth')
const {all} = require('../controllers/employees')

// /api/employees
router.get('/', auth, all)
// /api/employees/:id
router.get('/:id', auth, () => console.log('get single employee'))
// /api/employees/add
router.post('/add', auth, () => console.log('add employee'))
// /api/employees/remove/:id
router.delete('/remove/:id', auth, () => console.log('remove employee'))
// /api/employees/edit/:id
router.put('/edit/:id', auth, () => console.log('update employee'))

module.exports = router