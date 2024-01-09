import {useNavigate} from 'react-router-dom'
import {Table} from 'antd'
import type {ColumnsType} from 'antd/es/table'
import {PlusCircleOutlined} from '@ant-design/icons'
import {Employee} from '@prisma/client'
import {Paths} from '../../paths'
import {useGetAllEmployeesQuery} from '../../app/services/emloyees'
import {Layout} from '../../components/layout'
import {CustomButton} from '../../components/custom-button'

const columns: ColumnsType<Employee> = [{
  title: 'Name',
  dataIndex: 'firstName',
  key: 'firstName'
}, {
  title: 'Age',
  dataIndex: 'age',
  key: 'age'
}, {
  title: 'Address',
  dataIndex: 'address',
  key: 'address'
}]

export const Employees = () => {
  const navigate = useNavigate()
  const {data, isLoading} = useGetAllEmployeesQuery()

  return (
    <Layout>
      <CustomButton type={'primary'} onClick={() => null} icon={<PlusCircleOutlined/>}>
        Add employee
      </CustomButton>
      <Table
        loading={isLoading}
        dataSource={data}
        pagination={false}
        columns={columns}
        rowKey={record => record.id}
        onRow={record => {
          return {
            onClick: () => navigate(`${Paths.employee}/${record.id}`)
          }
        }}
      />
    </Layout>
  )
}
