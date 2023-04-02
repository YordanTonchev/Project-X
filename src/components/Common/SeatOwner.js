import { Navigate, Outlet, useParams } from "react-router-dom";
import { useAuthContext } from "../../contexts/AuthContext";
import { useSeatContext } from "../../contexts/SeatContex";



export const SeatOwner = ({
    children,
}) =>{
    const {seatId} = useParams();
    const {getSeat} = useSeatContext();
    const {userId} = useAuthContext();

    const currentSeat = getSeat(seatId);

    if(currentSeat && currentSeat._ownerId !== userId){
        return <Navigate to={`/catalogue/${seatId}`} replace/>
    }
    return children ? children : <Outlet/>
}