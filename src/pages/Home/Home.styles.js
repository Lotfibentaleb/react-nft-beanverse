import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    banner: {
        width: '100%',
        minHeight: '100vh',
        background: 'linear-gradient(#211439, #171229 40%)'
    },
    hero: {
        marginTop: theme.spacing(8),
        width: '100%',
        objectFit: 'none',
        height: '40vh',
        [theme.breakpoints.up('md')]: {
            marginTop: '120px'
        }
    },
    section: {
        paddingTop: theme.spacing(12)
    },
    paper: {
        paddingTop: theme.spacing(4)
    }
}))

export default useStyles
