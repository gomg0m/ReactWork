import React, { Component, useState } from 'react';
import Menubar from './hoc/Menu/Menubar.js';
import Page from './hoc/Page/Page.js';
import { Route, Link, Switch } from 'react-router-dom';

function Home () {
  return (
    <div>
      <h2>Home</h2>
      Home...
    </div>
  )
};

function Route1 () {
  return (
    <div>
      <h2>Route1</h2>
      Route1...
    </div>
  )
};

function Route2 () {
  return (
    <div>
      <h2>Route2</h2>
      Route2...
    </div>
  )
};

export default function App() {

  const [page, setPage] = useState(0);

  const showPage = (no) => {
    let PageNo = no;
    setPage(PageNo);
  };

    return (
      <div>                 
        /*
        <Menubar showPage={showPage} />
        <Page page={page} />
        <ul>
          <li><Link to ="/">Home</Link></li>
          <li><Link to ="/router1">Router1</Link></li>
          <li><Link to ="/router2">Router2</Link></li>
        </ul>
        <Switch>
          <Route exact path="/"><Home></Home></Route>
          <Route path="/router1"><Route1></Route1></Route>
          <Route path="/router2"><Route2></Route2></Route>
          <Route path="/">Not Found Link</Route>
        </Switch>                
        */
      </div>


    );
  
  }

