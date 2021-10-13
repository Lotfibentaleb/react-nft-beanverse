import {makeStyles} from '@material-ui/core/styles'
import { CenterFocusStrong } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    banner: {
        position: 'relative',
        width: '100%',
        minHeight: '100vh',
    },
    hero: {
        width: '100%',
        minHeight: '1754px',
        backgroundImage: 'url(' + '/images/top-illusion1.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        [theme.breakpoints.up('md')]: {
        }
    },
    bannerContainer: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '100%',
    },
    bannerLogo: {
        marginTop: theme.spacing(28),
    },
    underLine: {
        width: '437px',
        height: '5px',
        background: '#159EEC',
        borderRadius: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    articleBox: {
        width: '100%',
        height: '219px',
        background: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '24px',
        textAlign: 'left'
    },
    carouselItem: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: theme.spacing(5)
    },
    carouselImageBox: {
        width: '238px',
        height: '238px',
        border: '8px solid #159EEC',
        borderRadius: '10px',
    },
    mintButton: {
        width: '131px',
        height: '38px',
        boxShadow: '0px 0px 4px 3px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: '25px',
    },
    section: {
        paddingTop: theme.spacing(6),
    },
    teamSection: {
        paddingTop: theme.spacing(15),
        paddingBottom: theme.spacing(20),
        width: '100%',
        minHeight: '727px',
        background: '#ffffff',
        backgroundImage: 'url(' + '/images/team-back.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover'
    },
    paper: {
        paddingTop: theme.spacing(4)
    },
    id: {
        width: '100%',
        height: '10px'
    }
}))

export default useStyles
