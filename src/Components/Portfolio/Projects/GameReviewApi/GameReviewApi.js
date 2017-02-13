/**
 * Created by jj on 2/12/17.
 * Display for GameReviewApi component
 * TODO: Delete class on CardMedia tag inside component after images are all the same size
 *
 */
import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'

const GameReviewApi = (props) => {
    return (
            <Card className="col-md-6 col-xs-12 Project-Card">
                <CardMedia>
                    <img className="Project-media-imageShrink" src={props.imageurl} />
                </CardMedia>
                <CardTitle
                    title="Game Review API"
                    subtitle="An api of 18 thousand game reviews from ign"
                />
                <CardText>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                    <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                </CardText>
                    <CardActions>
                    <a href="http://gamereviewdocs.herokuapp.com"
                       target ="_blank">
                        <i className="fa fa-eye fa-3x"></i>
                    </a>
                    <a href="http://github.com/ConsoleGameApi"
                       target ="_blank">
                        <i className="fa fa-github fa-3x"></i>
                    </a>
                    </CardActions>
            </Card>
    )
};



export default GameReviewApi