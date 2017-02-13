/**
 * Created by jj on 2/12/17.
 * TODO: Add image for traffic sign classifier project
 * TODO: Add image udacity's student portfolio
 * TODO: Fix image scaling because it is too big
 * TODO: Include anchor tag inside cardactions with medium icon and medium blog post
 */

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
                title="Traffic Sign Classifier"
                subtitle="Classify Traffic Signs from more than 40 classes in a German Traffic Sign Dataset of 50,000 32x32 images"
            />
            <CardText>
                <li>Implemented a LeNet-like Convolutional Neural Network using TensorFlow, Numpy, Scikit, Pandas</li>
                <li>Utilized normalization, data creation, regularization methods to increase accuracy</li>
            </CardText>
            <CardActions>
                <a href="http://github.com/JonathanCMitchell/TrafficSignClassification"
                   target ="_blank">
                    <i className="fa fa-github fa-3x"></i>
                </a>
            </CardActions>
        </Card>
    )
};



export default RedditSearch
