import { Cascader, DatePicker, Form, Input } from 'antd'
import moment from 'moment'
import React from 'react'
import dayjs from 'dayjs'

const { RangePicker } = DatePicker

import customParseFormat from 'dayjs/plugin/customParseFormat'
dayjs.extend(customParseFormat)
const dateFormat = 'DD/MM/YYYY'

export const InputDate = (props) => {
  return (
    <Form.Item label={props.label} labelCol={{ span: '6' }}>
      <DatePicker
        size='large'
        label={props.label}
        onChange={(_, value) =>
          props.name
            ? props.handleChange({ name: props.name, value })
            : props.onChange(value)
        }
        value={props.value ? dayjs(props.value) : dayjs()}
      />
    </Form.Item>
  )
}
