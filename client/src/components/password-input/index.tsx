import {ComponentPropsWithoutRef, ElementRef, forwardRef, JSX} from 'react'
import {Form, Input} from 'antd'
import {NamePath} from 'antd/es/form/interface'

type PasswordInputProps = {
  dependencies?: NamePath[]
} & ComponentPropsWithoutRef<typeof Input>

export const PasswordInput = forwardRef<ElementRef<typeof Input>, PasswordInputProps>((
  {
    name,
    placeholder,
    dependencies
  }
): JSX.Element => {
  return (
    <Form.Item
      name={name}
      dependencies={dependencies}
      hasFeedback
      rules={[{
        required: true,
        message: 'Required field'
      }, ({getFieldValue}) => ({
        validator(_, value) {
          if (!value) {
            return Promise.resolve()
          }

          if (name === 'confirmPassword') {
            if (!value || getFieldValue(('password')) === value) {
              return Promise.resolve()
            }

            return Promise.reject(new Error('Passwords should be matched'))
          } else {
            if (value.length < 6) {
              return Promise.reject(new Error('Password length should be 6 or longer'))
            }

            return Promise.resolve()
          }
        }
      })]}
    >
      <Input.Password placeholder={placeholder} size="large"/>
    </Form.Item>
  )
})
