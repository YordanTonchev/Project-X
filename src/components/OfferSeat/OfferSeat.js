import { useState } from "react";
export const OfferSeat = ({onCreateSeatSubmit,}) =>{
    const styles = {
        backgroundImage: 'url("https://n332.es/wp-content/uploads/2021/10/Euro-NCAP-to-include-system-to-detect-of-minors.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        margintop: '50px',
        // border: '2px black solid',
        
      };
    const [values, setValue] = useState ({
        image: '',
        brand: '',
        price: '',
        stock: '',
        description: '',
    })
    const onChangeHandler = (e) =>{
        setValue(state => ({...state, [e.target.name]: e.target.value}))
    }
    const onSubmit =(e)=> {
        e.preventDefault();
        onCreateSeatSubmit(values);
    }
    return(
    <section className="py-5" id="offer-seat-page" style={styles}>
        
        <form id="create" onSubmit={onSubmit} style={{width:'30%', marginLeft:'1000px',}}>
        <div className="container offer-seat" style={{textAlign:'center', color:'orange'}}>
            <h1>Offer seat</h1>
        </div>
        <div class="form-group">

            <label htmlfor="brand"style={{color:'orange'}}>Seat Brand</label>
            <input type="text" class="form-control" id="brand"  placeholder="Cybex" name="brand"
             value={values.brand} onChange={onChangeHandler}/>
            
        </div>
        <div class="form-group">
            <label htmlfor="image"style={{color:'orange'}}>Seat Image</label>
            <input type="text" class="form-control" id="image"  placeholder="https://..." name="image"
             value={values.image} onChange={onChangeHandler}/>
        </div>
        <div class="form-group">
            <label htmlfor="price" style={{color:'orange'}}>Price</label>
            <input type="text" class="form-control" id="price"  placeholder="10 BGN" name="price"
             value={values.price} onChange={onChangeHandler}/>
        </div>
        <div class="form-group">
            <label htmlfor="stock"style={{color:'orange'}}>Stock</label>
            <input type="text" class="form-control" id="stock"  placeholder="1" name="stock"
             value={values.stock} onChange={onChangeHandler}/>
        </div>
        <div class="form-group">
            <label htmlfor="description" style={{color:'orange'}}>Description</label>
            <textarea class="form-control" id="description"  placeholder="Information about the seat" name="description"
             value={values.description} onChange={onChangeHandler}></textarea>
        </div>
        

        <button type="submit" class="btn btn-primary" style={{backgroundColor:'orange', marginLeft:'180px', marginTop:'10px' }}>Submit</button>
        </form>
    </section>
        
    );
};

