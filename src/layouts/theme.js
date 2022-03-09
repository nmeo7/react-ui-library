import { css } from 'glamor'

export const themeStyles = (theme) => css({
    '& .active': {
      backgroundColor: `${theme.primaryColor}`,
      color: 'white !important'
    },
    '& h1': {
        fontSize: '2.5em',
        fontWeight: '900',
        textTransform: 'capitalize',
        lineHeight: '1.5em',
        padding: '.2em 0'
    }
  })