import React from 'react'
import {Layout} from '../../components/layout'
import {Card, Form, Row, Space, Typography} from 'antd'
import {CustomInput} from '../../components/custom-input'
import {PasswordInput} from '../../components/password-input'
import {CustomButton} from '../../components/custom-button'
import {Link} from 'react-router-dom'
import {Paths} from '../../paths'

export const Register = () => {
  return (
    <Layout>
      <Row align={'middle'} justify={'center'}>
        <Card title={'Sign Up'} style={{width: '30rem'}}>
          <Form onFinish={() => null}>
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
          </Space>
        </Card>
      </Row>
    </Layout>
  )
}
