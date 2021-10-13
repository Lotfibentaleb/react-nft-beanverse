import {makeStyles} from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
    root: {
        borderTop: '1px solid #D2DAE4',
        backgroundImage: "url(" + "/images/bannerBackground.png" + ")",
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    footer: {
        display: 'flex',
        justifyContent: 'space-between',
        paddingLeft: theme.spacing(3),
        paddingRight: theme.spacing(3),
        height: theme.spacing(5)
    },
    socialLinkGroup: {
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center'
    },
    socialLink: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2),
    }
}))

export default useStyles
