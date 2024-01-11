import {useState} from 'react'
import {Navigate, useParams} from 'react-router-dom'
import {useSelector} from 'react-redux'
import {selectUser} from '../../features/auth/authSlice'
import {useGetEmployeeQuery, useRemoveEmployeeMutation} from '../../app/services/emloyees'
import {Paths} from '../../paths'
import {Layout} from '../../components/layout'
import {Descriptions} from 'antd'

export const Employee = () => {
  const [error, setError] = useState('')
  const [isModalOpen, setIsModalOpen] = useState(false)
  const params = useParams<{id: string}>()
  const user = useSelector(selectUser)
  const {data, isLoading} = useGetEmployeeQuery(params.id || '')
  const [removeEmployee] = useRemoveEmployeeMutation()

  if (isLoading) {
    return <span>Loading...</span>
  }

  if (!data) {
    console.log(data)
    return <Navigate to={Paths.home}/>
  }

  return (
    <Layout>
      <Descriptions title={'Employee info'}>
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
    </Layout>
  )
}
