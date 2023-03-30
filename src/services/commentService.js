import {requestFactory} from './requester';

const baseUrl = 'http://localhost:3030/data/comments';
const request = requestFactory();

export const getAll = async (seatId) => {
    const searchQuery = encodeURIComponent(`seatId="${seatId}"`);
    const relationQuery = encodeURIComponent(`author=_ownerId:users`)

    const result = await request.get(`${baseUrl}?where=${searchQuery}&load=${relationQuery}`);
    const comments = Object.values(result)
    
    return comments;
}

export const create = async (seatId, comment) => {
    const result = await request.post(baseUrl, {seatId, comment});
    
    return result;
}