import { useEffect, useState} from "react";
import { useParams, useNavigate, Link } from "react-router-dom";

import {seatServiceFactory} from '../../services/seatService';
import * as commentService from '../../services/commentService'
import { useService } from "../../hooks/useService";
import { useAuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";
import { AddComment } from "./AddComment/AddComment";
import { useSeatContext } from "../../contexts/SeatContex";

export const Details = () =>{
    const {seatId} = useParams();
    const {userId, isAuthenticated, userEmail} = useAuthContext();
    const {deleteSeat} = useSeatContext();
    const [seat, setSeat] = useState({});
    const {} = useForm({
        comment: ''
    })
    const seatService = useService(seatServiceFactory);
    const navigate = useNavigate();


    useEffect(() => {
        Promise.all([
            seatService.getOne(seatId),
            commentService.getAll(seatId)
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
                {
                    ...response,
                    author:{
                        userEmail,
                    }
                }
            ],
        }))
        // setSeat(state => ({...state, comments: {...state.comments, [result._id]: result} }));
        // setUsername('');
        // setComment('');
    }


    const onDeleteClick = async () => {
        //eslint-disable-next-line no-restricted-globals
        const result = confirm(`Are you sure you want to delete ${seat.brand}`)//option
        if(result){
            await seatService.delete(seat._id);
            deleteSeat(seat._id);

            navigate('/catalogue');
        }
        
    };
    const styles = {
        backgroundImage: 'url("https://cdn-prod.medicalnewstoday.com/content/images/articles/327/327330/a-kid-who-is-not-allowed-to-sit-in-the-front-seat-because-she-is-too-young.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        margintop: '50px',
        border: '2px black solid'
    };

    
    return(
        <section className="py-5 details" id="seat-details-page" style={styles}>
            <div className="container" style={{marginLeft:'300px', width:'25%'}}> 
                
                <h5 className="brand" style={{color:'white'}}>Seat Brand: {seat.brand}</h5>
                
                <div className="seat-info" >
                    <div>
                        <img className="img-fluid rounded" src={seat.image} alt="" />
                    </div>
                    <div className="seat-desc" >
                        <h5 style={{color:'white'}}>Information about the seat</h5>
                        
                        <textarea className="lead"
                            disabled value={seat.description} >Wishing you a safe journey and a relaxing vacation when you arrive!</textarea>
                        {/* <p>{seat.description}</p> */}
                        <h5 style={{color:'white'}}>Price: {seat.price} BGN</h5>
                        {seat._ownerId === userId && (
                            <div className="actions">
                            {/* <!-- Only for logged user and creator to this seat --> */}
                            <button className="btn btn-danger" onClick={onDeleteClick}>Delete this seat</button>
                            <Link to={`/catalogue/${seat._id}/edit`} className="btn btn-warning">Edit this seat</Link>
                            </div>
                        )}
                        <div className="details-comments">
                            <h2>Comments:</h2>
                            <ul style={{width: '100%' ,border:'solid 2px orange', padding:'0', margin:'0' ,display:'block' ,listStyle:'none', color: 'white'}}>
                                {seat.comments && seat.comments.map(x => (
                                    <li key={x._id} >
                                        <p>{x.author.email}: {x.comment}</p>
                                    </li> 
                                ))}    
                            </ul>
                            {!seat.comments?.length && (
                                <p>Sorry no comments.</p>
                            )}
                        </div>
                        
                        
                        {isAuthenticated && <AddComment onCommentSubmit={onCommentSubmit}/>}
                    </div>
                </div>
            </div>
        </section>
    );
};