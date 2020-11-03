import {useEffect,useState,useCallback} from 'react';

import {useSelector} from 'react-redux';

import store from './models/index';



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
    <div className="App">
     
      <h2>目前的值是：{count}</h2>

      <button onClick={addCount}>+</button>

      <button onClick={subCount}>-</button>

    </div>
  );
}



export default App;
