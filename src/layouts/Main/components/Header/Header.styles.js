import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    appBar: {
        transition: 'background, height 0.5s',
        background: '#211439f0',
        boxShadow: '0 0 4px rgba(0, 0, 0, .5)',
        zIndex: theme.zIndex.drawer + 1,

        '&.light': {
            background: 'transparent',
            boxShadow: 'none'
        },
        color: theme.palette.text.primary
    },
    toolbar: {
        transition: 'all 0.5s',
        [theme.breakpoints.down('sm')]: {
            height: theme.spacing(7)
        },
        [theme.breakpoints.up('md')]: {
            height: theme.spacing(16)
        },
        [theme.breakpoints.up('lg')]: {
            paddingLeft: theme.spacing(8),
            paddingRight: theme.spacing(8)
        },
        '&.small': {
            [theme.breakpoints.down('sm')]: {
                height: theme.spacing(7)
            },
            [theme.breakpoints.up('md')]: {
                height: theme.spacing(10)
            }
        }
    },
    navBar: {
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.5s',
        // [theme.breakpoints.up('md')]: {
        //     marginTop: theme.spacing(-5)
        // },
        '&.small': {
            [theme.breakpoints.up('md')]: {
                marginTop: 0
            }
        }
    },
    topMenu: {},
    profile: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(4)
    }
}))

export default useStyles
