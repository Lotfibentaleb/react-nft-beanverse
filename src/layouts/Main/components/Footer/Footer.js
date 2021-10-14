import {Box, Link, Typography} from '@material-ui/core'
import useStyles from './Footer.styles'

const Footer = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.footer}>
                <img src="/images/footer_logo.png" alt="Beanverse" />
                <Box className={classes.socialLinkGroup}>
                    <Link href="#" variant="caption" color="textPrimary" underline="always">
                        <Box className={classes.socialLink}>
                            <Typography >DISCORD</Typography>
                        </Box>
                    </Link>
                    <Link href="#" variant="caption" color="textPrimary" underline="always">
                        <Box className={classes.socialLink}>
                            <Typography >TWITTER</Typography>
                        </Box>
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}

export default Footer
