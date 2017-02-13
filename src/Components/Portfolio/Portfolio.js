/**
 * Created by jj on 2/12/17.
 * Creates portfolio component where project files are rendered
 * TODO: resize GameReviewApi wrapper
 * TODO: Make project images the same size, use the same rectangular cube to grab/ screenshot each
 * image from the web browser, or use photoshop and then delete the class on GameReviewApi component
 * TODO: Add a space between each component so they are not clustered together so closely
 */
import React, { Component } from 'react'
import './Portfolio.css'
import GameReviewApi from './Projects/GameReviewApi/GameReviewApi'
import GameReviewApiImage from './Projects/GameReviewApi/Gamereviewdocs_web.jpg'

import Omakase from './Projects/Omakase/Omakase'
import OmakaseImage from './Projects/Omakase/Omakase_web.jpg'

import RadarSensor from './Projects/RadarSensor/RadarSensor'
import RadarSensorImage from './Projects/RadarSensor/Antenna_project_web.jpg'

import LaneLineDetector from './Projects/LaneLineDetector/LaneLineDetector'
import LaneLineDetectorImage from './Projects/LaneLineDetector/lane_line_web.jpg'

import RedditSearch from './Projects/RedditSearch/RedditSearch'
import RedditSearchImage from './Projects/RedditSearch/reddit_web.jpg'

import TrafficSignClassifier from './Projects/TrafficSignClassifier/TrafficSignClassifier'
import TrafficSignClassifierImage from './Projects/TrafficSignClassifier/convnet_architecture_traffic_signs.jpg'

class Portfolio extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <TrafficSignClassifier
                        imageurl={TrafficSignClassifierImage}
                        />

                        <LaneLineDetector
                            imageurl={LaneLineDetectorImage}
                        />

                        <GameReviewApi
                        imageurl={GameReviewApiImage}
                        />

                        <Omakase
                        imageurl={OmakaseImage}
                        />

                        <RadarSensor
                        imageurl={RadarSensorImage}
                        />


                        <RedditSearch
                        imageurl={RedditSearchImage}
                        />
                    </div>
                </div>
            </div>
        )

    }
}

export default Portfolio