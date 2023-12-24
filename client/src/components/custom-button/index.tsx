import {ComponentPropsWithoutRef, ElementRef, forwardRef, JSX} from 'react'
import {Button, Form} from 'antd'

type CustomButtonProps = ComponentPropsWithoutRef<typeof Button>

export const CustomButton = forwardRef<ElementRef<typeof Button>, CustomButtonProps>((
  {
    className,
    children,
    icon,
    htmlType,
    type,
    shape,
    danger,
    loading,
    onClick
  },
  ref
): JSX.Element => {
  return (
    <Form.Item>
      <Button
        ref={ref}
        className={className}
        icon={icon}
        htmlType={htmlType}
        type={type}
        shape={shape}
        danger={danger}
        loading={loading}
        onClick={onClick}
      >{children}</Button>
    </Form.Item>
  )
})
