import * as request from "./requester";

const baseUrl = 'http://localhost:3030/jsonstore/seats'

export const getAll = async () => {
    const result = await request.get(baseUrl)
    const seats = Object.values(result)

    return seats;
};

export const getOne = async (seatId) => {
    const result = await request.get(`${baseUrl}/${seatId}`);
    console.log(result)
    return result
}

export const create = async (seatData) => {
    const result = await request.post(baseUrl, seatData);
    console.log (result);
    return result;
}