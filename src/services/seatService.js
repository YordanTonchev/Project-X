import {requestFactory} from "./requester";

const baseUrl = 'http://localhost:3030/data/seats'


export const seatServiceFactory = (token) => {
    const request = requestFactory(token);

    const getAll = async () => {
        const result = await request.get(baseUrl)
        const seats = Object.values(result)
    
        return seats;
    };
    
    const getOne = async (seatId) => {
        const result = await request.get(`${baseUrl}/${seatId}`);
        // console.log(result)
        return result;
    }
    
    const create = async (seatData) => {
        const result = await request.post(baseUrl, seatData);
        // console.log (result);
        return result;
    };
    
    const edit = (seatId, data) => request.put(`${baseUrl}/${seatId}`, data);
    
    const deleteSeat = (seatId) => request.delete(`${baseUrl}/${seatId}`);
    
    
    return{
        getAll,
        getOne,
        create,
        edit,
        delete: deleteSeat,
    }
}