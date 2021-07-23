const registerInitialState={
    register:{},
    login:{}
}

const registerReducer = (state=registerInitialState, action) =>{
    switch(action.type) {
        //adding users to store
        case 'ADD_REGISTER' :{
            return {...state, register:{...action.payload}}
            
        }

        //creating login
        case 'ADD_LOGIN' : {
            // if(JSON.parse(localStorage.getItem('register')).email != action.payload.email){
            //     alert('mismatch')
            //     return false
            // }
        }

        default :{
            return {...state}
        }
    }
}

export default registerReducer