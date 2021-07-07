import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const MyPosts = (props) => {


    let PostsElements = props.postsData.map( element => <Post message={element.message} likes={element.likes} />)
    
    return (
        
        <div className={style.postsBlock}>
            <h3>My posts</h3>
            <div>
                <textarea ></textarea>
            </div>
            <div className={style.button}>
                <button>Добавить пост</button>
            </div>
            <div>New post</div>
                {PostsElements}
        </div>
    )
}

export default MyPosts;