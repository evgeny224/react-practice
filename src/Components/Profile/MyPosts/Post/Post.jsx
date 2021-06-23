import React from "react";
import style from "./Post.module.css";

const Post = () => {
    return (
                <div className={style.item}>
                    <img src="http://cs622426.vk.me/v622426834/409d/baLqspYwi84.jpg" alt="avatar"/>
                    post 1
                    <div> 
                        <span>like</span>
                    </div>
                
                </div>
    )
}

export default Post;