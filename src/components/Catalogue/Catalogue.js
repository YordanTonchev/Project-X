import styles from './Catalogue.module.css'
import { useSeatContext } from "../../contexts/SeatContex";
import { CatalogueItem } from "./CatalogueItem/CatlogueItem";

export const Catalogue = () =>{
    
    const{seats}=useSeatContext()
    return(
        <section className="container" id={styles.cataloguePage}  >
            <div className={styles.seat}>
                <div>Welcome lovely parents!</div>
                <div>Child seats are the best way to protect your loved ones.</div>
                <div>Find your child seat that suits the most, and let the endless journeys begin!</div>
            </div>
            <div className="row text-center">
                {seats.map(x => <CatalogueItem key={x._id} {...x} />)} 

                {seats.length === 0 &&(
                <div className={styles.noSeats}>
                    <p className="lead" >Try next time...</p>
                </div>
                )}
            </div>
        </section>
    );
};