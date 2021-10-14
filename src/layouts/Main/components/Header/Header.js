import {
    useScrollTrigger,
    AppBar,
    Box,
    Toolbar,
    Link,
    Grid,
    IconButton,
    Hidden
} from '@material-ui/core'
import {PlayArrow} from '@material-ui/icons'
import useStyles from './Header.styles'

const Header = () => {
    const isScrolling = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64
    })

    const isLightHeader = false

    const classes = useStyles()

    const withSmallStyles = className => {
        const smallClass = isScrolling ? ' small' : ''
        return `${className}${smallClass}`
    }

    return (
        <AppBar elevation={0} className={`${classes.appBar} ${isLightHeader ? ' light' : ''}`} position="sticky">
            <Toolbar className={classes.toolbar}>
                <Box className={classes.menuBar}>
                    <Box className={classes.navBar}>
                        <Box>
                            <Link href="#" variant="caption" color="textPrimary">
                                <Box className={classes.tobbarLogoBox}>
                                    <img className={classes.topbarLogo} src='/images/topbar_beanverse_logo.png' alt="header logo"/>
                                </Box>
                            </Link>   
                        </Box>
                        {/* <Hidden smDown> */}
                            <Box className={classes.headerLabels}>
                                <Grid container spacing={7}>
                                    <Grid item>
                                        <Link href="#about" variant="caption" color="textPrimary">
                                            ABOUT
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#beans" variant="caption" color="textPrimary">
                                            BEANS
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#loadmap" variant="caption" color="textPrimary">
                                            LOADMAP
                                        </Link>
                                    </Grid>
                                    <Grid item>
                                        <Link href="#team" variant="caption" color="textPrimary">
                                            TEAM
                                        </Link>
                                    </Grid>
                                </Grid>
                            </Box>
                        {/* </Hidden> */}
                        <Box marginLeft={8}>
                            {/* <Hidden mdUp>
                                <IconButton>
                                    <PlayArrow />
                                </IconButton>
                            </Hidden> */}
                            <Box className={classes.topbarIconGroup}>
                                <Link href="#" variant="caption" color="textPrimary">
                                    <img className={classes.topbarIcon} src="/images/twitter.png" alt="twitter"/>   
                                </Link>
                                <Link href="#" variant="caption" color="textPrimary">
                                    <img className={classes.topbarIcon} src="/images/discord.png" alt="discordr"/>   
                                </Link>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
