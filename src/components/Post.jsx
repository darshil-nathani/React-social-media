import React from 'react'

export default function Post({post}) {
  return (
    <>
        <div className="card card-custom" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="card-title">{post.title}
                  <span className='position-absolute top-0 start-100 transalate-middle badge rounded-pill bg-danger'>
                    {post.reaction}
                    <span className='visually-hidden'>unreaded message</span>
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
