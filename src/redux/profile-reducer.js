const ADD_TEXT = "ADD-TEXT";
const UPADATE_NEW_POST_TEXT = "UPADATE-NEW-POST-TEXT";

const profileReducer = (state, action) => {

    switch(action.type){
        case ADD_TEXT:
            let newPost = {
                id:6,
                message: state.newPostText,
                likes: 0,
            };
            state.postsData.push(newPost);
            state.newPostText = "";
            return state;
        case UPADATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default: 
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_TEXT });

export const onPostCangeActionCreator = (text) =>   ({ type: UPADATE_NEW_POST_TEXT, newText: text });

export default profileReducer;