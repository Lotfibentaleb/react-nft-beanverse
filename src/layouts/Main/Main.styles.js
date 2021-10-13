import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '1360px',
        height: '100%',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    content: {
        width: '100%',
        height: '100%',
        textAlign: 'center'
    }
}))

export default useStyles
