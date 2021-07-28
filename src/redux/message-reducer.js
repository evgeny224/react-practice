const ADD_MESSAGE = "ADD-MESSAGE";
const UPDATE_NEW_MESSAGE_TEXT = "UPDATE-NEW-MESSAGE-TEXT";

let initialState = {
    DialogsData: [ 
        {id: 1, name: "Eva", picture: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT24XtoREBBzSPEUzf0f4xVi6YnKS6yA0-rhKHbiAE-_oIAMzNSmrVPwuzN1d0ajPDaXj4&usqp=CAU"},
        {id: 2, name: "Olga", picture:"https://www.perunica.ru/uploads/posts/2011-10/1319832745_0_6065c_b70de565_l.jpg"},
        {id: 3, name: "Nick", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfNHQ78zty5ZpAoBPBARyRvoPOhIgXXch0yg&usqp=CAU"},
        {id: 4, name: "Petr", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSdkIiZXLQBb45Inw27EERnx1l-cLedtIZfNQ&usqp=CAU"},
        {id: 5, name: "Kir", picture:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyzX9moaxytlCCkDQtPF2hVKZBEmDJyhBgoA&usqp=CAU"},
        {id: 6, name: "Alex", picture:"https://picsy.ru/images/photos/1200/2/rys-avatarka-31358666.jpg"},
    ],
    MessageData: [     
        {id: 1, message: "Hello every one!"},
        {id: 2, message: "Hi!"},
        {id: 3, message: "Nice to meet you!"},
        {id: 4, message: "Thank you very mutch!"},
    ],
    newMessageText: "Message Text",
}

const messageReducer = (state = initialState, action) => {

    switch(action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id:5,
                message: state.newMessageText,
            };
            state.MessageData.push(newMessage);
            state.newMessageText = "";
            return state;
        case UPDATE_NEW_MESSAGE_TEXT:
            state.newMessageText = action.newMessage;
            return state;
            default:
                return state;
    }

}

export const addMessageActionCreator = () => ({ type: ADD_MESSAGE });

export const onMessageChangeActionCreator = (text) => ({ type: UPDATE_NEW_MESSAGE_TEXT, newMessage: text });

export default messageReducer;