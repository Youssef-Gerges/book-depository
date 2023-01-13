import Footer from '@components/Footer';
import Nav from '@components/Nav';
import router from '@utils/router';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { Outlet, RouterProvider } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <Nav />
      </ProSidebarProvider>
      <Outlet />
      <ToastContainer />
      <Footer />
    </div>
  );
}

export default App;
