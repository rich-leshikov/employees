import {FC} from 'react'
import {Link} from 'react-router-dom'
import {Layout, Space, Typography} from 'antd'
import {TeamOutlined} from '@ant-design/icons'
import s from './index.module.css'
import {CustomButton} from '../custom-button'
import {Paths} from '../../paths'

type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Layout.Header className={s.header}>
      <Space>
        <TeamOutlined className={s.teamIcon}/>
        <Link to={Paths.home}>
          <CustomButton type={'link'}>
            <Typography.Title level={1}>Employees</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <CustomButton type={'link'}>Sign Up</CustomButton>
        </Link>
        <Link to={Paths.login}>
          <CustomButton type={'link'}>Sign In</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  )
}
