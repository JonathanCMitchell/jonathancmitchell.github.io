/**
 * Created by jj on 2/12/17.
 * TODO: resize image so it fits nicely
 */
import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'

const LaneLineDetector = (props) => {
    return (
        <Card className="col-md-6 col-xs-12 Project-Card">
            <CardMedia>
                <img src={props.imageurl} />
            </CardMedia>
            <CardTitle
                title="Lane Line Detector"
                subtitle="Detect highway lane lines from a video stream"
            />
            <CardText>
                <li>Utilized OpenCV image analysis techniques to identify lines, including Hough Transforms and Canny Edge Detection</li>
                <li>Implemented line interpolation protocol to draw new lines or grab lines from cache</li>
            </CardText>
            <CardActions>
                <a href="https://youtu.be/Ha090kb7ZkI"
                   target ="_blank">
                    <i className="fa fa-youtube fa-3x"></i>
                </a>
                <a href="http://github.com/JonathanCMitchell/CarND-LaneLines-P1"
                   target ="_blank">
                    <i className="fa fa-github fa-3x"></i>
                </a>
            </CardActions>
        </Card>
    )
};



export default LaneLineDetector