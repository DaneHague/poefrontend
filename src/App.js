import logo from './logo.svg';
import './App.css';
import { HashRouter as Router, Route, Switch, Routes, Navigate } from 'react-router-dom';
import HomePage from './features/home/HomePage';
import CurrencyPage from './features/currency/CurrencyPage';
import NavBar from './features/navbar/NavBar';
import EssencePage from './features/essence/EssencePage';


function App() {
  return (
    <>
    <Router>
      <NavBar />
      <Routes>
      <Route path="/" element={<Navigate replace to="/Home" />} />
        <Route path="/Home" element={<HomePage />} />
        <Route path="/Currency" element={<CurrencyPage />} />
        <Route path="/Essence" element={<EssencePage />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
