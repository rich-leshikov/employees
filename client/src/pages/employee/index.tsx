import {useState} from 'react'
import {Link, Navigate, useNavigate, useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/auth/authSlice'
import {useGetEmployeeQuery, useRemoveEmployeeMutation} from '../../app/services/emloyees'
import {Paths} from '../../paths'
import {Layout} from '../../components/layout'
import {Descriptions, Divider, Modal, Space} from 'antd'
import {CustomButton} from '../../components/custom-button'
import {DeleteOutlined, EditOutlined} from '@ant-design/icons'
import {ErrorMessage} from '../../components/error-message'
import {isErrorMessage} from '../../utils/is-error-message'

export const Employee = () => {
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const params = useParams<{ id: string }>()
  const navigate = useNavigate()
  const user = useSelector(selectUser)
  const {data, isLoading} = useGetEmployeeQuery(params.id || '')
  const [removeEmployee] = useRemoveEmployeeMutation()

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (!data) {
    return <Navigate to={Paths.home}/>
  }

  const onShowModal = () => setIsModalOpen(true)
  const onHideModal = () => setIsModalOpen(false)
  const onRemoveEmployee = async () => {
    onHideModal()

    try {
      await removeEmployee(data.id).unwrap()
      navigate(`${Paths.status}/deleted`)
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
      <Descriptions title={'Employee info'} bordered>
        <Descriptions.Item label={'Name'} span={3}>
          {`${data.firstName} ${data.lastName}`}
        </Descriptions.Item>
        <Descriptions.Item label={'Age'} span={3}>
          {data.age}
        </Descriptions.Item>
        <Descriptions.Item label={'Address'} span={3}>
          {data.address}
        </Descriptions.Item>
      </Descriptions>
      {
        user?.id === data.userId && (
          <>
            <Divider orientation={'left'}>Actions</Divider>
            <Space>
              <Link to={`${Paths.employeeEdit}/${data.id}`}>
                <CustomButton shape={'round'} type={'default'} icon={<EditOutlined/>}>Edit</CustomButton>
              </Link>
              <CustomButton shape={'round'} danger onClick={onShowModal} icon={<DeleteOutlined/>}>Delete</CustomButton>
            </Space>
          </>
        )
      }
      <ErrorMessage message={error}/>
      <Modal
        title={'Confirm the deletion'}
        open={isModalOpen}
        onOk={onRemoveEmployee}
        onCancel={onHideModal}
        okText={'Confirm'}
        cancelText={'Cancel'}
      >Are you sure to delete the employee from the table?</Modal>
    </Layout>
  )
}
