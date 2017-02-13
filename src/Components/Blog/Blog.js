import React, { Component } from 'react'
import './Blog.css'
import Paper from 'material-ui/Paper'
import FlatButton from 'material-ui/FlatButton'
import essay1 from './Essays/essay1'
import essay2 from './Essays/essay2'
import essay3 from './Essays/essay3'

class Blog extends Component {
    constructor(props) {
        super(props);
        this.renderEssay1 = this.renderEssay1.bind(this);
        this.renderEssay2 = this.renderEssay2.bind(this);
        this.renderEssay3 = this.renderEssay3.bind(this);
        this.state = {
                essay1: '',
                essay2: '',
                essay3: '',
                essay4: ''
        }
    }

    renderEssay1(e) {
    e.preventDefault();
        if (!this.state.essay1) {
            this.setState({
                essay1: essay1,
                essay2: '',
                essay3: ''
            })
        }
    }
    renderEssay2(e) {
        e.preventDefault();
        if (!this.state.essay2) {
            this.setState({
                essay1: '',
                essay2: essay2,
                essay3: ''
            })
        }
    }
    renderEssay3(e) {
        e.preventDefault();
        if (!this.state.essay3) {
            this.setState({
                essay1: '',
                essay2: '',
                essay3: essay3
            })
        }
    }

    render() {
        return (
            <div>
            <div>
                <Paper className="col-md-2">
                    <FlatButton onClick={this.renderEssay1}>Essay 1</FlatButton>
                    <FlatButton onClick={this.renderEssay2}>Essay 2</FlatButton>
                    <FlatButton onClick={this.renderEssay3}>Essay 3</FlatButton>
                </Paper>
            </div>

            <div>
                <div className="col-md-6  col-xs-12 col-md-offset-1">
                    {this.state.essay1}
                </div>
                <div className="col-md-6 col-xs-12 col-md-offset-1">
                    {this.state.essay2}
                </div>
                <div className="col-md-6 col-xs-12 col-md-offset-1">
                    {this.state.essay3}
                </div>
            </div>

            </div>
        )
    }
}

export default Blog
// Add proptypes!

/* Structure idea 1
*
* Link to paper, then expandable
*
* Paper
*   Heading at bottom
*   blog post under heading
*   Date
*   */

/* Structure idea2:

 * Left column links to blog posts
  * click on a post and it displays on the right hand side
 * Link to paper, then expandable
 *
 * posts look like:
 * Paper
 *   Heading at bottom
 *   blog post under heading
 *   Date
 *   */