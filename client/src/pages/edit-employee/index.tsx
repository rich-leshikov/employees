import {Layout} from '../../components/layout'
import React, {useState} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {useEditEmployeeMutation, useGetEmployeeQuery} from '../../app/services/emloyees'
import {Paths} from '../../paths'
import {Row} from 'antd'
import {EmployeeForm} from '../../components/employee-form'
import {Employee} from '@prisma/client'
import {isErrorMessage} from '../../utils/is-error-message'

export const EditEmployee = () => {
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const params = useParams<{ id: string }>()
  const {data, isLoading} = useGetEmployeeQuery(params.id || '')
  const [editEmployee] = useEditEmployeeMutation()

  if (isLoading) {
    return <span>Loading...</span>
  }

  const onEditEmployee = async (employee: Employee) => {
    try {
      const editedEmployee = {
        ...data,
        ...employee
      }

      await editEmployee(editedEmployee).unwrap()
      navigate(`${Paths.status}/updated`)
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
        <EmployeeForm onFinish={onEditEmployee} employee={data} btnText={'Edit'} title={'Edit employee'} error={error}/>
      </Row>
    </Layout>
  )
}