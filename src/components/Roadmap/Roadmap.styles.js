import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        background: '#ffffff',
        paddingTop: theme.spacing(10)
    },
    loadmapArea: { 
        width: '100%',
        minHeight: '430px',
        backgroundImage: 'url(' + '/images/loadmap_line.png' + ')',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    loadmapRow1: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingRight: '40px'
    },
    loadmapRow2: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '70px',
        paddingRight: '170px'
    },
    loadmapRow3: {
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: '190px',
        paddingRight: '0px'
    },
    loadmapItem: {
        width: '255px',
        height: '129px',
        background: '#1F2B6C',
        borderRadius: '24px',
        marginTop: '30px',
        textAlign: 'left',
        paddingTop: '15px',
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
