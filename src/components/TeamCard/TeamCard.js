import {Box, Typography} from '@material-ui/core'
import useStyles from './TeamCard.styles'

const TeamCard = ({image, name, title, iconImgs, ...props}) => {
    const classes = useStyles()

    return (
        <Box className={classes.root} {...props}>
            <Box>
                <img src={'/images/' + image} alt={title} className={classes.image} />
            </Box>
            <Box className={classes.textContainer}>
                <Box marginTop={1}>
                    <Typography variant="h4">{name}</Typography>
                </Box>
                <Box marginTop={1}>
                    <Typography variant="body2">{title}</Typography>
                </Box>
            </Box>
            <Box className={classes.iconGroup} mt={2}>
                {
                    iconImgs.map((item) => {
                        return (
                            <img className={classes.iconImg} src={'/images/' + item} alt="team" />
                    )})
                }
            </Box>
        </Box>
    )
}

export default TeamCard
