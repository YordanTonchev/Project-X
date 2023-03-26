import { useEffect, useState } from 'react';
import {Routes, Route, useNavigate} from 'react-router-dom';

import {seatServiceFactory} from './services/seatService'
import {authServiceFactory} from './services/authService';
import { AuthContext } from './contexts/AuthContext';
// import { useService } from './hooks/useService';

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
  const [auth, setAuth] = useState({});
  const seatService = seatServiceFactory(auth.accessToken);
  const authService = authServiceFactory(auth.accessToken)

  useEffect(() => {
    seatService.getAll()
      .then(result => {
        setSeats(result)
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
    try{
      //result from server with token
      const result = await authService.login(data);
      
      //store to state
      setAuth(result)

      navigate('/catalogue')
    }catch(error){
      //to do show on screen
      console.log('There is something wrong with your email or password')
    }
    
  };

  const onRegisterSubmit = async (values) =>{
    const{ rePassword, ...registerData} = values;
    if (rePassword !== registerData.password){
      return;
    }
    try{
      //result from server
      const result = await authService.register(registerData);
      
      //set to state
      setAuth(result);

      navigate('/catalogue')
    }catch(error){
      //to do show on screen
      console.log('There is something wrong')
    }
  };

  const onLogout = async () => {
    
    // from server
    // TODO: authorized request
    await authService.logout();

    //zero obj from client
    setAuth({});
    
  };

  const onSeatEditSubmit = async (values) => {
    const result = await seatService.edit(values._id, values);
    //TODO change state
    setSeats(state => state.map(x => x._id === values._id ? result : x))
    navigate(`/catalogue/${values._id}`);
  }

  const context = {
    onLoginSubmit,
    onRegisterSubmit,
    onLogout,
    userId : auth._id,
    token: auth.accessToken,
    userEmail: auth.email,
    //double-negation turns Truthy to Falsy then again to Truthy
    isAuthenticated: !!auth.accessToken,
  
  };

  return (
    <AuthContext.Provider value={context}>
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
    </AuthContext.Provider>
  );
}

export default App;
