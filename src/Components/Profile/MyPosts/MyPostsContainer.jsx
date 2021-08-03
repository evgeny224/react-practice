import { connect } from "react-redux";
import { addPostActionCreator, onPostCangeActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


    let mapStateToProps = (state) => {
        
        return {
            postsData: state.profilePage.postsData,
            newPostText: state.profilePage.newPostText
        }
    }

    let mapDispatchToProps = (dispatch) => {
        return {
            addPost: () => {
                dispatch(addPostActionCreator());
            },
            updateNewPostText: (text) => {
                dispatch(onPostCangeActionCreator(text));
            }
        }
    }

    let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts);

export default MyPostsContainer;