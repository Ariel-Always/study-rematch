import {useEffect,useState,useCallback} from 'react';

import {useSelector} from 'react-redux';

import {HashRouter as Router,Switch,Route} from 'react-router-dom';

import store from './models/index';

import Login from './containers/Login';



function App() {

  const state = useSelector(state=>state);

  const {count} = state;

  const {dispatch} = store;

  console.log(state);

  const addCount = useCallback(()=>{

    dispatch.count.addCount(1)

  },[]);

  const subCount = useCallback(()=>{

    dispatch.count.subCount(1)

  },[]);

  return (
    <Switch>

      <Route path={'/'} component={Login}></Route>    

    </Switch>
  );
}



export default App;
