import React from 'react'
const User = ({user, onRemove, modeChange}) =>{
    return(
        <tr>
                <td>
                    {user.id}
                </td>
                <td>
                    {user.name}
                </td>
                <td>
                    {user.age}
                </td>
                <td>
                    {user.date}
                </td>
                <td>
                    <button onClick ={onRemove}>삭제</button>
                </td>
                <td>
                    <button onClick ={modeChange}>수정</button>
                </td>
                
            </tr>
    )
}
export default User;