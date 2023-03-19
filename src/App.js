import './App.css';
import React, { useEffect, useState } from 'react';
import Login from './pages/Login/index';
import Chat from './pages/Chat/index';
import Loader from './components/Loader/index'
import useCookie from './hooks/useCookie';
import constant from './constant';
import Sidebar from "./components/Sidebar/index";
import io from 'socket.io-client'
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from './state/index'
import { getInfo } from './actions/user';


const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;
const socket = io.connect(process.env.REACT_APP_BASE_URL)

function LoggedIn() {
  const dispatch = useDispatch()
  const { connect, updateDetails } = bindActionCreators(actionCreators, dispatch)
  const state = useSelector(state => state)

  useEffect(() => {
    connect(socket.id)
    updateDetails()
    // })
  }, [])
  return (
    <React.Fragment>
      <Sidebar />
      <Chat />
    </React.Fragment>
  )
}

function App() {
  const state = useSelector(state => state)
  const [token, setToken, deleteToken] = useCookie(constant.keys.token);
  const [appLoaded, setAppLoaded] = useState(false);
  const [startLoadProgress, setStartLoadProgress] = useState(false);

  useEffect(() => {
    if (userPrefersDark) document.body.classList.add("dark-theme");
    stopLoad();
  }, []);

  const stopLoad = () => {
    setStartLoadProgress(true);
    setTimeout(() => setAppLoaded(true), 3000);
  };

  if (!appLoaded && token) return <Loader done={startLoadProgress} />;

  return (
    <React.Fragment>
      <div className="app">
        <p className="app__mobile-message"> Only available on desktop 😊. </p>
        <div className="app-content">

          {!token ? <Login /> :
            <LoggedIn />

          }
        </div>

      </div>
    </React.Fragment>
  );
}

export default App;
