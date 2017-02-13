/**
 * Created by jj on 2/12/17.
 */

import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'

const RedditSearch = (props) => {
    return (
        <Card className="col-md-6 col-xs-12 Project-Card">
            <CardMedia>
                <img src={props.imageurl} />
            </CardMedia>
            <CardTitle
                title="Reddit Search"
                subtitle="A one-column UI-friendly Reddit search interfact that allows users to filter live search results"
            />
            <CardText>
                <li>Designed and developed application from scratch using Angular.js, Angular-Material, Bootstrap, Node/Express</li>
            </CardText>
            <CardActions>
                <a
                    href="http://tryredditsearch.herokuapp.com/"
                    target ="_blank">
                    <i className="fa fa-eye fa-3x"></i>
                </a>
                <a href="http://github.com/JonathanCMitchell/Rds"
                   target ="_blank">
                    <i className="fa fa-github fa-3x"></i>
                </a>
            </CardActions>
        </Card>
    )
};



export default RedditSearch