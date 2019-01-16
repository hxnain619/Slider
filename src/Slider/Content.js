import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import red from '@material-ui/core/colors/red';
import FavoriteIcon from '@material-ui/icons/Favorite';

import Data from '../db.json';

const styles = () => ({
    card: {
        maxWidth: 308,
        margin: 26,
        display: 'inline-block',
        maxHeight: 500
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    actions: {
        display: 'flex',
    },
    avatar: {
        backgroundColor: red[500],
    }
})
class Content extends React.Component {
    constructor(props) {
        super(props);
    }

    ColorChange = (e) => {
        var heart = e.currentTarget;
        if (heart.style.color !== 'red') {
            heart.style.color = 'red'
        } else {
            heart.style.color = 'grey'
        }

    }

    render() {
        const { classes } = this.props;
        const { cards } = Data;
        return (
            <div className={classes.slider}>
                {cards.map((data, i) => {
                    return (
                        <Card key={data.id}
                            className={classes.card}
                            id='card'
                            style={this.props.cardStyle}
                        >
                            <a
                                className='link'
                                href={data.href}
                            >

                                <CardMedia
                                    className={classes.media}
                                    image={data.image_url}
                                />
                                <CardHeader
                                    avatar={
                                        <Avatar aria-label="Recipe" className={classes.avatar}>
                                            R
                            </Avatar>}

                                    title={data.title}
                                    subheader={data.subtitle}
                                />
                                <CardContent className='text'>
                                    <Typography component="p">{data.text}</Typography>
                                </CardContent>
                            </a>
                            <CardActions className={classes.actions} disableActionSpacing>
                                <IconButton aria-label="Add to favorites" id={data.id}
                                >
                                    <FavoriteIcon
                                        onClick={(e) => this.ColorChange(e)} />
                                </IconButton>
                            </CardActions>
                        </Card>
                    )
                })
                }

            </div>
        )
    }
}
Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Content);
