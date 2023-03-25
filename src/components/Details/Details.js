//take seat id
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";


import {seatServiceFactory} from '../../services/seatService';
import { useService } from "../../hooks/useService";

export const Details = () =>{
    const [username, setUsername] = useState('');
    const [comment, setComment] = useState('');
    const {seatId} = useParams();
    const [seat, setSeat] = useState({});
    const seatService = useService(seatServiceFactory)

    useEffect(() => {
        seatService.getOne(seatId)
            .then(result => {
                setSeat(result)
            });
    }, [seatId]);
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
            <div className="container">
                <div className="destination">
                    <div>
                        <span className="icon"><i className="fas fa-map-marked-alt"></i></span>
                        <h5> from {seat.startPoint} to {seat.endPoint} </h5>
                    </div>
                    <div>
                        <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                        <h5> {seat.date} at {seat.time} </h5>
                    </div>
                </div>
                <p className="line"></p>
                <div className="buddies-info">
                    <i className="fas fa-users buddies"></i>
                    <h5>Shared seat Buddies</h5>
                    <div>
                        {/* <!-- if there are joined buddies for the current seat separate them with comma and space", " --> */}
                        <p>peter@abv.bg, marry@abv.bg</p>

                        {/* <!-- If not display: --> */}
                        <p>there are no buddies yet...</p>
                    </div>
                    <h5>Driver: <span>mihail_valkov@mail.bg</span> </h5>
                </div>
                <p className="line"></p>
                <h5 className="brand">Car Brand: {seat.carBrand}</h5>
                <div className="seat-info">
                    <div>
                        <img className="img-fluid rounded"
                            src={seat.carImage}
                            alt="" />
                    </div>
                    <div className="seat-desc">
                        <h5>Information about the seat</h5>
                        <textarea className="lead"
                            disabled>Wishing you a safe journey and a relaxing vacation when you arrive!</textarea>
                        <h5>Price: {seat.price} BGN</h5>

                        {/* <!-- if there are no logged in user do not show div with class actions  --> */}
                        <div className="actions">
                            {/* <!-- Only for logged user and creator to this seat --> */}
                            <a href="/Delete" className="btn btn-danger">Delete this seat</a>
                            <a href="/Edit" className="btn btn-warning">Edit this seat</a>

                            {/* <!-- logged in user with available seats --> */}
                            <a href="/Join" className="btn btn-join">Join now, [ 1 ] seats left!</a>

                            {/* <!-- logged in user and has already joined the seat  --> */}
                            <span className="btn btn-info">Already joined. Don't be late!</span>

                            {/* <!-- logged in user with no available seats --> */}
                            <span className="btn btn-secondary">No seats available! [0]</span>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};