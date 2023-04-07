import styles from './Edit.module.css'
import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useService } from "../../hooks/useService";
import { seatServiceFactory } from "../../services/seatService";
import { useSeatContext } from "../../contexts/SeatContex";

export const Edit = () => {
    const {onSeatEditSubmit} = useSeatContext();
    const {seatId} = useParams();
    const seatService = useService(seatServiceFactory);
    const {values, changeHandler, onSubmit, changeValues} = useForm({
        _id: '',
        image: '',
        brand: '',
        price: '',
        stock: '',
        description: '',
    }, onSeatEditSubmit);

    useEffect(()=>{
        seatService.getOne(seatId)
            .then(result => {
                changeValues(result);
            });
    }, [seatId]);
    
    
    return(
        <section className="py-5" id={styles.editPage} >
        
            <form className={styles.editForm} method='post' onSubmit={onSubmit} >
                <div className="container offer-seat" >
                    <h1>Edit seat</h1>
                </div>
                <div className="form-group">

                    <label htmlFor="brand">Seat Brand</label>
                    <input type="text" className="form-control" id="brand"  placeholder="Cybex" name="brand"
                    value={values.brand} onChange={changeHandler}/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="image" >Seat Image</label>
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
                    value={values.description} onChange={changeHandler} />
                </div>
                

                <button type="submit" className="btn btn-primary" >Edit</button>
            </form>
        </section>

    );
};