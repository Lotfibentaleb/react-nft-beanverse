import {Box, Button, Container, Grid, Typography} from '@material-ui/core'
import Carousel from 'react-multi-carousel'
import 'react-multi-carousel/lib/styles.css'
import TeamCard from 'components/TeamCard'
import Roadmap from 'components/Roadmap'
import Questions from 'components/Questions'
import useStyles from './Home.styles'
import Fade from 'react-reveal/Fade'

const CAROUSEL_RESPONSIVE = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: {max: 4000, min: 3000},
        items: 5
    },
    desktop: {
        breakpoint: {max: 3000, min: 1024},
        items: 5
    },
    tablet: {
        breakpoint: {max: 1024, min: 464},
        items: 3
    },
    mobile: {
        breakpoint: {max: 464, min: 0},
        items: 1
    }
}

const CAROUSEL_ITEM_IMAGES = [
    'bean1.png',
    'bean2.png',
    'bean3.png',
    'bean4.png',
    'bean5.png',
    'bean6.png',
    'bean7.png',
    'bean8.png',
    'bean9.png',
    'bean10.png',
    'bean11.png',
    'bean12.png',
    'bean13.png',
    'bean14.png',
    'bean15.png'
]

const TEAMCARD_IMAGES = [
    {
        image: 'team_member1.png',
        name: 'SCEPTIC',
        title: 'OWNER / DIRECTOR',
        iconImages: [
            {icon: 'twitter.png', link: 'https://twitter.com/sceptic'},
            {icon: 'tiktok.png', link: 'https://www.tiktok.com/@scepticreal?'},
            {icon: 'instagram.png', link: 'https://instagram.com/sceptic'},
            {icon: 'youtube.png', link: 'https://youtube.com/scepticg'},
            {icon: 'twitch.png', link: 'https://www.twitch.tv/sceptic'}
        ]
    },
    {
        image: 'team_member2.png',
        name: 'DEVIN',
        title: 'OWNER / DESIGNER',
        iconImages: [
            {icon: 'twitter.png', link: 'https://twitter.com/NFTdevin'},
            {icon: 'discord_1.png', link: 'https://discord.gg/fNkEEdzSvx'}
        ]
    },
    {
        image: 'team_member3.png',
        name: '00100100',
        title: 'DEVELOPER',
        iconImages: [{icon: 'twitter.png', link: 'https://twitter.com/sceptic'}]
    },
    {
        image: 'team_member4.png',
        name: 'YELO',
        title: 'PUBLIC RELATIONS',
        iconImages: [
            {icon: 'twitter.png', link: 'https://twitter.com/sceptic'},
            {icon: 'instagram.png', link: 'https://instagram.com/sceptic'},
            {icon: 'twitch.png', link: 'https://www.twitch.tv/sceptic'}
        ]
    }
]

