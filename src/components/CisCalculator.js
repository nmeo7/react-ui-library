import React from 'react'
import { grid } from './styles'


export const CisCalculator = (props) => {
    
    return (
        <div style={{ width: props.width || '100%' }} >
            <div>Reward</div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }} >
                <div {...grid} style={{ flex: '1', display: 'grid', gridTemplateColumns: 'auto auto auto auto', aspectRatio: '1' }} >
                    { [1,2,3,'Quantity',4,5,6,'Discount',7,8,9,'Price','+/-',0,'000','C'].map( a => <div style={{  }} >{a}</div> ) }
                </div>
                <div style={{ flex: '1' }} >
                    <div>Customer</div>
                    <div {...grid} style={{ aspectRatio: '1' }} >Payment</div>
                </div>
            </div>
        </div>
    )
}