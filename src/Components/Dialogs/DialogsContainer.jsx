import { addMessageActionCreator, onMessageChangeActionCreator} from "../../redux/message-reducer";
import Dialogs from "./Dialogs";
import { connect } from "react-redux";


    

// const DialogsContainer = () => {

//     return(
//         <StoreContext.Consumer>
//             {
//             (store) => {
//                 let state = store.getState().messagePage;

//                 let addMessage = () => {
//                     store.dispatch(addMessageActionCreator());
//                 }

//                 let onMessageChange = (text) => {
//                     store.dispatch(onMessageChangeActionCreator(text));
//                 }

//             return <Dialogs     addMessage = {addMessage}
//                                 onMessageChange = {onMessageChange}
//                                 state = {state}
//             />
//             }
//         }
//         </StoreContext.Consumer>
//     )
// }
    

    let mapStateToProps = (state) => {
        return {
            state: state.messagePage
        }
    }

    let mapDispatchToProps = (dispatch) => {
        return {
            addMessage: () => {
                dispatch(addMessageActionCreator());
            },
            onMessageChange: (text) => {
                dispatch(onMessageChangeActionCreator(text));
            }

        }
    }

    let DialogsContainer = connect (mapStateToProps, mapDispatchToProps) (Dialogs);

export default DialogsContainer;