import Nav from '@components/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import './App.css';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Footer from '@components/Footer';

function App() {
  return (
    <div className="App">
      <ProSidebarProvider>
        <Nav />
      </ProSidebarProvider>
      <Footer />
    </div>
  );
}

export default App;
