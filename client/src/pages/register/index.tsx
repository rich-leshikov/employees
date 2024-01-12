import React, {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {Card, Form, Row, Space, Typography} from 'antd'
import {Paths} from '../../paths'
import {UserData, useRegisterMutation} from '../../app/services/auth'
import {Layout} from '../../components/layout'
import {CustomInput} from '../../components/custom-input'
import {PasswordInput} from '../../components/password-input'
import {CustomButton} from '../../components/custom-button'
import {ErrorMessage} from '../../components/error-message'
import {isErrorMessage} from '../../utils/is-error-message'

export const Register = () => {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [registerUser] = useRegisterMutation()

  const register = async (data: UserData) => {
    try {
      await registerUser(data).unwrap()
      navigate(Paths.home)
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
        <Card title={'Sign Up'} style={{width: '30rem'}}>
          <Form onFinish={register}>
            <CustomInput name={'name'} placeholder={'Name'}/>
            <CustomInput type={'email'} name={'email'} placeholder={'Email'}/>
            <PasswordInput name={'password'} placeholder={'Password'}/>
            <PasswordInput name={'confirmPassword'} placeholder={'Confirm your password'}/>
            <CustomButton type={'primary'} htmlType={'submit'}>Sign Up</CustomButton>
          </Form>
          <Space direction={'vertical'} size={'large'}>
            <Typography.Text>
              Have already registered? <Link to={Paths.login}>Sign In</Link>
            </Typography.Text>
            <ErrorMessage message={error}/>
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
