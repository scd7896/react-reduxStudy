import React from 'react';
import {UserList , AddForm, ChangeUser} from './components/LinkRedux'
import {store} from './index'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      mode :''
    }
  }
  
  render(){
    const mode = store.getState().mode
    return (
      <div className="App">
          <UserList />
          <AddForm />
          <ChangeUser />
      </div>
    );
  }
}

export default App;
