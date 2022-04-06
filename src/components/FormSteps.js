import { css } from 'glamor'
import React, { useContext } from 'react'
import { navigate } from './Btn'
import { UserContext } from '../layouts/Context'

const stepClass = (step, current) => {
    if (current == step) return 'current-step'
    if (current < step) return 'pending-step'
    return 'completed-step'
}

export const formTheme = (theme) => css({
    '&.current-step': {
        background: theme.primaryColorVariant
    },
    '&.current-step .dot': {
        background: 'white', border: `4px solid ${theme.primaryColorVariant}`
    },
    '&.current-step .label': {
        color: theme.primaryColor
    },
    
    '&.pending-step': {
        background: '#eee'
    },
    '&.pending-step .dot': {
        background: '#eee'
    },
    '&.pending-step .label': {
        color: '#333'
    },

    '&.completed-step': {
        background: theme.primaryColorVariant
    },
    '&.completed-step .dot': {
        background: theme.primaryColorVariant, border: `4px solid ${theme.primaryColorVariant}`
    },
    '&.completed-step .label': {
        color: theme.primaryColor
    }
})

export const FormSteps = (props) => {
    
    const { theme } = useContext (UserContext)

    return (
        <div style={{ padding: '16px 0 48px 0', position: 'relative', height: '32px', display: 'flex', width: '100%' }} >

            {
                props.steps.map (
                    (step, index) => {
                        return (
                        <div style={{ flex: '1', position: 'relative', height: '2px' }} className={ stepClass(index + 1, props.currentStep) } { ...formTheme(theme) } >
                            <div style={{ top: '-14px', bottom: '-14px', left: 'calc(50% - 14px)', right: 'calc(50% - 14px)', borderRadius: '50%', position: 'absolute', cursor: 'pointer' }} 
                            className='dot'
                            onClick={ () => navigate(`${props.baseUrl}/${step.toLowerCase().replaceAll(' ', '-')}`) } ></div>
                            <div style={{ bottom: '24px', width: 'calc(100% - 14px)', position: 'absolute', textAlign: 'center', padding: '8px' }} className='label' >{ index + 1 }. { step }</div>
                        </div>)
                    }
                )
            }
        </div>
    )
}

