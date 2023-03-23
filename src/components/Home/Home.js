export const Home = () =>{
    const styles = {
        backgroundImage: 'url("https://www.multimac.com/images/the_mitchells_1_banner.jpg")',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        minHeight: '100vh',
        margintop: '50px',
        border: '2px black solid'
      };
    return(
        <section id="home-page" style={styles} >
            
            <div style={{width:'50%', margin: '60px 380px', color:'green', textAlign:'center', borderRadius: '20px'}}>
                <h1>Buy used car seat</h1>
                <div>
                    <p style={{fontSize: '35px'}}>"Your child's safety is the most important thing"</p>
                    <p style={{fontSize: '35px'}}>"Never rely on luck..."</p>
                </div>
            </div>
        </section>
    )
}