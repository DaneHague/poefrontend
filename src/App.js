import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import CurrencyPage from './features/currency/CurrencyPage';
import NavBar from './features/navbar/NavBar';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Currency" element={<CurrencyPage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
