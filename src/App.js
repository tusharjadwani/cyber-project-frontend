import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Form from './components/Form';
import Admin from './components/Admin';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<Form />} />
        <Route exact path='/admin' element={<Admin />} />
      </Routes>
    </Router>
  );
}

export default App;
