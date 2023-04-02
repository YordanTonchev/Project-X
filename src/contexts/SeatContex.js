import {createContext, useContext, useEffect, useState } from "react";
import {useNavigate} from 'react-router-dom';
import {seatServiceFactory} from '../services/seatService'

export const SeatContext = createContext();

export const SeatProvider = ({
    children,
}) =>{
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
        navigate(`/catalogue/${values._id}`);// /catalogue
    }

    const deleteSeat = (seatId) =>{
        setSeats(state => state.filter(seat => seat._id !== seatId))
    }

    // func that takes something from state
    const getSeat = (seatId) =>{
        return seats.find(seat => seat._id === seatId)
    }
    const contextValues ={
        seats,
        onSeatEditSubmit,
        onCreateSeatSubmit,
        deleteSeat,
        getSeat,
       
    }
    return(
        
        <SeatContext.Provider value={contextValues}>
            {children}
        </SeatContext.Provider>
    )
}
export const useSeatContext = () => {
    const context = useContext(SeatContext);

    return context;
}