import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: '#ffffff',
        backgroundImage: 'url(' + '/images/roadmap_background_left.png' + ')',
        backgroundRepeat: 'repeat',
        backgroundPosition: 'left',
        backgroundSize: 'contain',
        height: '738px'
    },
    roadmapWhiteArea: {
        paddingTop: theme.spacing(10),
        background: '#ffffff',
        boxShadow: '0px 4px 150px rgba(136, 154, 169, 0.42)',
        height: '100%'
    },
    roadmapArea: { 
        width: '100%',
        minHeight: '430px',
        backgroundImage: 'url(' + '/images/roadmap_line.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    roadmapRow1: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '40px'
    },
    roadmapRow2: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '70px',
        paddingRight: '170px'
    },
    roadmapRow3: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '190px',
        paddingRight: '0px'
    },
    roadmapItem: {
        width: '271px',
        height: '137px',
        background: '#1F2B6C',
        borderRadius: '24px',
        marginTop: '30px',
        textAlign: 'left',
        paddingTop: '20px',
        paddingLeft: '25px',
        paddingRight: '15px',
    },
    roadmapText: {
        fontFamily: 'Gotham Rounded',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '45px',
        lineHeight: '54px',
        textAlign: 'center'
    },
    underLine: {
        width: '437px',
        height: '5px',
        background: '#159EEC',
        borderRadius: '5px',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
}))

export default useStyles
