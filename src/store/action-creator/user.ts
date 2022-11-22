import {UserAction, UserActionTypes} from "../../types/user";
import {Dispatch} from "redux";
import axios from "axios";
//https://jsonplaceholder.typicode.com/users

export const fetchUsers = () => {
    return async (dispatch: Dispatch<UserAction>) => {
        try {
            dispatch({type: UserActionTypes.FETCH_USERS})
            const responce = await axios.get('https://jsonplaceholder.typicode.com/users')
            setTimeout(()=>{
                dispatch({type: UserActionTypes.FETCH_USERS_SUCCESS, payload: responce.data})
            }, 500)
        } catch (e) {
            dispatch({type: UserActionTypes.FETCH_USERS_ERROR, payload: 'error while loading'})
        }
    }
}
