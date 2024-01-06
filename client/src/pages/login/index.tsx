import {useState} from 'react'
import {Link} from 'react-router-dom'
import {Card, Form, Row, Space, Typography} from 'antd'
import {Layout} from '../../components/layout'
import {CustomInput} from '../../components/custom-input'
import {PasswordInput} from '../../components/password-input'
import {CustomButton} from '../../components/custom-button'
import {Paths} from '../../paths'
import {useLoginMutation, UserData} from '../../app/services/auth'
import {isErrorMessage} from '../../utils/is-error-message'
import {ErrorMessage} from '../../components/error-message'

export const Login = () => {
  const [loginUser, loginUserResult] = useLoginMutation()
  const [error, setError] = useState('')

  const login = async (data: UserData) => {
    try {
      await loginUser(data).unwrap()
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
        <Card title={'Sign In'} style={{width: '30rem'}}>
          <Form onFinish={login}>
            <CustomInput type="email" name="email" placeholder="Email"/>
            <PasswordInput name="password" placeholder="Password"/>
            <CustomButton type="primary" htmlType="submit">Sign In</CustomButton>
          </Form>
          <Space direction={'vertical'} size={'large'}>
            <Typography.Text>
              Have no profile? <Link to={Paths.register}>Sign Up</Link>
            </Typography.Text>
            <ErrorMessage message={error}/>
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}

