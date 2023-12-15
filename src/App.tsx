import './App.css';
import Auth from './pages/Auth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <Auth />
      <ToastContainer />
    </>
  );
}

export default App;
