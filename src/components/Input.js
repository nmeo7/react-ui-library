import React from 'react'
import { Cascader } from './Cascader'
import { InputCurrency } from './InputCurrency'
import { InputDate } from './InputDate'
import { InputRadio } from './InputRadio'
import { InputRange } from './InputRange'
import { InputSelect } from './InputSelect'
import { InputText } from './InputText'

// import './assets/styles.css'

export const Input = ({ type, ...props }) =>
  ({
    text: <InputText {...props} />,
    currency: <InputCurrency {...props} />,
    date: <InputDate {...props} />,
    location: <Cascader {...props} />,
    time_range: <InputRange {...props} />,
    select: <InputSelect {...props} />,
    radio: <InputRadio {...props} />
  }[type] || <InputText {...props} />)
