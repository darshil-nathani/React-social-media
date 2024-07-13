import React, { createContext, useReducer } from "react";


export const PostsContext = createContext({
    posts: [],
    addPost: () => {},
    deletePost: () => {},
  });

export default function PostsProvider({ children }) {
  const addPost = (userId, postTitle, postContent, postReaction, postTAgs) => {
    dispatchPosts({
      type:'ADD_POST',
      payload:{
          id:Date.now(),
          title:postTitle,
          body:postContent,
          reaction:postReaction,
          userId:userId,
          tags:postTAgs,
      },
    })
  };

  const deletePost = (postId) => {
    dispatchPosts({
      type:'DELETE_POST',
      payload:{
        postId,
      },
    })
  };

  const postReducer = (currPosts, action) => {
    if(action.type === 'DELETE_POST'){
    currPosts = currPosts.filter(post => post.id === action.payload.postId)
    }else if(action.type === 'ADD_POST')
    {
      currPosts = [action.payload, ...currPosts];
    }
    return currPosts;
  };

  const [posts, dispatchPosts] = useReducer(postReducer, Default_post_list);

  return (
    <PostsContext.Provider
      value={{
        posts,
        addPost,
        deletePost,
      }}
    >
      {children}
    </PostsContext.Provider>
  );
};



const Default_post_list = [{
    id:'1',
    title:"darshil",
    body:"darshil project",
    reaction:"500",
    userId:"10",
    tags:["project","react"]
},
{
    id:'',
    title:"darshil",
    body:"darshil project",
    reaction:"500",
    userId:"10",
    tags:["project","react"]
}
]
