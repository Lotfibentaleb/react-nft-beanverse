import {Box, Typography} from '@material-ui/core'
import useStyles from './Plush.styles'

const Plush = ({image, title, description, ...props}) => {
    const classes = useStyles()

    return (
        <Box className={classes.root} {...props}>
            <Box>
                <img src={image} alt={title} className={classes.image} />
            </Box>
            <Box className={classes.textContainer}>
                <Box marginTop={4}>
                    <Typography variant="h3">{title}</Typography>
                </Box>
                <Box marginTop={2}>
                    <Typography variant="body1">{description}</Typography>
                </Box>
            </Box>
        </Box>
    )
}

export default Plush
