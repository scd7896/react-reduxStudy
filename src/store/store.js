export const arrays = (state = [], action)=>{
    switch(action.type){
        case 'INSERT':
            return [
                ...state,
                array({}, action)
            ]
        case 'UPDATE':
            return state.map(
                e=> array(e, action)
            )
        case 'DELETE' :
            return state.filter(
                c => c.id !== action.id
            )
        default :
            return state
    }
}

export const array = (state = {}, action)=>{
    switch(action.type) {
        case 'INSERT' :
            
            return {
                id : action.id,
                name : action.name,
                age : action.age,
                date : action.date
            }
        case 'UPDATE' :
            console.log(action)
            return (state.id !== action.id)?
                state :
                ({  
                    ...state,
                    id: action.id,
                    age : action.age,
                    name : action.name,
                    date : action.date
                })
        default :
            return state       
    }   
}
export const nowId = (state = '', action)=>{
    switch(action.type){
        case 'CHANGE' :
            return action.id
        default :
            return state
    }
}

export const mode = (state = 'read', action)=>{
    switch(action.type) {
        case 'READ':
            return 'read'
        case 'CHANGE' :
            return 'change'
        default :
            return state
    }
}