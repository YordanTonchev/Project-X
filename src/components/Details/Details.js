//take trip id
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import * as tripService from '../../services/seatService';
export const Details = () =>{
    const {tripId} = useParams();
    const [trip, setTrip] = useState({});

    useEffect(() => {
        tripService.getOne(tripId)
            .then(result => {
                setTrip(result)
            });
    }, [tripId]);
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
        <section className="py-5 details" id="trip-details-page" style={styles}>
            <div className="container">
                <div className="destination">
                    <div>
                        <span className="icon"><i className="fas fa-map-marked-alt"></i></span>
                        <h5> from {trip.startPoint} to {trip.endPoint} </h5>
                    </div>
                    <div>
                        <span className="icon"><i className="fas fa-calendar-alt"></i></span>
                        <h5> {trip.date} at {trip.time} </h5>
                    </div>
                </div>
                <p className="line"></p>
                <div className="buddies-info">
                    <i className="fas fa-users buddies"></i>
                    <h5>Shared trip Buddies</h5>
                    <div>
                        {/* <!-- if there are joined buddies for the current trip separate them with comma and space", " --> */}
                        <p>peter@abv.bg, marry@abv.bg</p>

                        {/* <!-- If not display: --> */}
                        <p>there are no buddies yet...</p>
                    </div>
                    <h5>Driver: <span>mihail_valkov@mail.bg</span> </h5>
                </div>
                <p className="line"></p>
                <h5 className="brand">Car Brand: {trip.carBrand}</h5>
                <div className="trip-info">
                    <div>
                        <img className="img-fluid rounded"
                            src={trip.carImage}
                            alt="" />
                    </div>
                    <div className="trip-desc">
                        <h5>Information about the trip</h5>
                        <textarea className="lead"
                            disabled>Wishing you a safe journey and a relaxing vacation when you arrive!</textarea>
                        <h5>Price: {trip.price} BGN</h5>

                        {/* <!-- if there are no logged in user do not show div with class actions  --> */}
                        <div className="actions">
                            {/* <!-- Only for logged user and creator to this trip --> */}
                            <a href="/Delete" className="btn btn-danger">Delete this trip</a>
                            <a href="/Edit" className="btn btn-warning">Edit this trip</a>

                            {/* <!-- logged in user with available seats --> */}
                            <a href="/Join" className="btn btn-join">Join now, [ 1 ] seats left!</a>

                            {/* <!-- logged in user and has already joined the trip  --> */}
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