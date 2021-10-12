import {Box, Grid, List, ListItem, Typography} from '@material-ui/core'
import useStyles from './Roadmap.styles'

const Roadmap = () => {
    const classes = useStyles()

    return (
        <Grid container>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}>
                <Box className={classes.right}>
                    <Typography variant="h3" color="textSecondary">
                        May 2021 - Phase 1
                    </Typography>
                    <List>
                        <ListItem>- Hero NFT Sale (BEP-721)</ListItem>
                        <ListItem>- Hero Marketplace</ListItem>
                    </List>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box className={classes.left}>
                    <Typography variant="h3" color="textSecondary">
                        JUN 2021 - PHASE 2
                    </Typography>
                    <List>
                        <ListItem>Introduce FARA token &amp; IDO -</ListItem>
                        <ListItem>Stake FARA to increase hero’s level -</ListItem>
                    </List>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}>
                <Box className={classes.right}>
                    <Typography variant="h3" color="textSecondary">
                        JULY 2021 - PHASE 3
                    </Typography>
                    <List>
                        <ListItem>- Hero Equipment (BEP-1155)</ListItem>
                        <ListItem>- Gacha Equipment Vendor</ListItem>
                    </List>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box className={classes.left}>
                    <Typography variant="h3" color="textSecondary">
                        AUG - NOV 2021 - PHASE 4
                    </Typography>
                    <List>
                        <ListItem>Equipment Enhancement -</ListItem>
                        <ListItem>Equipment Marketplace -</ListItem>
                        <ListItem>DAO platform -</ListItem>
                        <ListItem>Earn resources by deploying Hero to Expedition -</ListItem>
                    </List>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}>
                <Box className={classes.right}>
                    <Typography variant="h3" color="textSecondary">
                        DEC 2021 - PHASE 5
                    </Typography>
                    <List>
                        <ListItem>- Hero Arena (Turn-based Strategy Combat)</ListItem>
                        <ListItem>- Learn Skill Books</ListItem>
                        <ListItem>- Android &amp; IOS version</ListItem>
                    </List>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
                <Box className={classes.left}>
                    <Typography variant="h3" color="textSecondary">
                        Q1 2022 - PHASE 6
                    </Typography>
                    <List>
                        <ListItem>World Map Release -</ListItem>
                        <ListItem>Land Customization &amp; Camping System -</ListItem>
                        <ListItem> Introduce Monsters -</ListItem>
                    </List>
                </Box>
            </Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid item xs={12} sm={6}></Grid>
            <Grid className={classes.right}>
                <Box textAlign="left">
                    <Typography variant="h3" color="textSecondary">
                        Q2 2022 - PHASE 7
                    </Typography>
                    <List>
                        <ListItem>- Guild Battle</ListItem>
                        <ListItem>- War between Nations for Resources</ListItem>
                        <ListItem>- Pet System with Breeding &amp; Evolution</ListItem>
                    </List>
                </Box>
            </Grid>
        </Grid>
    )
}

export default Roadmap
