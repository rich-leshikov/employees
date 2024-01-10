import {FC} from 'react'
import {Card, Form, Space} from 'antd'
import {Employee} from '@prisma/client'
import {CustomInput} from '../custom-input'
import {ErrorMessage} from '../error-message'
import {CustomButton} from '../custom-button'
import {PlusCircleOutlined} from '@ant-design/icons'

type Props = {
  onFinish: (values: Employee) => void
  btnText: string
  title: string
  error?: string
  employee?: Employee
}

export const EmployeeForm: FC<Props> = (
  {
    onFinish,
    btnText,
    title,
    error,
    employee
  }
) => {
  return (
    <Card title={title} style={{width: '30rem'}}>
      <Form name={'employee-form'} onFinish={onFinish} initialValues={employee}>
        <CustomInput type={'text'} name={'firstName'} placeholder={'First name'}/>
        <CustomInput type={'text'} name={'lastName'} placeholder={'Last name'}/>
        <CustomInput type={'number'} name={'age'} placeholder={'Age'}/>
        <CustomInput type={'text'} name={'address'} placeholder={'Address'}/>
        <Space>
          <ErrorMessage message={error}/>
          <CustomButton type={'primary'} icon={<PlusCircleOutlined/>} htmlType={'submit'}>{btnText}</CustomButton>
        </Space>
      </Form>
    </Card>
  )
}
