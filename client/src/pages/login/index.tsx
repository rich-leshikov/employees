import {Link} from 'react-router-dom'
import {Card, Form, Row, Space, Typography} from 'antd'
import {Layout} from '../../components/layout'
import {CustomInput} from '../../components/custom-input'
import {PasswordInput} from '../../components/password-input'
import {CustomButton} from '../../components/custom-button'
import {Paths} from '../../paths'

export const Login = () => {
  return (
    <Layout>
      <Row align={'middle'} justify={'center'}>
        <Card title={'Sign In'} style={{width: '30rem'}}>
          <Form onFinish={() => null}>
            <CustomInput type="email" name="email" placeholder="Email"/>
            <PasswordInput name="password" placeholder="Password"/>
            <CustomButton type="primary" htmlType="submit">Sign In</CustomButton>
          </Form>
          <Space direction={'vertical'} size={'large'}>
            <Typography.Text>
              Have no profile? <Link to={Paths.register}>Sign Up</Link>
            </Typography.Text>
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
