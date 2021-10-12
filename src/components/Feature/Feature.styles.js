import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        backgroundColor: '#ffffff09',
        paddingTop: theme.spacing(4),
        paddingBottom: theme.spacing(4),
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
        borderRadius: 10
    },
    image: {
        width: 80,
        height: 80,
        objectFit: 'none'
    }
}))

export default useStyles
