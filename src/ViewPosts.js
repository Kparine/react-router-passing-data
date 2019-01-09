import React from 'react'
import {Link} from 'react-router-dom'


const ViewPosts = ({posts, history}) =>
  <div>
    {
      posts.map(post => 
        <div key={post.id} onClick={()=> history.push(post.id)}>{post.content.slice(0,100)}...</div>)
    }
    <Link to='/new'>New</Link>
  </div>


export default ViewPosts