/**
 * Created by jj on 2/12/17.
 * Display for GameReviewApi component
 */
import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'

const GameReviewApi = (props) => {
    return (
        <div>
            <Card>
                <CardHeader
                    title="Game Review API"
                    subtitle="An API with 16000 ign game reviews"
                    avatar={props.iconurl}
                />
                <CardMedia
                    overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
                >
                    <img src={props.imageurl} />
                </CardMedia>
                <CardTitle
                    title="Game Review API"
                    subtitle="Card subtitle"
                />
                <CardText>

                    <ul>
                        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                        <li>Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.</li>
                        <li>Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.</li>
                        <li>Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.</li>
                    </ul>
                </CardText>
                    <CardActions>
                    <a href="http://gamereviewdocs.herokuapp.com">
                        <i className="fa fa-eye fa-3x"></i>
                    </a>
                    <a href="https://github.com/ConsoleGameApi">
                        <i className="fa fa-github fa-3x"></i>
                    </a>
                    </CardActions>
            </Card>

        </div>
    )
};



export default GameReviewApi