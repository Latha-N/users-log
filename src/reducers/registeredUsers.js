const userInitialState = {
    register: {}
}

const allUsers = (state=userInitialState,action) =>{
    switch(action.type){
        // creating a user
        case 'ADD_USER' : {
            return {...state, register:{...action.payload}}
        }
    }
}

export default allUsers