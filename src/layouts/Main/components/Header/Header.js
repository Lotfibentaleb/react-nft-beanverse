import {
    useScrollTrigger,
    AppBar,
    Box,
    Toolbar,
    Button,
    Link,
    Grid,
    IconButton,
    Hidden
} from '@material-ui/core'
import {PlayArrow, SportsEsports, Twitter} from '@material-ui/icons'
import useStyles from './Header.styles'

import Logo from './Logo'

const Header = () => {
    const isScrolling = useScrollTrigger({
        disableHysteresis: true,
        threshold: 64
    })

    const isLightHeader = !isScrolling

    const classes = useStyles()

    const withSmallStyles = className => {
        const smallClass = isScrolling ? ' small' : ''
        return `${className}${smallClass}`
    }

    return (
        <AppBar elevation={0} className={`${classes.appBar} ${isLightHeader ? ' light' : ''}`}>
            <Toolbar className={withSmallStyles(classes.toolbar)}>
                <Logo />

                <Box flexGrow={1} />

                <Box className={withSmallStyles(classes.navBar)}>
                    <Hidden smDown>
                        <Box>
                            <Grid container spacing={4}>
                                <Grid item>
                                    <Link href="#about-us" variant="caption" color="textPrimary">
                                        About Us
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#features" variant="caption" color="textPrimary">
                                        Features
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#plush-bags" variant="caption" color="textPrimary">
                                        Plush Bags
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#plushies" variant="caption" color="textPrimary">
                                        Plushies
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#roadmap" variant="caption" color="textPrimary">
                                        Roadmap
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="#team" variant="caption" color="textPrimary">
                                        Team
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Hidden>
                    <Hidden smDown>
                        <Box marginLeft={8}>
                            <Button variant="contained" color="primary">
                                Play Now
                            </Button>
                        </Box>
                    </Hidden>
                    <Box marginLeft={4}>
                        <Hidden mdUp>
                            <IconButton>
                                <PlayArrow />
                            </IconButton>
                        </Hidden>
                        <IconButton component={Link} href="https://discord.gg/pfl">
                            <SportsEsports />
                        </IconButton>
                        <IconButton component={Link} href="https://twitter.com/pfl_game">
                            <Twitter />
                        </IconButton>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Header
