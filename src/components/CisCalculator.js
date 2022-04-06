import React from 'react'
import { grid } from './styles'


export const CisCalculator = (props) => {
    
    return (
        <div style={{ width: props.width || 'calc(100%)', borderTop: '1px solid black', borderRight: '1px solid black', padding: '16px 0 0 0' }} >
            <div>Reward</div>
            <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'stretch' }} >
                <div {...grid} style={{ flex: '1', display: 'grid', gridTemplateColumns: '25% 25% 25% 25%', aspectRatio: '1' }} >
                    { [1,2,3,'Quantity',4,5,6,'Discount',7,8,9,'Price','+/-',0,'000','C'].map( a => <div style={{ width: '100%', height: '100%', display: 'grid', placeContent: 'center' }} >{a}</div> ) }
                </div>
                <div style={{ flex: '1' }} >
                    <div>Customer</div>
                    <div {...grid} style={{ aspectRatio: '1' }} >Payment</div>
                </div>
            </div>
        </div>
    )
}