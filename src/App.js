import { useEffect, useState } from 'react';
import './App.css';
import fire from './config/fire';
import SignUp from './components/SignUp';
import { useHistory } from 'react-router-dom';

function App() {
  const [user, setUser]= useState();
  let history= useHistory();

  const authListener= () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user)
      }
      else {
        setUser(null)
      }
    })
  }

  useEffect(() => {
    authListener()
    return function cleanup() {
      fire.auth().signOut();
    }
  },[])
  return (
      <div className="App">
        {user? (history.push('/login')):(<SignUp />)}
      </div>
  );
}

export default App;
