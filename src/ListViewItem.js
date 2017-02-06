/**
 * Created by jj on 2/3/17.
 */
import React from 'react'

const ListViewItem = (props) => {
    console.log('handlefunctionchange : ', props.handleChange)
    return (
            <div>
            <li>{props.city}This is a list view item</li>
            <input onChange = {props.handleChange} />
            </div>

    )
};

export default ListViewItem