import axios from 'axios'

export default class PreferencesService {

    constructor() {
        this.apiHandler = axios.create({
            // baseURL: `${process.env.REACT_APP_API_URL}/preferences`,
            baseURL: 'http://localhost:5000/api/preferences',
            withCredentials: true
        })
    }


    getPreferences = () => this.apiHandler.get('/allPreferences')
    savePreferences = (preferenceInfo, userId) => this.apiHandler.post(`/newPreferences/${userId}`, preferenceInfo)
    getOnePreference = preferencesId => this.apiHandler.get(`/preference/${preferencesId}`)
    editPreferences = (preferencesId, preferencesInfo) => this.apiHandler.put(`/editPreferences/${preferencesId}`, preferencesInfo)
}