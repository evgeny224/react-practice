import React from "react";
import Post from "./Post/Post";
import style from "./MyPosts.module.css"

const MyPosts = () => {

    let postsData = [   
                        {id: 1, message:"Hello World!", likes: 4},
                        {id: 2, message:"It is my favorite day.", likes: 1},
                        {id: 3, message:"I am glad to see you.", likes: 2},
                        {id: 4, message:"Me too!", likes: 5},
                        {id: 5, message:"How knows that man?", likes: 6},

]
    
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
                <Post message={postsData[0].message} likes={postsData[0].likes} />
                <Post message={postsData[1].message} likes={postsData[1].likes} />
                <Post message={postsData[2].message} likes={postsData[2].likes} />
                <Post message={postsData[3].message} likes={postsData[3].likes} />
                <Post message={postsData[4].message} likes={postsData[4].likes} />
        </div>
    )
}

export default MyPosts;