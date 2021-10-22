import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    appBar: {
        width: '100%',
        transition: 'background, height 0.5s',
        backgroundImage: "url(" + "/images/bannerBackground.png" + ")",
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        boxShadow: '0 0 4px rgba(0, 0, 0, .5)',
        zIndex: theme.zIndex.drawer + 1,
        '&.light': {
            boxShadow: 'none'
        },
        color: theme.palette.text.primary
    },
    toolbar: {
        minHeight: theme.spacing(5),
        transition: 'all 0.5s',
        display: 'flex',
        justifyContent: 'center',
        [theme.breakpoints.down('sm')]: {
            height: theme.spacing(3)
        },
        [theme.breakpoints.up('md')]: {
            height: theme.spacing(3)
        },
    },
    menuBar: {
        position: 'absolute',
        top: theme.spacing(2.5),
        width: '805px',
        [theme.breakpoints.down('sm')]: {
            width: '580px'
        },
        [theme.breakpoints.down('xs')]: {
            width: '370px'
        },
        height: '47px',
        paddingLeft: '18px',
        paddingRight: '18px',
        backgroundImage: "url(" + "/images/top_bar_front.png" + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        borderRadius: '14px',
        color: '#ffffff',
        fontFamily: 'Gotham Rounded',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '16px',
        lineHeight: '19px',
    },
    navBar: {
        display: 'flex',
        alignItems: 'center',
        transition: 'all 0.5s',
        [theme.breakpoints.down('sm')]: {
            justifyContent: 'space-between'
        },
        '&.small': {
            [theme.breakpoints.up('md')]: {
                marginTop: 0
            }
        }
    },
    headerLabels: {
        paddingLeft: theme.spacing(5),
        paddingBottom: theme.spacing(0.5)
    },
    tobbarLogoBox: {
        marginTop: '5px'
    },
    topbarLogo: {
        width: '110px',
    },
    topbarIconGroup: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },
    topbarIcon: {
        width: '32px',
        height: '24px',
        marginLeft: '7px'
    },
    topMenu: {},
    profile: {
        display: 'flex',
        alignItems: 'center',
        marginLeft: theme.spacing(4)
    }
}))

export default useStyles
