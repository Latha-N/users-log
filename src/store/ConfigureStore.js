import { createStore, combineReducers, applyMiddleware } from 'redux'
import registerReducer from '../reducers/registeredUsers'

const configureStore = () => {
	const store = createStore(
		combineReducers({
			userAuth: registerReducer,
		})
		
	)

	return store
}

export default configureStore
