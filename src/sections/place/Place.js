import styles from './Place.module.css';   

function Place() {
    // Define your address
    const address = 'S. Daukanto 31, Vilkaviškis';
    
    // Directly define your API key here
    const googleMapsApiKey = 'AIzaSyCekG6e4NSZ4cWIa9hmqrX0-oNyM5kqqU0';

    // Encode the address for the URL
    const encodedAddress = encodeURIComponent(address);
    
    // Create the embed URL for Google Maps
    const mapEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodedAddress}`;

    return (
        <section className={styles.placeSection} id='place'>
            <div className={styles.placeContainer}>
                <div className={styles.placeLeft}>
                    <h3>Darbo laikas</h3>
                    <div className={styles.placeWorkingTime}>
                        <div className={styles.placeDays}>
                            <span>Pirmadienis </span>
                            <span>Antradienis</span>
                            <span>Trečiadienis </span>
                            <span>Ketvirtadienis</span>
                            <span>Penktadienis </span>
                            <span>Šeštadienis</span>
                            <span>Sekmadienis</span>
                        </div>
                        <div className={styles.placeTime}>
                            <span>9.00-18.00</span>
                            <span>9.00-18.00</span>
                            <span>9.00-18.00</span>
                            <span>9.00-18.00</span>
                            <span>9.00-18.00</span>
                            <span>9.00-13.00</span>
                            <span>NEDIRBAME</span>
                        </div>
                    </div>
                </div> 
                <div className={styles.placeTransmission}></div>
                <div className={styles.placeRight}>
                    <iframe
                        width="600"
                        height="450"
                        className={styles.mapIframe} 
                        loading="lazy"
                        allowFullScreen
                        referrerPolicy="no-referrer-when-downgrade"
                        src={mapEmbedUrl}
                    ></iframe>
                </div> 
            </div>
        </section>
    );
}

export default Place;
