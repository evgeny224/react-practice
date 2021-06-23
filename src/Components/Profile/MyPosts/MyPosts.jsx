import React from "react";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            My posts
            <div>New post</div>
                <Post message="Hello World!" likes="4"/>
                <Post message="It is my favorite day." likes="1"/>
                <Post message="I am glad to see you." likes="2"/>
                <Post message="Me too!" likes="5"/>
                <Post message="How knows that man?" likes="6"/>
            </div>
    )
}

export default MyPosts;