import { Link } from "react-router-dom";
export const CatalogueItem = ({
    _id,
    image,
    brand,
    price,
    stock,
    description,
   
    
}) =>{
    return(
<div className="col-lg-4 col-md-6 mb-4">
    <div className="card h-100" >
        <img className="card-img-top" src={image} alt="NO-IMG" />
        <div className="card-body" >
            <h5 className="card-title">Description: {description}</h5>
            <h5 className="mt-4 card-info">Brand: {brand}</h5>
            <h5 className="mt-4 card-info">Stock: {stock}</h5>
            <h5 className="mt-4">Price: {price} BGN</h5>
        </div>
        <div className="card-footer">
            <Link to={`/catalogue/${_id}`} className="btn btn-primary">Details</Link>
        </div>
    </div>
</div>
    );
};