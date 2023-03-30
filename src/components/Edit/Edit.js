import { useForm } from "../../hooks/useForm";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useService } from "../../hooks/useService";
import { seatServiceFactory } from "../../services/seatService";

export const Edit = ({
    onSeatEditSubmit,
}) => {
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
    
    const styles = {
        backgroundImage: 'url("https://www.aisin.com/en/aithink/assets_c/2022/07/ChildPresenceDetectionSystem%28CPD%29_top-thumb-4838x2396-7361.jpg")',
        backgroundSize:'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        margintop: '50px',
        border: '2px black solid'
      };

    return(
        <section className="py-5" id="edit-page" style={styles}>
        
            <form id="edit" method='post' onSubmit={onSubmit} style={{width:'30%', marginLeft:'1000px',}}>
                <div className="container offer-seat" style={{textAlign:'center', color:'orange'}}>
                    <h1>Edit seat</h1>
                </div>
                <div className="form-group">

                    <label htmlFor="brand" style={{color:'orange'}}>Seat Brand</label>
                    <input type="text" className="form-control" id="brand"  placeholder="Cybex" name="brand"
                    value={values.brand} onChange={changeHandler}/>
                    
                </div>
                <div className="form-group">
                    <label htmlFor="image" style={{color:'orange'}}>Seat Image</label>
                    <input type="text" className="form-control" id="image"  placeholder="https://..." name="image"
                    value={values.image} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="price" style={{color:'orange'}}>Price</label>
                    <input type="text" className="form-control" id="price"  placeholder="10 BGN" name="price"
                    value={values.price} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="stock"style={{color:'orange'}}>Stock</label>
                    <input type="text" className="form-control" id="stock"  placeholder="1" name="stock"
                    value={values.stock} onChange={changeHandler}/>
                </div>
                <div className="form-group">
                    <label htmlFor="description" style={{color:'orange'}}>Description</label>
                    <textarea className="form-control" id="description"  placeholder="Information about the seat" name="description"
                    value={values.description} onChange={changeHandler}></textarea>
                </div>
                

                <button type="submit" className="btn btn-primary" style={{backgroundColor:'orange', marginLeft:'180px', marginTop:'10px' }}>Submit</button>
            </form>
        </section>

    );
};