import React from 'react'

const UserInsert = ({onInsert=f=>f}) =>{
    let id, age, name, date

    const submit = e =>{
        e.preventDefault();
        
        onInsert(id.value,name.value,age.value,date.value)
        id.value = ''
        age.value = ''
        name.value = ''
        date.value = ''
        name.focus()
    }
    return(
        <form onSubmit ={submit}>
            <input ref = {input => id = input}
                type = 'text'
                placeholder ="아이디" required/>
            <input ref = {input => name = input}
                type = 'text'
                placeholder ="이름" required/>
            <input ref = {input => age = input}
                type = 'text'
                placeholder ="나이" required/>
            <input ref = {input => date = input}
                type = 'text'
                placeholder ="생년월일" required/>
            <button>추가</button>
        </form>
    )
}
export default UserInsert;