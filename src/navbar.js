/**
 * Created by jj on 2/3/17.
 */
import React, { Component } from 'react';

import Navlistitem from './navlistitem'

class Navbar extends Component {
    constructor(props) {
        super(props)
        this.handleInputBoxChange = this.handleInputBoxChange.bind(this);

    }
    handleInputBoxChange(event) {
        console.log('event: ', event)
    }


    render() {
        return (
            <div>
            <h1>Navbar placement</h1>
                <Navlistitem myprop = 'hahahah'/>
                <input onChange={this.handleInputBoxChange} />
            </div>
        )
    }

}



export default Navbar