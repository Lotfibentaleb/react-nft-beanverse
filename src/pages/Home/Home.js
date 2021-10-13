import {
  Box,
  Button,
  Container,
  Grid,
  Typography
} from "@material-ui/core";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import TeamCard from "components/TeamCard";
import Roadmap from "components/Roadmap";
import Questions from "components/Questions";
import useStyles from "./Home.styles";


const CAROUSEL_RESPONSIVE = {
	superLargeDesktop: {
	  // the naming can be any, depends on you.
	  breakpoint: { max: 4000, min: 3000 },
	  items: 5
	},
	desktop: {
	  breakpoint: { max: 3000, min: 1024 },
	  items: 5
	},
	tablet: {
	  breakpoint: { max: 1024, min: 464 },
	  items: 3
	},
	mobile: {
	  breakpoint: { max: 464, min: 0 },
	  items: 1
	}
  };

const CAROUSEL_ITEM_IMAGES = ['bean1.png', 'bean1.png', 'bean1.png', 'bean1.png', 'bean1.png']

const TEAMCARD_IMAGES = [
	{image: 'bean1.png', name: 'SCEPTIC', title: 'OWNER / DIRECTOR', iconImages: ["twitter.png", "tiktok.png", "instagram.png", "youtube.png", "twitch.png"]},
	{image: 'bean2.png', name: 'DEVIN', title: 'OWNER / DESIGNER', iconImages: ["twitter.png", "discord_1.png"]},
	{image: 'bean3.png', name: '00100100', title: 'DEVELOPER', iconImages: ["twitter.png"]}
]

const Home = () => {
  const classes = useStyles();
  
  return (
    <Box className={classes.root}>
		<Box className={classes.banner} id="home">
			<Box className={classes.hero}></Box>
			<Box textAlign="center">
				<Box className={classes.bannerContainer}>
				<Container maxWidth="md">
					<img className={classes.bannerLogo} src="/images/logo.png" alt="banner logo"/>
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
					<Box mt={70} className={classes.id} id="about"></Box>
					<Box mt={8} id="about">
						<Typography variant="h1">ABOUT BEANVERSE</Typography>
					</Box>
					<Box className={classes.underLine} mt={1}></Box>
					<Box mt={4}>
						<Grid container spacing={3}>
							<Grid item xs={12} md={4}>
								<Box className={classes.articleBox} p={3}>
									<Typography variant="h3">What is Beanverse?</Typography>
									<Typography variant="h6" color="secondary">
										• 8,888 Bean’s that escaped reality & 
										broke into a new universe, the 
										Beanverse. Scattered around this new 
										Beanverse, the Beans try to find their 
										way. With over (x) traits these Beans 
										are fully built for your personality & 
										habits!
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} md={4}>
								<Box className={classes.articleBox} p={3}>
									<Typography variant="h3">Giving Back</Typography>
									<Typography variant="h6" color="secondary">
										• 50% of all royalties on the secondary market will be airdropped to Beanverse owners on a weekly basis! <br/>
										• The other 50% will be used by the Beanverse team to buy back Beans on the secondary market, and those Beans will be burned forever!
									</Typography>
								</Box>
							</Grid>
							<Grid item xs={12} md={4}>
								<Box className={classes.articleBox} p={3}>
									<Typography variant="h3">Rarities</Typography>
									<Typography variant="h6" color="secondary">
										• All beans are 1/1! With over 160 traits and millions of possible combinations, no two Beans will be alike! 
									</Typography>
								</Box>
							</Grid>
						</Grid>
					</Box>
				</Container>
				{/* Beans Section */}
				<Box mt={2} className={classes.id} id="beans"></Box>
				<Box mt={2} p={2}>
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
						containerClass="carousel-container"
						removeArrowOnDeviceType={["tablet", "mobile"]}
						itemClass="paddin-bottom: 40px"
						renderButtonGroupOutside={true}
					>
						{CAROUSEL_ITEM_IMAGES.map((item) => {
								return (
									<Box className={classes.carouselItem}>
										<Box className={classes.carouselImageBox}><img src={'/images/' + item} alt="BEAN" /></Box>
									</Box>
								)
						})}
					</Carousel>
				</Box>
			</Box>
			</Box>
		</Box>
		{/* Roadmap Section */}
      	<Roadmap />
		{/* Team Section */}
		<Box className={classes.teamSection} id="team" textAlign="center">
			<Container maxWidth="md">
				<Typography variant="h2" color="textSecondary">THE BEANVERSE TEAM</Typography>
				<Box className={classes.underLine} mt={1}></Box>
				<Box mt={4}>
					<Grid container spacing={3}>
						
						{TEAMCARD_IMAGES.map((item, index) => {
							return (
								<Grid item xs={12} md={4}>
									<TeamCard
									image={item.image}
									name={item.name}
									title={item.title}
									iconImgs={item.iconImages}
									/>
								</Grid>
							)})
						}
					</Grid>
				</Box>
			</Container>
		</Box>		
		{/* Questions Section */}
		<Questions />	
    </Box>
  );
};

export default Home;
