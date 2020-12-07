import axios from 'axios'

export default class UserService {

    constructor() {
        this.apiHandler = axios.create({
            baseURL: 'http://localhost:5000/api/jobs',
            withCredentials: true
        })
    }

    getUserInfo = userId => this.apiHandler.get(`/getuser/${userId}`)
    editUserInfo = (userId, userInfo) => this.apiHandler.put(`/edituser/${userId}`, userInfo)
    deleteUser = userId => this.apiHandler.delete (`/delete/${userId}`)

} 