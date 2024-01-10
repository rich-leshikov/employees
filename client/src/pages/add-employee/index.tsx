import React, {useEffect, useState} from 'react'
import {Layout} from '../../components/layout'
import {Row} from 'antd'
import {EmployeeForm} from '../../components/employee-form'
import {useNavigate} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/auth/authSlice'
import {useAddEmployeeMutation} from '../../app/services/emloyees'
import {Paths} from '../../paths'
import {Employee} from '@prisma/client'
import {isErrorMessage} from '../../utils/is-error-message'

export const AddEmployee = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const [addEmployee] = useAddEmployeeMutation()

  useEffect(() => {
    if (!user) {
      navigate(Paths.login)
    }
  }, [user])

  const onAddEmployee = async (data: Employee) => {
    try {
      await addEmployee(data).unwrap()
      navigate(`${Paths.status}/created`)
    } catch (err) {
      const maybeError = isErrorMessage(err)

      if (maybeError) {
        setError(err.data.message)
      } else {
        setError('Unknown error')
      }
    }
  }

  return (
    <Layout>
      <Row align={'middle'} justify={'center'}>
        <EmployeeForm onFinish={onAddEmployee} btnText={'Add'} title={'Add employee'} error={error}/>
      </Row>
    </Layout>
  )
}
