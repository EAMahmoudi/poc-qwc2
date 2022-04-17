// import logo from './logo.svg';
import './App.css';
import React from 'react';
import ReactDOM from 'react-dom';
import StandardApp from './qwc2-demo-app/qwc2/components/StandardApp';
import appConfig from './qwc2-demo-app/js/appConfig';
import '../icons/build/qwc2-icons.css';


function App() {
  return (
      <StandardApp appConfig={appConfig}/>
  );
}

export default App;
