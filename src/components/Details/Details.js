import styles from './Details.module.css'
import { useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import {seatServiceFactory} from '../../services/seatService';
import * as commentService from '../../services/commentService'
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";

import { AddComment } from "./AddComment/AddComment";
import { useSeatContext } from "../../contexts/SeatContex";

export const Details = () =>{
    const {seatId} = useParams();
    const {userId, isAuthenticated, userEmail} = useAuthContext();
    const {deleteSeat} = useSeatContext();
    const [seat, setSeat] = useState({});
    const seatService = useService(seatServiceFactory);
    const navigate = useNavigate();


    useEffect(() => {
        Promise.all([
            seatService.getOne(seatId),
            commentService.getAll(seatId),
        ]).then(([seatData, comments]) => {
                setSeat({
                    ...seatData,
                    comments,
                });
        });
    }, [seatId]);

    const onCommentSubmit = async (values) => {
        const response = await commentService.create(seatId, values.comment);
        
        setSeat(state => ({
            ...state,
            comments:[
                ...state.comments, 
                {...response, author:{email:userEmail,}}
            ],
        }));
    };


    const onDeleteClick = async () => {
        //eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${seat.brand}`)//confirm option
        if(result){
            await seatService.delete(seat._id);//1 step delete from server
            deleteSeat(seat._id);//2 step delete from state

            navigate('/catalogue');//3 step navigate to
        }
        
    };
    

    
    return(
        <section className="py-5 details" id={styles.seatDetails}>
            <div className="container" id={styles.container} > 
                <div className={styles.seatInfo} >
                    <h5 className="brand" >Seat Brand: {seat.brand}</h5>
                    <img className="img-fluid rounded" src={seat.image} alt="" />
                    <h5 >Seat description</h5>
                    <textarea className="lead"
                        disabled value={seat.description} placeholder='Wishing you a safe journey and a relaxing vacation when you arrive!'/>
                    <h5>Price: {seat.price} BGN</h5>
                    {seat._ownerId === userId && (
                            <div className="actions">
                            {/* <!-- Only for logged user and creator to this seat --> */}
                            <button className="btn btn-danger" onClick={onDeleteClick}>Delete this seat</button>
                            <Link to={`/catalogue/${seat._id}/edit`} className="btn btn-warning">Edit this seat</Link>
                            </div>
                    )}
                </div>
                <div className={styles.detailsComments}>
                    <h2>Comments:</h2>
                    <ul>
                        {seat.comments && seat.comments.map(x => (
                            <li key={x._id} className='comment'>
                                <p>{x.author.email}: {x.comment}</p>
                            </li> 
                        ))}    
                    </ul>
                    {!seat.comments?.length && (
                        <p className='no-comment'>Sorry no comments.</p>
                    )}
                    {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit}/>}
                </div>
                      
            </div>
        </section>
    );
};