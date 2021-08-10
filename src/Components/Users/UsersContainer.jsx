import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, setCurrentPage, setTotalUsersCount, toggleIsFetching } from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../Common/Preloader/Preloader";
import { userAPI } from "../../api/api";

class UsersContainer extends React.Component {
    
    
    componentDidMount(){
        this.props.toggleIsFetching(true);
        userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data =>{
            debugger;
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
        this.props.setTotalUsersCount(data.totalCount);
    })
}

onPageChanged = (pageNumber) => {
    this.props.toggleIsFetching(true);
    this.props.setCurrentPage(pageNumber);
    userAPI.getUsers(pageNumber, this.props.pageSize).then(data =>{
        this.props.toggleIsFetching(false);
        this.props.setUsers(data.items);
    })
}



render(){

    return (
        <>
            { this.props.isFetching ? <Preloader /> : null }
            <Users  totalUsersCount = {this.props.totalUsersCount}
                    pageSize = {this.props.pageSize}
                    currentPage = {this.props.currentPage}
                    onPageChanged = {this.onPageChanged}
                    unfollow = {this.props.unfollow}
                    follow = {this.props.follow}
                    users = {this.props.users}

            />
        </>
    )
}
}

//mapStateToProps Функция из которой буруться только нужные части для перерисовки компонента

    const mapStateToProps = (state) => {
        return {
            users: state.usersPage.users,
            pageSize: state.usersPage.pageSize,
            totalUsersCount: state.usersPage.totalUsersCount,
            currentPage: state.usersPage.currentPage,
            isFetching: state.usersPage.isFetching,
        }
    }

    // const mapDispatchToProps = (dispatch) => {
    //     return {
    //         follow: (userId) => {
    //             dispatch(followAC(userId));
    //         },
    //         unfollow: (userId) => {
    //             dispatch(unfollowAC(userId));
    //         },
    //         setUsers: (users) => {
    //             dispatch(setUsersAC(users));
    //         },
    //         setCurrentPage: (pageNumber) => {
    //             dispatch(setCurrentPageAC(pageNumber))
    //         },
    //         setTotalUsersCount: (totalCount) => {
    //             dispatch(setTotalUsersCountAC(totalCount));
    //         },
    //         toggleIsFetching: (isFetching) => {
    //             dispatch(toggleIsFetchingAC(isFetching));
    //         }
    //     }
    // }

// Вместо mapDispatchToProps создаем прямые ссылки 

    export default connect (mapStateToProps, { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, })(UsersContainer);