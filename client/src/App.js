import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import './App.css';
import SignUp from './pages/SignUp';
import AddPhoto from './pages/AddPhoto';
import AddRole from './pages/AddRole';
import Verify from './pages/Verify';

function App() {
  return (
    <div>
      <TransitionGroup>
        <CSSTransition
          key={window.location.key}
          classNames="page"
          timeout={500}
        >
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/addPhoto" element={<AddPhoto />} />
            <Route path="/addRole" element={<AddRole />} />
            <Route path="/verify" element={<Verify />} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
    </div>
  );
}

export default App;
