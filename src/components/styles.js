import { css } from 'glamor'

export const glass = css({
	background: 'rgba(255, 255, 255, 0.05)',
	WebkitBackdropFilter: 'blur(15px)',
	backdropFilter: 'blur(12px)',
	WebkitBoxShadow: '5px 5px 20px rgba(0, 0, 0, 0.4)',
	boxShadow: '5px 5px 20px rgba(0, 0, 0, 0.4)',
})

export const grid = css({
    display: 'grid',
    placeItems: 'center'
})