/**
 * Created by jj on 2/12/17.
 * Creates portfolio component where project files are rendered
 * TODO: resize GameReviewApi wrapper
 */
import React, { Component } from 'react'
import Pushlens from './Projects/Pushlens'
import GameReviewApi from './Projects/GameReviewApi/GameReviewApi'
import GameReviewApiImage from './Projects/GameReviewApi/game-review-api.png'
import GameReviewApiIcon from './Projects/GameReviewApi/console_games_API_pic.png'
import Divider from 'material-ui/Divider'
class Portfolio extends Component {
    constructor(props) {
        super(props)
    }


    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8 col-md-offset-2">
                        <Pushlens />
                        <GameReviewApi
                        imageurl={GameReviewApiImage}
                        iconurl={GameReviewApiIcon}
                        />

                        <GameReviewApi
                        imageurl={GameReviewApiImage}
                        iconurl={GameReviewApiIcon}
                        />
                        <Divider/>

                        <GameReviewApi
                        imageurl={GameReviewApiImage}
                        iconurl={GameReviewApiIcon}
                        />

                        <GameReviewApi
                        imageurl={GameReviewApiImage}
                        iconurl={GameReviewApiIcon}
                        />
                    </div>
                </div>
            </div>
        )

    }
}

export default Portfolio