export const insertUser = (id, name, age,date)=>
        ({
            type : 'INSERT',
            id,
            name,
            age,
            date
        })
    
export const updateUser = (id, name, age, date)=>
{
    return{
        type : 'UPDATE',
        id,
        name,
        age,
        date
    }
}
export const deleteUser = (id) =>{
    return{
        type : 'DELETE',
        id
    }
}

export const modeChange = (id) =>{
    return {
        type : 'CHANGE',
        id
    }
}

export const modeRead = ()=>{
    return {
        type :'READ'
    }
}