import React, { useContext } from 'react'
import { TiDelete } from 'react-icons/ti'
import { PostsContext } from '../store/Posts-store'

export default function Post({post}) {

  const {deletePost} = useContext(PostsContext)

  return (
    <>
        <div className="card card-custom" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{post.title}
                  <span className='badge-custom' onClick={()=>deletePost(post.id)}>
                    <TiDelete />
                    </span>
                </h5>
                <p className="card-text">{post.body}</p>
                {post.tags.map(tag=><span className='badge text-bg-primary'>{tag}</span>)}
            </div>
            <div className="card-footer text-body-secondary">
            2 days ago
            </div>
        </div>
    </>
  )
}
