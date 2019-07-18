import {connect} from 'react-redux'
import {deleteUser, insertUser, updateUser, modeChange, modeRead} from '../action/action'
import UserTr from './UserTr'
import UserInsert from './UserInsert'
import ChangeForm from './ChangeForm'

export const UserList = connect(
    state =>({
        users : [...state.arrays],
    }),
    dispatch =>
    ({
        onRemove(id){
            dispatch(deleteUser(id))
        },
        modeChange(id){
            dispatch(modeChange(id))
        },
       
    })
)(UserTr)

export const AddForm = connect(
    null,
    dispatch=>
    ({
        onInsert(id,name,age,date){
            dispatch(insertUser(id,name,age,date))
        }
    })
)(UserInsert)

export const ChangeUser = connect(
    state=>({
        mode: state.mode,
        nowId : state.nowId,
        users : state.arrays
    }),
    dispatch => ({
        onUpdate(id,name,age,date){
            dispatch(updateUser(id,name,age,date))
        },
        modeRead(){
            dispatch(modeRead())
        }
    })
)(ChangeForm)