import {FC} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import {useDispatch, useSelector} from 'react-redux'
import {Layout, Space, Typography} from 'antd'
import {LoginOutlined, TeamOutlined, UserOutlined} from '@ant-design/icons'
import {CustomButton} from '../custom-button'
import {Paths} from '../../paths'
import {logout, selectUser} from '../../features/auth/authSlice'
import s from './index.module.css'

export const Header: FC = () => {
  const user = useSelector(selectUser)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const onLogout = () => {
    dispatch(logout())
    localStorage.removeItem('token')
    navigate('/login')
  }

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
      {
        user ? (
          <CustomButton
            type={'ghost'}
            icon={<LoginOutlined/>}
            onClick={onLogout}
          >Log out</CustomButton>
        ) : (
          <Space>
            <Link to={Paths.register}>
              <CustomButton type={'ghost'} icon={<UserOutlined/>}>Sign Up</CustomButton>
            </Link>
            <Link to={Paths.login}>
              <CustomButton type={'ghost'} icon={<LoginOutlined/>}>Sign In</CustomButton>
            </Link>
          </Space>
        )
      }
    </Layout.Header>
  )
}
