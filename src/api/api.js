import * as axios from "axios";



//Создаем отдельный экземпляр axios
    const instance  = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers: {
            "API-KEY" : "9bb3ca7d-cf57-4df4-b29a-d37090202339"
        },
    })

    export const userAPI = {
        getUsers (currentPage = 1, pageSize = 10) {
            return instance.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => {
                return response.data;
            })
        },
        getUnfollow (users) {
            return instance.delete(`follow/${users}`)
        },
        getFollow (users) {
            return instance.post(`follow/${users}`)
        },
        getProfile (userId) {
            return instance.get(`profile/` + userId)
        },
        
    }

    export const authAPI = {
        me () {
            return instance.get(`auth/me`)
        }
        
    }

