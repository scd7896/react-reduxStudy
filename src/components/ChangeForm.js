import React from 'react'

import Dialog from '@material-ui/core/Dialog'

const ChangeForm = ({mode, nowId,users, modeRead,onUpdate = f=>f})=>{
    const target = users.filter((e)=> e.id === nowId)
    let name,age,date
    const clickAdd = (e)=>{
        e.preventDefault();
        name = name.value
        age = age.value
        date = date.value
        onUpdate(target[0].id,name,age,date)
        modeRead()
    }
    return(
        <Dialog open = {mode === 'change' ? true : false}>
            <form>

            <input ref = {input => name = input}
                type = 'text'
                placeholder = {target[0].name} required/>
            <input ref = {input => age = input}
                type = 'text'
                placeholder ={target[0].age} required/>
            <input ref = {input => date = input}
                type = 'text'
                placeholder ={target[0].age} required/>
            <button onClick={clickAdd}>추가</button>
        </form>
        </Dialog>
    )
}

export default ChangeForm;