/**
 * Created by jj on 2/12/17.
 * Creates portfolio component where project files are rendered
 */
import React, { Component } from 'react'
import Pushlens from './Projects/Pushlens'
import GameReviewApi from './Projects/GameReviewApi/GameReviewApi'
import GameReviewApiImage from './Projects/GameReviewApi/game-review-api.png'
import GameReviewApiIcon from './Projects/GameReviewApi/console_games_API_pic.png'
import { Link } from 'react-router'

class Portfolio extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div>
                <p>This is my portfolio</p>
                <Pushlens />
                <a href="http://google.com">
                    <i className="fa fa-github"></i>
                    </a>
                <GameReviewApi
                    imageurl={GameReviewApiImage}
                    iconurl={GameReviewApiIcon}
                />
            </div>
        )

    }
}

export default Portfolio