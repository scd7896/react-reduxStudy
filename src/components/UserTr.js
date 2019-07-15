import React from 'react'
import User from './User'
const UserTr = ({users =[], mode,onRemove =f=>f ,onUpdate =f=>f, modeChange =f=>f, modeRead = f=>f}) =>{
    console.log(mode)
    return(
        <table>
            <tbody>  
                <tr>
                    <td>
                    id
                    </td>
                    <td>
                    이름
                    </td>
                    <td>
                    나이
                    </td>
                    <td>
                    생일
                    </td>
                </tr>
                {(users.length === 0) ?
                    <p>유저가 없습니다 추가해주세요</p> :
                    users.map((user,i) =>
                        <User key ={i} user = {user} onRemove ={()=>onRemove(user.id)}
                       mode = {mode} modeChange = {()=>modeChange(user.id)} 
                       modeRead = {()=>modeRead()}/> ) }  
            </tbody>
        </table>
    )
}


export default UserTr