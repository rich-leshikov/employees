import {FC} from 'react'
import {Layout, Space, Typography, Button} from 'antd'
import {TeamOutlined} from '@ant-design/icons'
import s from './index.module.css'

type HeaderProps = {}

export const Header: FC<HeaderProps> = () => {
  return (
    <Layout.Header className={s.header}>
      <Space>
        <Typography>
          <TeamOutlined className={s.teamIcon}/>
          <Button type={'link'}>Click</Button>

        </Typography>
      </Space>
    </Layout.Header>
  )
}
