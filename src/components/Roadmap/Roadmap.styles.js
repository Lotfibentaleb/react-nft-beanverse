import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {},
    left: {
        textAlign: 'right',
        '& ul li': {
            textAlign: 'right',
            justifyContent: 'flex-end'
        },
        [theme.breakpoints.up('sm')]: {
            borderRight: `1px solid ${theme.palette.text.primary}`,
            paddingRight: theme.spacing(4)
        }
    },
    right: {
        textAlign: 'left',
        [theme.breakpoints.up('sm')]: {
            marginLeft: -1,
            borderLeft: `1px solid ${theme.palette.text.primary}`,
            paddingLeft: theme.spacing(4)
        }
    }
}))

export default useStyles
