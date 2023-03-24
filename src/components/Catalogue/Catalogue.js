import { CatalogueItem } from "./CatalogueItem/CatlogueItem";

export const Catalogue = ({seats}) =>{
    const styles = {
        backgroundImage: 'url("https://target.scene7.com/is/image/Target/GUEST_65c4163a-8400-4a3d-a790-3a9173ba39cd?wid=668&qlt=80&fmt=webp")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        margintop: '50px',
        
      };
    return(
        <section className="container" id="catalogue-page" style={styles} >
        <header className="seat">
            <h1 style={{color: 'pink'}}>Welcome lovely parents!</h1>
            <p style={{color: 'pink'}}>Child seats are the best way to protect your loved ones.</p>
            <p style={{color: 'pink'}}>Find your child seat that suits the most, and let the endless journeys begin!</p>
        </header>
        <div className="row text-center">
           

            {seats.map(x => <CatalogueItem key={x._id} {...x} />)}

            {seats.length === 0 &&(
                <div className="no-seats">
                <img src="https://www.shutterstock.com/image-photo/wooden-cubes-inscription-unlucky-lucky-260nw-2136158797.jpg" alt="no luck" />
                <p className="lead" style={{color:"pink"}}>Try next time...</p>
            </div>
            )}
            

        </div>
    </section>
    );
};