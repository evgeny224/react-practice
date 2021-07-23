import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const MyPosts = (props) => {


    let PostsElements = props.postsData.map( element => <Post message={element.message} likes={element.likes} />)

    let AddingPost = React.createRef();

    const addPost = () => {
        props.addPost();
    }

    const onPostCange = () => {
        let text = AddingPost.current.value;
        props.updateNewPostText(text);
    }
    
    return (
        
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea onChange={onPostCange} ref={AddingPost} value={props.newPostText} ></textarea>
            </div>
            <div className={style.button}>
                <button onClick={addPost}>Добавить пост</button>
            </div>
            <div>New post</div>
                {PostsElements}
        </div>
    )
}

export default MyPosts;