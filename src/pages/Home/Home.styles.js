import {makeStyles} from '@material-ui/core/styles'
import { CenterFocusStrong } from '@material-ui/icons'

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1
    },
    banner: {
        position: 'relative',
        width: '100%',
    },
    hero: {
        width: '100%',
        minHeight: '2209px',
        [theme.breakpoints.down('sm')]: {
            height: 'auto'
        },
        backgroundImage: 'url(' + '/images/top_Illustration.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top',
        backgroundSize: 'contain',
        [theme.breakpoints.down('sm')]: {
            backgroundSize: '160%'
        },
        background: '#16295B',
        boxShadow: '0px 4px 50px #16295B',
        zIndex: '1',
       
    },
    bannerContainer: {
        position: 'absolute',
        left: '0px',
        top: '0px',
        width: '100%',
    },
    bannerLogo: {
        width: '488px',
        height: '108px',
        [theme.breakpoints.down('xs')]: {
            width: '350px',
            height: '85px',
        },
        marginTop: theme.spacing(30),
    },
    aboutIdPosition: {
        marginTop: '880px',
        [theme.breakpoints.down('md')]: {
            marginTop: '600px',
        },
        [theme.breakpoints.down('sm')]: {
            marginTop: '500px',
        },
        [theme.breakpoints.down('xs')]: {
            marginTop: '250px',
        }
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
    articleBox: {
        width: '100%',
        background: 'rgba(255, 255, 255, 0.15)',
        borderRadius: '24px',
        textAlign: 'left'
    },
    beanSection: {
        width: '100%',
        display: 'flex',
        justifyContent: 'center'
    },
    carouselArea:{
        width: '90%'
    },
    carouselGroup: {
        width: '100%'
    },
    carouselItem: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        paddingBottom: theme.spacing(5),
    },
    carouselImageBox: {
        width: '292px',
        height: '292px',
        border: '8px solid #159EEC',
        borderRadius: '10px',
    },
    carouselImage: {
        width: '100%',
        height: '100%'
    },
    mintButton: {
        width: '163px',
        height: '47px',
        boxShadow: '0px 0px 4px 3px rgba(0, 0, 0, 0.15)',
        borderRadius: '10px',
        fontWeight: 'bold',
        fontSize: '25px',
    },
    section: {
        paddingTop: theme.spacing(6),
    },
    teamSection: {
        position: 'relative',
        paddingTop: theme.spacing(10),
        paddingBottom: theme.spacing(5),
        width: '100%',
        minHeight: '670px',
        background: '#E1EFF4',
    },
    miniManImages: {
        position: 'absolute',
        top: '-80px',
        left: '130px',
        width: '1610px',
        height: '847px',
        background: 'transparent',
        backgroundImage: 'url(' + '/images/team_background.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    } ,
    paper: {
        paddingTop: theme.spacing(4)
    },
    id: {
        width: '100%',
        height: '1px'
    }
}))

export default useStyles
