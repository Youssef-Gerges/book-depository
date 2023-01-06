import Nav from '@components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Footer from '@components/Footer';
import HorizontalScrollCard from '@components/HorizontalScrollCard';
import TextCard from '@components/TextCard';
import { Col, Row, Container } from 'react-bootstrap';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';

function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <Nav />
      </ProSidebarProvider>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
