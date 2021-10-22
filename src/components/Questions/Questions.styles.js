import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {},
    askSection: {
        paddingTop: theme.spacing(8),
        width: '100%',
        minHeight: '751px',
        background: '#ffffff',
        backgroundImage: 'url(' + '/images/faq-back.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'cover'
    },
    accodian: {
        width: '100%',
        height: '46px',
        background: '#E1EFF4',
        borderRadius: '15px',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '14px',
        paddingRight: '14px',
        alignItems: 'center',
        color: '#1F2B6C',
        boxShadow: '0px 0px 4px 3px rgba(0, 0, 0, 0.1)',
        '&:hover': {
            cursor: 'pointer',
        }
    },
    titleGroup: {
        color: '#1F2B6C',
        fontFamily: 'Gotham Rounded',
        fontSize: '15px',
        fontWeight: '350px',
    },
    expand: {
        color: '#121212',
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
          duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        color: '#121212',
        transform: 'rotate(180deg)',
    },
    collapseContent: {
        padding: theme.spacing(1),
    },
    editContainer: {
        padding: theme.spacing(2),
        paddingTop: theme.spacing(2),
        paddingBottom: theme.spacing(2),
        boxShadow: '0px 0px 4px 3px rgba(0, 0, 0, 0.1)',
        color: '#4255BB',
        background: '#E1EFF4',
        borderRadius: '15px',
        width: '100%',
        fontWeight: '350px',
        fontSize: '15px',
        textAlign: 'left'
    },
    underLine: {
        width: '437px',
        [theme.breakpoints.down('xs')]: {
            width: '340px',
        },
        height: '5px',
        background: '#159EEC',
        borderRadius: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}))

export default useStyles
