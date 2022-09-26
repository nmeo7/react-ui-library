import React from 'react'
import { Cascader } from './Cascader'
import { InputCurrency } from './InputCurrency'
import { InputRange } from './InputRange'
import { InputText } from './InputText'

// import './assets/styles.css'

export const Input = ({ type, ...props }) => ({
        text: <InputText {...props}/>,
        currency: <InputCurrency {...props}/>,
        time: <InputText {...props}/>,
        location: <Cascader {...props}/>,
        time_range: <InputRange {...props}/>
    })[type] || <InputText {...props}/>