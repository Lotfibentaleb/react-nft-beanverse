import {createTheme, responsiveFontSizes} from '@material-ui/core'
import typography from './typography'

const theme = createTheme({
    palette: {
        type: 'dark',
        primary: {
            main: '#95DFFF',
            contrastText: '#fff'
        },
        secondary: {
            main: '#B2C5F5',
            contrastText: '#fff'
        },
        background: {
            default: '#ffffff'
        },
        text: {
            primary: '#ffffff',
            secondary: '#1F2B6C',
            third: '#B2C5F5',
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
