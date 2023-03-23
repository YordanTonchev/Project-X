import { useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import * as seatService from './services/seatService'
import { AuthContext } from './contexts/AuthContext';
import * as authService from './services/authService';

import { Catalogue } from "./components/Catalogue/Catalogue";
import { OfferSeat } from "./components/OfferSeat/OfferSeat";
import { Details } from "./components/Details/Details";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";

import { Home } from "./components/Home/Home";
import { Login } from "./components/Login/Login";
import { Register } from "./components/Register/Register";



function App() {
  const navigate = useNavigate();
  const [seats, setSeats] = useState([]);
  const [auth, setUser] = useState({});

  useEffect(()=> {
    seatService.getAll()
      .then(result => {
        setSeats(result);
      })
  }, []);
  const onCreateSeatSubmit = async (data) =>{
    const newSeat = await seatService.create(data);

    //add newSeat to state
    setSeats(state => [...state, newSeat])

    //redirect to catalogue
    navigate('/catalogue')
  }
  const onLoginSubmit = async (data) =>{
    
    const result = await authService.login(data);
    console.log (result)
  }
  return (
    <AuthContext.Provider value={{onLoginSubmit}}>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register/>} />
            <Route path='/offer-seat' element={<OfferSeat onCreateSeatSubmit={onCreateSeatSubmit}/>} />
            <Route path='/catalogue' element={<Catalogue seats={seats}/>} />
            <Route path='/catalogue/:seatId' element={<Details />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
}

export default App;
