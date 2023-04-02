import { useSeatContext } from '../../contexts/SeatContex';
import { useForm } from '../../hooks/useForm';

export const OfferSeat = () =>{
    const{onCreateSeatSubmit} = useSeatContext();
    const styles = {
        backgroundImage: 'url("https://n332.es/wp-content/uploads/2021/10/Euro-NCAP-to-include-system-to-detect-of-minors.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        margintop: '50px',
        // border: '2px black solid',
        
      };
    const {values, changeHandler, onSubmit} = useForm ({
        image: '',
        brand: '',
        price: '',
        stock: '',
        description: '',
    }, onCreateSeatSubmit);
    

    return(
    <section className="py-5" id="offer-seat-page" style={styles}>
        
        <form id="create" method='post' onSubmit={onSubmit} style={{width:'30%', marginLeft:'1000px',}}>
        <div className="container offer-seat" style={{textAlign:'center', color:'orange'}}>
            <h1>Offer seat</h1>
        </div>
        <div className="form-group">

            <label htmlFor="brand"style={{color:'orange'}}>Seat Brand</label>
            <input type="text" className="form-control" id="brand"  placeholder="Cybex" name="brand"
             value={values.brand} onChange={changeHandler}/>
            
        </div>
        <div className="form-group">
            <label htmlFor="image"style={{color:'orange'}}>Seat Image</label>
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

