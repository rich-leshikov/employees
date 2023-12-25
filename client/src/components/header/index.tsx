import {FC} from 'react'
import {Link} from 'react-router-dom'
import {Layout, Space, Typography} from 'antd'
import {LoginOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons'
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
          <CustomButton type={'ghost'}>
            <Typography.Title level={1}>Employees</Typography.Title>
          </CustomButton>
        </Link>
      </Space>
      <Space>
        <Link to={Paths.register}>
          <CustomButton type={'ghost'} icon={<UserOutlined/>}>Sign Up</CustomButton>
        </Link>
        <Link to={Paths.login}>
          <CustomButton type={'ghost'} icon={<LoginOutlined/>}>Sign In</CustomButton>
        </Link>
      </Space>
    </Layout.Header>
  )
}
