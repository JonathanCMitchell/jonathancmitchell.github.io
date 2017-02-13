/**
 * Created by jj on 2/12/17.
 */
import React from 'react'
import { Card, CardHeader, CardMedia, CardTitle, CardText, CardActions } from 'material-ui/Card'

const Omakase = (props) => {
    return (
        <Card className="col-md-6 col-xs-12 Project-Card">
            <CardMedia>
                <img src={props.imageurl} />
            </CardMedia>
            <CardTitle
                title="Omakase"
                subtitle="An app for ranking dish items locally"
            />
            <CardText>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
                <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
            </CardText>
            <CardActions>
                <a href="http://tryomakase.herokuapp.com">
                    <i className="fa fa-eye fa-3x"></i>
                </a>
                <a href="https://github.com/Omakaseinc/omakase">
                    <i className="fa fa-github fa-3x"></i>
                </a>
            </CardActions>
        </Card>
    )
};



export default Omakase