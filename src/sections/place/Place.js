import styles from './Place.module.css';   

function Place() {
    // Define your address
    const address = 'S. Daukanto 31, Vilkaviškis';
    
    const googleMapsApiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
    const encodedAddress = encodeURIComponent(address);
    const mapEmbedUrl = googleMapsApiKey
        ? `https://www.google.com/maps/embed/v1/place?key=${googleMapsApiKey}&q=${encodedAddress}`
        : `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

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
                        title="UAB GKSvirtucom location map"
                    ></iframe>
                </div> 
            </div>
        </section>
    );
}

export default Place;
