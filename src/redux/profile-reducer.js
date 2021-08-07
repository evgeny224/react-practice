const ADD_TEXT = "ADD-TEXT";
const UPADATE_NEW_POST_TEXT = "UPADATE-NEW-POST-TEXT";
const SET_USER_PROFILE = "SET_USER_PROFILE";

let initialState = {
    postsData: [   
        {id: 1, message:"Hello World!", likes: 4},
        {id: 2, message:"It is my favorite day.", likes: 1},
        {id: 3, message:"I am glad to see you.", likes: 2},
        {id: 4, message:"Me too!", likes: 5},
        {id: 5, message:"How knows that man?", likes: 6},
    ],
    newPostText: "My-Information",
    profile: null,
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_TEXT: {
            let newPost = state.newPostText;
            return {
                ...state,
                newPostText: "",
                postsData: [...state.postsData, {id: 6, message: newPost, likes: 0}]
            };
        }
        case UPADATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state, profile: action.profile
            }
        }
        default: 
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_TEXT });

export const onPostCangeActionCreator = (text) => ({ type: UPADATE_NEW_POST_TEXT, newText: text });

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export default profileReducer;