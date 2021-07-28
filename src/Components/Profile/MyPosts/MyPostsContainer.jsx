import React from "react";
import { addPostActionCreator, onPostCangeActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

const MyPostsContainer = (props) => {
    debugger;

    let state = props.store.getState().profilePage;


    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostCange = (text) => {
        props.store.dispatch(onPostCangeActionCreator(text));
    }
    
    return (<MyPosts    updateNewPostText = {onPostCange} 
                        addPost = {addPost} 
                        postsData = {state.postsData} 
                        newPostText = {state.newPostText}/>
    );
}

export default MyPostsContainer;