import styles from './OfferSeat.module.css'
import { useSeatContext } from '../../contexts/SeatContex';
import { useForm } from '../../hooks/useForm';

export const OfferSeat = () =>{
    const{onCreateSeatSubmit} = useSeatContext();
    
    const {values, changeHandler, onSubmit} = useForm ({
        image: '',
        brand: '',
        price: '',
        stock: '',
        description: '',
    }, onCreateSeatSubmit);
    

    return(
    <section className="py-5" id={styles.offerSeat} >
        
        <form className={styles.createForm} method='post' onSubmit={onSubmit} >
            <div className="container offer-seat" >
                <h1>Offer seat</h1>
            </div>
            <div className="form-group">

                <label htmlFor="brand">Seat Brand</label>
                <input type="text" className="form-control" id="brand"  placeholder="Cybex" name="brand"
                value={values.brand} onChange={changeHandler}/>
                
            </div>
            <div className="form-group">
                <label htmlFor="image">Seat Image</label>
                <input type="text" className="form-control" id="image"  placeholder="https://..." name="image"
                value={values.image} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="price" >Price</label>
                <input type="text" className="form-control" id="price"  placeholder="10 BGN" name="price"
                value={values.price} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="stock">Stock</label>
                <input type="text" className="form-control" id="stock"  placeholder="1" name="stock"
                value={values.stock} onChange={changeHandler}/>
            </div>
            <div className="form-group">
                <label htmlFor="description" >Description</label>
                <textarea className="form-control" id="description"  placeholder="Information about the seat" name="description"
                value={values.description} onChange={changeHandler}/ >
            </div>
            

            <button type="submit" className="btn btn-primary">Submit</button>
        </form>
    </section>
        
    );
};

