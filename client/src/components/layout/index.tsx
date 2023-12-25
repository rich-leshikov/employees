import {FC, ReactNode} from 'react'
import {Layout as AntLayout} from 'antd'
import s from './index.module.css'
import {Header} from '../header'

type LayoutProps = {
  children: ReactNode
}

export const Layout: FC<LayoutProps> = ({children}) => {
  return (
    <div className={s.main}>
      <Header/>
      <AntLayout.Content style={{height: '100%'}}>
        {children}
      </AntLayout.Content>
    </div>
  )
}
