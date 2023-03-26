import { Cascader as AntCascader, Form, Input } from 'antd'
import React from 'react'

export const Cascader = (props) => {
  return (
    <Form.Item label={props.label} labelCol={{ span: '6' }}>
      <AntCascader
        size='large'
        options={props.options}
        label={props.label}
        onChange={(v) => props.onChange((v = v.join(' / ')))}
        value={('' + props.value).split(' / ')}
        id={props.id}
      />
    </Form.Item>
  )
}
