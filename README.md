## 리액트 리덕스를 공부하기 위해 더미데이터를 이용해서 간단한 CRUD 시스템

index.js에서 초기 스테이트 값을 만들어서 간단하게 더미데이터를 만들고 내부에서 수정, 삭제, 조회, 추가를 만들었다.

<Provider > 라는 리액트 리덕스에서 제공하는 컴포넌트를 사용해서 그 밑에서 connect를 사용 할 수 있게 끔 만들었고 , app.js 에서는 단순히
 
리덕스와 컴포넌트를 연결하는 함수들을 호출해서 불러 냈었다.  

ReduxLinked.js파일은 쉽게 연결만을 담당을 하고, connect함수에는 두 가지를 받아서 인자로 전달해서 부르게 된다.
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

ChangeUser는 외부에서 이 함수를 부르면 ChangeForm을 store에서 사용되는 state와 dispatch행동을 props로 던져주면서 컴포넌트를 실행하게 된다.
