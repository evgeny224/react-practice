import React from "react";
import Profile from "./Profile";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { connect } from "react-redux";
import { getUserProfile } from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class  ProfileContainer extends React.Component {

    componentDidMount (){
        debugger;
        let userId = this.props.match.params.userId;
        if(!userId){
            userId = 2;
        }
        this.props.getUserProfile(userId);
}
//Редеректим если пользователь не залогинен
        render(){

            return(
                <Profile {...this.props} profile = {this.props.profile}/>
            )
        }
}


let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
})

//Функция compose соеденяет все обработчики вместе

export default compose(
    connect (mapStateToProps, {getUserProfile}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)
