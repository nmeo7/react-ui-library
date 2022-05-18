import { css } from 'glamor'

export const themeStyles = (theme) => css({
    '& .active': {
      backgroundColor: `${theme.primaryColorLight}`,
      color: `${theme.primaryColor} !important`,
      fontWeight: '900'
    },
    '& h1': {
        fontSize: '2.5em',
        fontWeight: '900',
        textTransform: 'capitalize',
        lineHeight: '1.5em',
        padding: '.2em 0'
    },
    '& .showOnHover': {
      display: 'none'
    },
    '& *:hover > .showOnHover': {
      display: 'grid' // , placeItems: 'center'
    },
    '& .hideOnHover': {
      display: 'grid' // , placeItems: 'center'
    },
    '& *:hover > .hideOnHover': {
      display: 'none'
    },
    '&': {
      fontFamily: `${theme.fontFamily} !important`
    },
    '& h1, & h2, & h3, & h4, & h5, & h6': {
      fontFamily: `${theme.fontFamilyBold} !important`
    },
    '& h2': {
      fontSize: '1.4em', margin: '4em 0 2em 24px'
    }
  })