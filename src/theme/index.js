import {createTheme, responsiveFontSizes} from '@material-ui/core'
import typography from './typography'

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#95DFFFE5',
            contrastText: '#fff'
        },
        secondary: {
            main: '#D2DAE4',
            contrastText: '#fff'
        },
        background: {
            default: '#161127'
        },
        text: {
            primary: '#D2DAE4',
            secondary: '#E84393'
        }
    },
    shape: {
    },
    typography,
    overrides: {
        MuiCssBaseline: {
            '@global': {
                '*': {
                    boxSizing: 'border-box'
                },
                html: {
                    '-webkit-font-smoothing': 'antialiased',
                    '-moz-osx-font-smoothing': 'grayscale',
                    'scroll-behavior': 'smooth'
                },
                body: {
                }
            }
        }
    }
})

theme.props = {
    MuiPaper: {
        elevation: 0
    },
    MuiButton: {
        disableElevation: true
    },
    MuiLink: {
        underline: 'none'
    }
}

export default responsiveFontSizes(theme)
