import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New post</div>
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
    )
}

export default MyPosts;