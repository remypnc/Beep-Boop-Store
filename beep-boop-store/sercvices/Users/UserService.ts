import { api } from '../ServicesHelper'

 export const fetchUserData = (id:number) => {
    return api.get('/user/' + id).then((response) => response.data)
}