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
                            <Link href="#home" variant="caption" color="textPrimary">
                                <Box paddingDown={2}>
                                    <img src='/images/header_logo.png' alt="header logo"/>
                                </Box>
                            </Link>   
                        </Box>
                        {/* <Hidden smDown> */}
                            <Box className={classes.headerLabels}>
                                <Grid container spacing={5}>
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
                                        <Link href="#roadmap" variant="caption" color="textPrimary">
                                            ROADMAP
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
                            <Box className={classes.headerIcons}>
                                <Link href="https://twitter.com/pfl_game" variant="caption" color="textPrimary">
                                    <img src="/images/twitter.png" alt="twitter"/>   
                                </Link>
                                <Link href="https://discord.gg/pfl" variant="caption" color="textPrimary">
                                    <img src="/images/discord.png" alt="discordr"/>   
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
