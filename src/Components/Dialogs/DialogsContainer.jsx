import React from "react";
import { addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";


    

const DialogsContainer = (props) => {

    let state = props.store.getState().messagePage;

    
    let addMessage = () => {
        props.store.dispatch(addMessageActionCreator());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(onMessageChangeActionCreator(text));
    }

    return(

        <Dialogs    addMessage = {addMessage}
                    onMessageChange = {onMessageChange}
                    state = {state}
        />
    )
}

export default DialogsContainer;