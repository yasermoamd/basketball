import React from "react";
import PostCard from "../cardComponents/PostCard";


const PostCardList = ({ pagesVisited, postPerPage, posts}) => {

    return (
        <div>
            <PostCard 
                pagesVisited={pagesVisited} 
                postPerPage={postPerPage} 
                posts={posts} 
            />
        </div>
    )
}


export default PostCardList;