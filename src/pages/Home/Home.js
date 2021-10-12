// import { useState } from 'react'
import {Box, Button, Container, Grid, Paper, Typography} from '@material-ui/core'
import Feature from 'components/Feature'
import Plush from 'components/Plush'
import Roadmap from 'components/Roadmap'
import TeamMember from 'components/TeamMember'
import useStyles from './Home.styles'

const Home = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.banner}>
                <img className={classes.hero} src="/images/hero.png" alt="Banner" />
                <Box textAlign="center" padding={4}>
                    <Container maxWidth="lg">
                        <Box>
                            <Typography variant="h1">
                                Beanverse
                                <br />
                                Best Ever Collection in the world
                            </Typography>
                        </Box>
                    </Container>
                    <Container maxWidth="md">
                        <Box mt={4}>
                            <Typography variant="body1">
                                There are many variations of passages of Lorem Ipsum available, but
                                the majority have suffered alteration in some form, by injected
                                humour, or randomised words which don't look even slightly
                                believable. If you are going to use a passage of Lorem Ipsum.
                            </Typography>
                        </Box>
                    </Container>
                    <Box mt={6}>
                        <Button color="primary" variant="contained">
                            Explore Now
                        </Button>
                    </Box>
                </Box>
            </Box>
            <Container maxWidth="lg">
                <Box className={classes.section} id="about-us">
                    <Grid container spacing={0}>
                        <Grid item xs={12} md={6}>
                            <Box textAlign="center">
                                <img
                                    className="responsive"
                                    src="/images/announcer.png"
                                    alt="Announcer"
                                />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={6}>
                            <Box padding={2} display="flex" alignItems="center" height="100%">
                                <Box>
                                    <Typography variant="h2">About Us</Typography>
                                    <Box marginTop={6}>
                                        <Typography variant="caption">
                                            There are many variations of passages of Lorem Ipsum
                                            available, but the majority have suffered alteration in
                                            some form, by injected humour, or randomised words which
                                            don't look even slightly believable. If you are going to
                                            use a passage of Lorem Ipsum, you need to be sure there
                                            isn't anything embarrassing hidden in the middle of
                                            text.
                                        </Typography>
                                    </Box>
                                    <Box marginTop={6} display="flex">
                                        <Button variant="contained" color="primary">
                                            Explore Now
                                        </Button>
                                        <Box ml={2}></Box>
                                        <Button variant="outlined" color="secondary">
                                            Explore Now
                                        </Button>
                                    </Box>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Box className={classes.section} id="features" textAlign="center">
                    <Typography variant="h2">Features</Typography>
                    <Box marginTop={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Feature
                                    image="/images/eye.png"
                                    title="Game Experience"
                                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Feature
                                    image="/images/nft.png"
                                    title="Unique NFTs"
                                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Feature
                                    image="/images/video.png"
                                    title="Play to earn"
                                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box className={classes.section} id="plush-bags" textAlign="center">
                    <Typography variant="h2">Plush Bags</Typography>
                    <Box marginTop={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Plush
                                    image="/images/bag.png"
                                    title="Plush Bgs"
                                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Plush
                                    image="/images/bag.png"
                                    title="Plush Bgs"
                                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Plush
                                    image="/images/bag.png"
                                    title="Plush Bgs"
                                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box className={classes.section} id="plushies" textAlign="center">
                    <Typography variant="h2">Plushies</Typography>
                    <Box marginTop={4}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={4}>
                                <Plush
                                    image="/images/plush.png"
                                    title="Plush"
                                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Plush
                                    image="/images/plush.png"
                                    title="Plush"
                                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                                />
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Plush
                                    image="/images/plush.png"
                                    title="Plush"
                                    description="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>

                <Box className={classes.section} id="roadmap" textAlign="center">
                    <Typography variant="h2">Roadmap</Typography>
                    <Box marginTop={4}>
                        <Roadmap />
                    </Box>
                </Box>

                <Box className={classes.section} id="team" textAlign="center">
                    <Typography variant="h2">Our Team</Typography>
                    <Box marginTop={4} textAlign="left">
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={3}>
                                <TeamMember
                                    image="/images/team/1.png"
                                    name="Tom Latham"
                                    title="CEO &amp; CO Founder"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamMember
                                    image="/images/team/2.png"
                                    name="John Deo"
                                    title="Founder"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamMember
                                    image="/images/team/3.png"
                                    name="John Deo"
                                    title="Strategy"
                                />
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <TeamMember
                                    image="/images/team/4.png"
                                    name="Bob Milan"
                                    title="Blockchain"
                                />
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
            </Container>
        </Box>
    )
}

export default Home
