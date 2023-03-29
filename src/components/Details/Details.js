import { Link } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate } from "react-router-dom";

import {seatServiceFactory} from '../../services/seatService';

// import * as commentService from '../../services/commentService';
import { useService } from "../../hooks/useService";
import { AuthContext } from "../../contexts/AuthContext";

export const Details = () =>{
    const {userId} = useContext(AuthContext);

    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
//     const [comments, setComments] = useState([]);

    const {seatId} = useParams();
    const [seat, setSeat] = useState({});
    const seatService = useService(seatServiceFactory);
    const navigate = useNavigate();

    useEffect(() => {
        seatService.getOne(seatId)
            .then(result => {
                setSeat(result);
            })
    }, [seatId]);//seatService

    const onCommentSubmit = async (e) => {
        e.preventDefault ();

        const result = await seatService.addComment(seatId, {
            username,
            comment
        });
        setSeat(state => ({...state, comments: {...state.comments, [result._id]: result} }));
        setUsername('');
        setComment('');
    }


    const onDeleteClick = async () => {
        await seatService.delete(seat._id);
        //TODO delete from state
        navigate('/catalogue')
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
                        {/* <div className="details-comments">
                            <h2>Comments:</h2>
                            <ul>
                                {comments.map(x => (
                                    <li key={x._id}>
                                        <p>{x.username}: {x.comment}</p>
                                    </li> 
                                ))}    
                            </ul>
                            {comments.length === 0 && (
                                <p>Sorry no comments.</p>
                            )}
                        </div> */}
                        
                        {seat._ownerId === userId && (
                            <div className="actions">
                            {/* <!-- Only for logged user and creator to this seat --> */}
                            <button className="btn btn-danger" onClick={onDeleteClick}>Delete this seat</button>
                            <Link to={`/catalogue/${seat._id}/edit`} className="btn btn-warning">Edit this seat</Link>
                            </div>
                        )}
                        {/* <articel className='comment'>
                            <label >New Comment:</label>
                            <form className='from' onSubmit={onCommentSubmit}>
                                <input type='text' name='username' placeholder="Pesho" value={username} onChange={(e) => setUsername(e.target.value)} />
                                <textarea name='comment' placeholder="Put your comment here..." value={comment} onChange={(e) => setComment(e.target.value)} ></textarea>
                                <input className='bnt submit' type='submit' value='Add comment' />
                            </form>
                        </articel> */}
                    </div>
                </div>
            </div>
        </section>
    );
};