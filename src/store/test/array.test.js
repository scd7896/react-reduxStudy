import {array} from '../store'
describe("array 리듀서" , ()=>{
    it("유저 추가 성공", ()=>{
        const state = {}
        const action = {
            type: 'INSERT',
            id :6,
            name :'멍멍이',
            age : 26,
            date :303030
        }
        const results = array(state, action)
        expect(results)
            .toEqual({
                id : 6,
                name : '멍멍이',
                age : 26,
                date :303030
            })
    })
    it("유저 수정 성공", ()=>{
        const state = {
            id : 6,
            name : '멍멍이',
            age : 26,
            date : 303030
        }
        const action = {
            type : 'UPDATE',
            name : '사랑스러운',
            age : 30,
            date : 305050
        }
        const results = array(state, action)
        expect(results)
            .toEqual({
                id : 6,
                name : '사랑스러운',
                age : 30,
                date : 305050
            })
    })
})