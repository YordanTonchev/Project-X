import styles from './Home.module.css'
export const Home = () =>{
    
    return(
        <section className={styles.homePage} >
            <div className={styles.mainDiv}>
                <h1>Buy a child car seat</h1>
                <div>
                    <p>"Your child's safety is the most important thing"</p>
                    <p>"Never rely on luck..."</p>
                </div>
            </div>
        </section>
    )
}