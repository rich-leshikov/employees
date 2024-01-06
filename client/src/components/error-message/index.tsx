import React from 'react'
import {Alert} from 'antd'

type ErrorMessageProps = {
  message?: string
}

export const ErrorMessage = ({message}: ErrorMessageProps) => {
  if (!message) {
    return null
  }

  return <Alert message={message} type={'error'}/>
}
