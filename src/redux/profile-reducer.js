const ADD_TEXT = "ADD-TEXT";
const UPADATE_NEW_POST_TEXT = "UPADATE-NEW-POST-TEXT";

let initialState = {
    postsData: [   
        {id: 1, message:"Hello World!", likes: 4},
        {id: 2, message:"It is my favorite day.", likes: 1},
        {id: 3, message:"I am glad to see you.", likes: 2},
        {id: 4, message:"Me too!", likes: 5},
        {id: 5, message:"How knows that man?", likes: 6},
    ],
    newPostText: "My-Information"
}

const profileReducer = (state = initialState, action) => {

    switch(action.type){
        case ADD_TEXT: {
            let newPost = {
                id:6,
                message: state.newPostText,
                likes: 0,
            };
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPADATE_NEW_POST_TEXT: {
            let stateCopy = {...state};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default: 
            return state;
    }

}

export const addPostActionCreator = () => ({ type: ADD_TEXT });

export const onPostCangeActionCreator = (text) =>   ({ type: UPADATE_NEW_POST_TEXT, newText: text });

export default profileReducer;