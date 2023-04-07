import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './contexts/AuthContext';
import { SeatProvider } from './contexts/SeatContex';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


import { Catalogue } from "./components/Catalogue/Catalogue";
import { OfferSeat } from "./components/OfferSeat/OfferSeat";
import { Details } from "./components/Details/Details";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Logout } from './components/Logout/Logout';
import { Register } from "./components/Register/Register";
import { Edit } from './components/Edit/Edit';
import { RouteGuard } from './components/Common/RouteGuard';
import { SeatOwner } from './components/Common/SeatOwner';



function App() {
  return (
    <AuthProvider>
      <SeatProvider>
        <div id="box">
          <ToastContainer />
          <Header />
          <main id="main-content">
            <Routes>
              <Route path='/' element={<Home/>} />
              <Route path='/login' element={<Login />} />
              <Route path='/register' element={<Register/>} />
              <Route path='/catalogue' element={<Catalogue/>} />
              <Route path='/catalogue/:seatId' element={<Details />} />
              
              <Route element = {<RouteGuard/>}>
                <Route path='/catalogue/:seatId/edit' element={
                  <SeatOwner>
                    <Edit />
                  </SeatOwner>
                } />
                <Route path='/offer-seat' element={<OfferSeat />} />
                <Route path='/logout' element={<Logout/>} />
              </Route>
              
            </Routes>
          </main>
          <Footer />
        </div>
      </SeatProvider>
    </AuthProvider>
  );
}

export default App;
