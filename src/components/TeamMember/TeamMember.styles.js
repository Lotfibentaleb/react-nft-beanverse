import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {},
    textContainer: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
    },
    image: {
        width: '100%',
        borderRadius: 10
    }
}))

export default useStyles
