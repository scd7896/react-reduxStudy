import React from 'react';
import {UserList , AddForm, ChangeUser} from './components/LinkRedux'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state ={}
  }
 
  render(){
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
