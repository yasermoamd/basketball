import React from "react";
import posts from '../../assets/data/posts.data.json';
import PostCard from "./PostCard";


const PostCardList = ({ minLength, maxLength}) => {

    return (
        <div>
            <PostCard minLength={minLength} maxLength={maxLength} posts={posts} />
        </div>
    )
}


export default PostCardList;