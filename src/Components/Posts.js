import React from 'react'
import Post from './Post'
import "../Style/posts.css"


const Posts = () => {
    return (
           <div className="posts">
           <Post></Post>
           <Post></Post>
           <Post></Post>
       </div>

    )
}

export default Posts