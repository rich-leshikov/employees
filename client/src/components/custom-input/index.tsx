import {ComponentPropsWithoutRef, ElementRef, forwardRef, JSX} from 'react'
import {Form, Input} from 'antd'

type CustomInputProps = ComponentPropsWithoutRef<typeof Input>

export const CustomInput = forwardRef<ElementRef<typeof Input>, CustomInputProps>((
  {
    name,
    placeholder,
    size = 'large',
    type = 'text',
  }
): JSX.Element => {
  return (
    <Form.Item
      name={name}
      rules={[{required: true, message: 'Required field'}]}
      shouldUpdate={true}
    >
      <Input
        placeholder={placeholder}
        type={type}
        size={size}
      />
    </Form.Item>
  )
})
