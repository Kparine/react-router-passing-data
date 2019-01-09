import React from 'react'
import {Redirect} from 'react-router-dom'



const ViewPost = props =>
  <div>
    {
      props.post
      ? <>
        <div>{props.post.id}</div>
        <div>{props.post.content}</div>
      </>
      : <Redirect to='/'/>
    }
  </div>

export default ViewPost