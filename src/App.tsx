import Footer from '@components/Footer';
import Nav from '@components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
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
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
