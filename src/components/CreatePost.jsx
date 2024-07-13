import React, { useContext, useRef } from 'react'
import { PostsContext } from '../store/Posts-store';

export default function CreatePost() {
        const{addPost} = useContext(PostsContext);

        const userIdEle = useRef();
        const TitleEle = useRef();
        const ContentEle = useRef();
        const ReactionEle = useRef();
        const TagsEle = useRef();

        const handleSubmit = (event) =>{
            event.preventDefault();
            const userId = userIdEle.current.value;
            const postTitle = TitleEle.current.value;
            const postContent = ContentEle.current.value;
            const postReaction = ReactionEle.current.value;
            const postTAgs = TagsEle.current.value.split(" ");

            userIdEle.current.value = "";
            TitleEle.current.value = "";
            ContentEle.current.value = "";
            ReactionEle.current.value = "";
            TagsEle.current.value = "";

            addPost(userId, postTitle, postContent, postReaction, postTAgs);
        }

  return (
    <>
        <form action="#" method="post"  className="shadow p-4 rounded bg-light " onSubmit={handleSubmit}>
            <div className="form-body">
                <div className=" ">
                    <div className="form-group ">
                        <label className="control-label">User_Id</label>
                        <input type="text" name="User_Id" id="old" className="form-control" ref={userIdEle} placeholder="Enter your user id"/>
                    </div>
                    <div className="form-group  ">
                        <label className="control-label">Title</label>
                        <input type="text" name="Title" className="form-control" ref={TitleEle} placeholder="Title"/>
                    </div>
                    <div className="form-group ">
                        <label className="control-label">Content</label>
                        <textarea name="Content"  id="" className="form-control" ref={ContentEle} placeholder="Content"></textarea>
                    </div>
                    <div className="form-group ">
                        <label className="control-label">Reaction</label>
                        <input type="text" name="Reaction" id="old" className="form-control" ref={ReactionEle} placeholder="Reaction"/>
                    </div>
                    <div className="form-group ">
                        <label className="control-label">Tages</label>
                        <input type="text" name="Tages" id="old" className="form-control" ref={TagsEle} placeholder="Tages"/>
                    </div>
                </div>
            </div>
            <div className="form-group row mt-4">
                <div className="col text-center">
                    <button type="submit" className="btn btn-success btn-lg shadow-sm">Post</button>
                </div>
            </div>
        </form>
    </>
  )
}
