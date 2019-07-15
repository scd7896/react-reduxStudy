import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux'
import {arrays, mode, nowId} from './store/store'

const initial= {
    arrays :[
        {
            id :1,
            name :'김태경',
            age :'25',
            date : '950917'
        },
        {
            id :2,
            name :'김서버',
            age :'23',
            date : '950444'
        },
        {
            id :3,
            name :'킹갓버',
            age :'21',
            date : '951117'
        }
    ],
    mode : 'read'
}
const store = createStore(
    combineReducers({arrays, mode, nowId}),
    (localStorage['redux-store']) ?
        JSON.parse(localStorage['redux-store']) :
        initial
)


try{
    store.subscribe (()=>{
        localStorage['redux-store'] = JSON.stringify(store.getState())
    })
}catch(exception){
    console.log(store.getState())
}

// store.dispatch(insertUser({
//     id :2,
//     name :'meeem',
//     age :'2221',
//     date : '951117'
// }))


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
