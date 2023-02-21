import React from "react";
import postItems from './posts-item.json';
import PostItem from "./post-item";

const PostList = () => {
    return (
        <div className=" align-items-start ">
            {
                postItems.map(post =>
                    <PostItem post={post}/>)
            }
        </div>
    )
}
export default PostList;