import React from 'react'
import { showDialog } from '../layouts/DashboardLayout'

export const Dialog = (props) => {
    
    return props.bottom ? 
            <div onClick={ () => showDialog(null) }  style={{ position: 'fixed', top: '0', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,.7)', zIndex: '99'   }}>
                <div onClick={ (e) => e.stopPropagation() } style={{ position: 'fixed', bottom: '0', height: 'auto', left: '0', right: '0', borderRadius: '32px 32px 0 0', background: '#fff', padding: '32px' }} >
                    <div style={{ position: 'absolute', color: 'white', padding: '12px', right: '8px', top: '8px', background: 'black', borderRadius: '50%', height: '16px', width: '16px', cursor: 'pointer', display: 'grid', placeItems: 'center' }} >x</div>
                    { props.children }
                </div>
            </div> : 
            <div onClick={ () => showDialog(null) }  style={{ position: 'fixed', top: '0', bottom: '0', left: '0', right: '0', background: 'rgba(0,0,0,.7)', zIndex: '99', display: 'grid', placeItems: 'center' }}>
                <div onClick={ (e) => e.stopPropagation() } style={{ height: 'auto', borderRadius: '32px', background: '#fff', padding: '32px', position: 'relative' }} >
                    <div style={{ position: 'absolute', color: 'white', padding: '12px', right: '8px', top: '8px', background: 'black', borderRadius: '50%', height: '16px', width: '16px', cursor: 'pointer', display: 'grid', placeItems: 'center' }} >x</div>
                    { props.children }
                </div>
            </div>

}