import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: '#1F2B6C',
        borderRadius: '10px',
        padding: theme.spacing(2),
        height: '415px'
    },
    textContainer: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    image: {
        width: '100%'
    },
    iconGroup: {
        width: '100%',
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        display: 'flex',
        justifyContent: 'center'
    },
    iconImg: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
    }
}))

export default useStyles
