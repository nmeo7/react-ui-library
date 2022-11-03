import { Form, Input } from 'antd'
import React from 'react'

export const InputText = props => {
  return (
    <Form.Item label={props.label} labelCol={{ span: props.span || '6' }} help={props.help} validateStatus={props.status || ''} >
      <Input
        size='large'
        placeholder={props.placeholder || props.label?.toLowerCase()}
        onChange={e => props.onChange(e.target.value)}
        type={(props.password && 'password') || 'text'}
        value={props.value}
        prefix={props.prefix}
        suffix={props.suffix} />
    </Form.Item>
  )
}
