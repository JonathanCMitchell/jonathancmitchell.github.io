import React from 'react'
import Paper from 'material-ui/Paper'

const Blog = (props) => {
    return (
        <Paper>
            <p>This is my blog</p>
        </Paper>
    )
};

export default Blog


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