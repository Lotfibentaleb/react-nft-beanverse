import {Box, Paper, Typography} from '@material-ui/core'
import useStyles from './Feature.styles'

const Feature = ({image, title, description, ...props}) => {
    const classes = useStyles()

    return (
        <Paper className={classes.root} {...props}>
            <Box>
                <img src={image} alt={title} className={classes.image} />
            </Box>
            <Box marginTop={2}>
                <Typography variant="h3">{title}</Typography>
            </Box>
            <Box marginTop={2}>
                <Typography variant="body1">{description}</Typography>
            </Box>
        </Paper>
    )
}

export default Feature
