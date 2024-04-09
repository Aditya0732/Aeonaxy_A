import { Route, Routes } from 'react-router-dom';
import './App.css';
import SignUp from './pages/SignUp';
import AddPhoto from './pages/AddPhoto';
import AddRole from './pages/AddRole';
import Verify from './pages/Verify';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/addPhoto" element={<AddPhoto />} />
        <Route path="/addRole" element={<AddRole />} />
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </div>
  );
}

export default App;
