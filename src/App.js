import { useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import {seatServiceFactory} from './services/seatService'
import { AuthProvider } from './contexts/AuthContext';


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

function App() {
  const navigate = useNavigate();
  const [seats, setSeats] = useState([]);
  const seatService = seatServiceFactory(); //auth.accessToken
  

  useEffect(() => {
    seatService.getAll()
      .then(result => {
        setSeats(result)
      })
  }, []);
  
  const onCreateSeatSubmit = async (data) =>{
    const newSeat = await seatService.create(data);

    //add newSeat to state
    setSeats(state => [...state, newSeat]);

    //redirect to catalogue
    navigate('/catalogue')
  }
  

  const onSeatEditSubmit = async (values) => {
    const result = await seatService.edit(values._id, values);
    //TODO change state
    setSeats(state => state.map(x => x._id === values._id ? result : x))
    navigate(`/catalogue/${values._id}`);
  }


  return (
    <AuthProvider>
      <div id="box">
        <Header />
        <main id="main-content">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/login' element={<Login />} />
            <Route path='/logout' element={<Logout/>} />
            <Route path='/register' element={<Register/>} />
            <Route path='/offer-seat' element={<OfferSeat onCreateSeatSubmit={onCreateSeatSubmit}/>} />
            <Route path='/catalogue' element={<Catalogue seats={seats}/>} />
            <Route path='/catalogue/:seatId' element={<Details />} />
            <Route path='/catalogue/:seatId/edit' element={<Edit onSeatEditSubmit={onSeatEditSubmit} />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthProvider>
  );
}

export default App;
