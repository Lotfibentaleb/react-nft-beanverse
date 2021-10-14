import { useState } from 'react';
import {
    Box, 
    Container, 
    Grid, 
    Typography,  
    Collapse, 
    CardActions, 
    IconButton
} from '@material-ui/core'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import clsx from 'clsx';
import useStyles from './Questions.styles';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

const ACCORDIAN_DATAS = [
	{title: "How many Beans are there?", content: "Pay attention to #presale-challenge in our discord server to learn how to become whitelisted for the Beanverse presale!"},
	{title: "What Token is Beanverse hosted on?", content: "Pay attention to #presale-challenge in our discord server to learn how to become whitelisted for the Beanverse presale!"},
	{title: "How many Beans can I purchase?", content: "Pay attention to #presale-challenge in our discord server to learn how to become whitelisted for the Beanverse presale!"},
	{title: "What do I get from owning a Bean?", content: "Pay attention to #presale-challenge in our discord server to learn how to become whitelisted for the Beanverse presale!"},
	{title: "How do I get in the Beanverse Presale?", content: "Pay attention to #presale-challenge in our discord server to learn how to become whitelisted for the Beanverse presale!"},
	{title: "When is launch?? I want Bean!!!", content: "Pay attention to #presale-challenge in our discord server to learn how to become whitelisted for the Beanverse presale!"},
]

const Questions = () => {
    const classes = useStyles()
    const [expanded, setExpanded] = useState(-1)

    return (
        <Box className={classes.askSection} textAlign="center">
			<Fade bottom duration={3000}>
				<Container maxWidth="md">
					<Typography variant="h2" color="textSecondary">FREQUENTLY ASKED QUESTIONS</Typography>
					<Box className={classes.underLine} mt={1}></Box>
					<Box mt={4} />
					{ACCORDIAN_DATAS.map((item, index) => {
						return (
							<Grid container>
								<Grid item xs={12} md={2}></Grid>
								<Grid item xs={12} md={8}>
									<Box>
										<CardActions disableSpacing>
											<Box 
												className={classes.accodian}
												cursor="pointer"
												onClick={() => {
													if(expanded !== index)
														setExpanded(index);
													else
														setExpanded(-1);
												}}
											>
												<Typography variant="h6" gutterBottom className={classes.titleGroup}>
													{item.title}
												</Typography>
												<IconButton
													className={clsx(classes.expand, {
														[classes.expandOpen]: (index === expanded),
													})}
													onClick={() => {
														if(expanded !== index)
															setExpanded(index);
														else
															setExpanded(-1);
													}}
													aria-expanded={index === expanded}
													aria-label="show more"
													>
													<ExpandMoreIcon style={{fill: "#1F2B6C", fontSize: 30}}/>
												</IconButton>
											</Box>
										</CardActions>
										<Collapse in={index === expanded} timeout="auto" unmountOnExit>
											<Box className={classes.collapseContent}>
												<Box className={classes.editContainer}>
													{item.content}
												</Box>
											</Box>
										</Collapse>
									</Box>
								</Grid>
								<Grid item xs={12} md={2}></Grid>
							</Grid>
						)
					})}
				</Container>
			</Fade>
		</Box>
    )
}

export default Questions
