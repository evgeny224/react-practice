import { connect } from "react-redux";
import { addPostActionCreator, onPostCangeActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";

// const MyPostsContainer = () => {
    
//     return (
//         <StoreContext.Consumer>
//             {(store) => {
//                 let state = store.getState().profilePage;

//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 }

//                 let onPostCange = (text) => {
//                     store.dispatch(onPostCangeActionCreator(text));
//                 }

//                 return <MyPosts     updateNewPostText = {onPostCange} 
//                                     addPost = {addPost} 
//                                     postsData = {state.postsData} 
//                                     newPostText = {state.newPostText}/>
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

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