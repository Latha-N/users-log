import {createStore, combineReducers} from 'redux'
import allUsers from '../reducers/registeredUsers'

const configureStore = () =>{
    const store = createStore(
        combineReducers({
            users: allUsers
        })

    )

    return store
}

export default configureStore