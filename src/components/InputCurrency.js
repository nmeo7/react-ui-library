import { Form, Input, InputNumber } from 'antd'
import React from 'react'
import { formatCurrency } from '../services/formatNumber';

export const InputCurrency = props => {
  return (
    <Form.Item  label={ props.label || 'Enter Requested Amount' } labelCol={{ span: 6 }} help={props.help} validateStatus={props.valid || 'error'}>
        <InputNumber
            status={ props.validate && props.validate () }
            step={props.step || 1000000} 
            placeholder={ props.placeholder || props.label || 'Enter Requested Amount' } 
            onChange={ value => { console.log(value); props.onChange(formatCurrency(value))} } // m => setRequested_amount(('' + (m || 0)).replace(/\B(?=(\d{3})+(?!\d))/g, ',')) } 
            value={ props.value }
            formatter={value => `${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
            parser={value => value.replace(/\$\s?|(,*)/g, '')}
            prefix={props.prefix}
            suffix={props.suffix} />
    </Form.Item>
    )
}
