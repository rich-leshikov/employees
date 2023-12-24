import {FC, ReactNode} from 'react'
import {Layout as AntLayout} from 'antd'
import s from './index.module.css'

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={s.main}>
      <AntLayout.Content style={{height: '100%'}}>
        {children}
      </AntLayout.Content>
    </div>
  )
}