const Home = () => {
    const classes = useStyles()

    return (
        <Box className={classes.root}>
            <Box className={classes.banner} id="home">
                <Box className={classes.hero}></Box>
                <Box textAlign="center">
                    <Box className={classes.bannerContainer}>
                        <Container maxWidth="md">
                            <img
                                className={classes.bannerLogo}
                                src="/images/bean_word_logo.png"
                                alt="banner logo"
                            />
                            <Box mt={1}>
                                <Button
                                    className={classes.mintButton}
                                    color="primary"
                                    variant="contained"
                                >
                                    MINT
                                </Button>
                            </Box>
                            <Box mt={1}>
                                <Typography variant="h5">01:22:36</Typography>
                            </Box>

                            {/* About Section */}
                            <Box mt={110} className={classes.id} id="about"></Box>
                            <Fade bottom duration={3000}>
                                <Box mt={8}>
                                    <Typography variant="h1">ABOUT BEANVERSE</Typography>
                                </Box>
                                <Box className={classes.underLine} mt={1}></Box>
                                <Box mt={4}>
                                    <Grid container spacing={3}>
                                        <Grid item xs={12} md={4}>
                                            <Box className={classes.articleBox} p={3}>
                                                <Typography variant="h3">
                                                    What is Beanverse?
                                                </Typography>
                                                <Typography variant="h6" color="secondary">
                                                    • 8,888 Bean’s that escaped reality & broke into
                                                    a new universe, the Beanverse. Scattered around
                                                    this new Beanverse, the Beans try to find their
                                                    way. With over (x) traits these Beans are fully
                                                    built for your personality & habits!
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Box className={classes.articleBox} p={3}>
                                                <Typography variant="h3">Giving Back</Typography>
                                                <Typography variant="h6" color="secondary">
                                                    • 50% of all royalties on the secondary market
                                                    will be airdropped to Beanverse owners on a
                                                    weekly basis! <br />• The other 50% will be used
                                                    by the Beanverse team to buy back Beans on the
                                                    secondary market, and those Beans will be burned
                                                    forever!
                                                </Typography>
                                            </Box>
                                        </Grid>
                                        <Grid item xs={12} md={4}>
                                            <Box className={classes.articleBox} p={3}>
                                                <Typography variant="h3">Rarities</Typography>
                                                <Typography variant="h6" color="secondary">
                                                    • All beans are 1/1! With over 160 traits and
                                                    millions of possible combinations, no two Beans
                                                    will be alike!
                                                </Typography>
                                            </Box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Fade>
                        </Container>

                        {/* Beans Section */}
                        <Box mt={2} className={classes.id} id="beans"></Box>
                        <Fade bottom duration={3000}>
                            <Box className={classes.beanSection} mt={8}>
                                <Box className={classes.carouselArea}>
                                    <Carousel
                                        swipeable={false}
                                        draggable={false}
                                        showDots={true}
                                        responsive={CAROUSEL_RESPONSIVE}
                                        ssr={true} // means to render carousel on server-side.
                                        infinite={true}
                                        autoPlay={false}
                                        autoPlaySpeed={1000}
                                        arrows={false}
                                        keyBoardControl={true}
                                        transitionDuration={500}
                                        removeArrowOnDeviceType={['tablet', 'mobile']}
                                        itemClass="paddin-bottom: 40px"
                                        renderButtonGroupOutside={true}
                                    >
                                        {CAROUSEL_ITEM_IMAGES.map(item => {
                                            return (
                                                <Box className={classes.carouselItem}>
                                                    <Box className={classes.carouselImageBox}>
                                                        <img
                                                            className={classes.carouselImage}
                                                            src={'/images/' + item}
                                                            alt="BEAN"
                                                        />
                                                    </Box>
                                                </Box>
                                            )
                                        })}
                                    </Carousel>
                                </Box>
                            </Box>
                        </Fade>
                    </Box>
                </Box>
            </Box>

            {/* Roadmap Section */}
            <Box className={classes.id} id="roadmap"></Box>
            <Roadmap />

            {/* Team Section */}
            <Box className={classes.teamSection} id="team" textAlign="center">
                <Fade bottom duration={3000}>
                    <Container maxWidth="lg">
                        <Typography variant="h2" color="textSecondary">
                            THE BEANVERSE TEAM
                        </Typography>
                        <Box className={classes.underLine} mt={1}></Box>
                        <Box mt={4}>
                            <Grid container spacing={3}>
                                {TEAMCARD_IMAGES.map((item, index) => {
                                    return (
                                        <Grid item xs={12} md={3}>
                                            <TeamCard
                                                image={item.image}
                                                name={item.name}
                                                title={item.title}
                                                iconImgs={item.iconImages}
                                            />
                                        </Grid>
                                    )
                                })}
                            </Grid>
                        </Box>
                    </Container>
                </Fade>
            </Box>

            {/* Questions Section */}
            <Questions />
        </Box>
    )
}

export default Home
