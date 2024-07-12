import React, { createContext, useReducer } from "react";


export const PostsContext = createContext({
    posts: [],
    addPost: () => {},
    deletePost: () => {},
  });

export default function PostsProvider({ children }) {
  const addPost = () => {

  };

  const deletePost = () => {

  };

  const postReducer = (currPosts, action) => {

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
}



const Default_post_list = [{
    id:'1',
    title:"darshil",
    body:"darshil project",
    reaction:"500",
    userId:"10",
    tags:["project","react"]
},
{
    id:'1',
    title:"darshil",
    body:"darshil project",
    reaction:"500",
    userId:"10",
    tags:["project","react"]
}
]
