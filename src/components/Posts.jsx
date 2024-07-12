import React, { useContext } from 'react'
import Post from './Post'
import {PostsContext as postList} from '../store/Posts-store'

export default function Posts() {
  
  const{posts}=useContext(postList)
  console.log(posts);
  return (
    <>
      {posts.map((post) => <Post key={post.id} post={post}/>)}
    </>
  )
}
