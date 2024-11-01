import styles from './Footer.module.css';  
import Image from 'next/image';

function Footer() {
    return (
        <section className={styles.footerSection} id='footer'>
            <div className={styles.footerContainer}>
              <div className={styles.footerMiddle}>
                <div className={styles.footerCallUs}>
                    <svg
                        viewBox="0 -0.5 25 25"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                        <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.36343 6.36195C7.24343 5.43495 7.55443 5.17495 7.92943 5.05395C8.18895 4.98595 8.46112 4.98217 8.72243 5.04295C9.06643 5.14295 9.15743 5.21895 10.2854 6.34295C11.2764 7.32995 11.3754 7.43695 11.4704 7.62995C11.6521 7.96873 11.6805 8.36894 11.5484 8.72995C11.4484 9.00495 11.3064 9.18695 10.7054 9.78995L10.3134 10.183C10.2105 10.2876 10.1863 10.4464 10.2534 10.577C11.1244 12.0628 12.36 13.3019 13.8434 14.177C14.0142 14.2684 14.2245 14.2389 14.3634 14.104L14.7404 13.733C14.9734 13.4941 15.2202 13.2691 15.4794 13.059C15.8866 12.809 16.3939 12.7867 16.8214 13C17.0304 13.1 17.0994 13.162 18.1214 14.182C19.1754 15.233 19.2054 15.266 19.3214 15.507C19.5397 15.9059 19.5374 16.3891 19.3154 16.786C19.2024 17.01 19.1334 17.091 18.5404 17.697C18.1824 18.063 17.8454 18.397 17.7914 18.446C17.3022 18.851 16.6746 19.0497 16.0414 19C14.883 18.8944 13.7617 18.5363 12.7564 17.951C10.5296 16.7711 8.63383 15.0521 7.24243 12.951C6.93937 12.5112 6.66994 12.0492 6.43643 11.569C5.81001 10.4953 5.48653 9.27189 5.50043 8.02895C5.54825 7.37871 5.86008 6.77637 6.36343 6.36195Z"
                            stroke="#000000"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        ></path>
                        </g>
                    </svg>
                    <span>Turite klausimų? Paskambinkite </span>
                    <a className={styles.phoneNumber} href="tel:+37061271545">+370 612 715 45</a>
                   
                </div>
                <div className={styles.footerInfo}>
                    <div className={styles.footerAddress}>
                        <svg 
                            fill="#0299DC" 
                            version="1.1" 
                            id="Capa_1" 
                            xmlns="http://www.w3.org/2000/svg" 
                            xmlnsXlink="http://www.w3.org/1999/xlink" 
                            viewBox="0 0 395.71 395.71" 
                            xmlSpace="preserve" 
                            className={styles.svgIcon} 
                        >
                            <g>
                                <path d="M197.849,0C122.131,0,60.531,61.609,60.531,137.329c0,72.887,124.591,243.177,129.896,250.388l4.951,6.738 
                                    c0.579,0.792,1.501,1.255,2.471,1.255c0.985,0,1.901-0.463,2.486-1.255l4.948-6.738c5.308-7.211,129.896-177.501,129.896-250.388 
                                    C335.179,61.609,273.569,0,197.849,0z M197.849,88.138c27.13,0,49.191,22.062,49.191,49.191c0,27.115-22.062,49.191-49.191,49.191 
                                    c-27.114,0-49.191-22.076-49.191-49.191C148.658,110.2,170.734,88.138,197.849,88.138z"></path>
                            </g>
                        </svg>
                        
                        <a href="https://www.google.com/maps?q=S.+Daukanto+31,+Vilkaviškis" target="_blank" rel="noopener noreferrer">S. Daukanto g. 31, Vilkaviškis</a>

                    </div>
                    <div className={styles.footerEmail}>
                        <svg
                                height="200px"
                                width="200px"
                                version="1.1"
                                id="_x32_"
                                xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink"
                                viewBox="0 0 512 512"
                                xmlSpace="preserve"
                                fill="#0299DC"
                            >
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                <g>
                                    <path
                                    fill="#0299DC"
                                    d="M440.917,67.925H71.083C31.827,67.925,0,99.752,0,139.008v233.984c0,39.256,31.827,71.083,71.083,71.083 h369.834c39.255,0,71.083-31.827,71.083-71.083V139.008C512,99.752,480.172,67.925,440.917,67.925z M178.166,321.72l-99.54,84.92 c-7.021,5.992-17.576,5.159-23.567-1.869c-5.992-7.021-5.159-17.576,1.87-23.567l99.54-84.92c7.02-5.992,17.574-5.159,23.566,1.87 C186.027,305.174,185.194,315.729,178.166,321.72z M256,289.436c-13.314-0.033-26.22-4.457-36.31-13.183l0.008,0.008l-0.032-0.024 c0.008,0.008,0.017,0.008,0.024,0.016L66.962,143.694c-6.98-6.058-7.723-16.612-1.674-23.583c6.057-6.98,16.612-7.723,23.582-1.674 l152.771,132.592c3.265,2.906,8.645,5.004,14.359,4.971c5.706,0.017,10.995-2.024,14.44-5.028l0.074-0.065l152.615-132.469 c6.971-6.049,17.526-5.306,23.583,1.674c6.048,6.97,5.306,17.525-1.674,23.583l-152.77,132.599 C282.211,284.929,269.322,289.419,256,289.436z M456.948,404.771c-5.992,7.028-16.547,7.861-23.566,1.869l-99.54-84.92 c-7.028-5.992-7.861-16.546-1.869-23.566c5.991-7.029,16.546-7.861,23.566-1.87l99.54,84.92 C462.107,387.195,462.94,397.75,456.948,404.771z"
                                    ></path>
                                </g>
                                </g>
                        </svg>
                        <a href="mailto:uabgksvirtucom@gmail.com">uabgksvirtucom@gmail.com</a> 
                    </div>
                    <div className={styles.footerFb}>
                        <svg
                            fill="#0299DC"
                            version="1.1"
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            viewBox="0 0 512 512"
                            xmlSpace="preserve"
                        >
                            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                            <g id="7935ec95c421cee6d86eb22ecd11b7e3">
                                <path
                                style={{ display: 'inline' }}
                                d="M283.122,122.174c0,5.24,0,22.319,0,46.583h83.424l-9.045,74.367h-74.379 c0,114.688,0,268.375,0,268.375h-98.726c0,0,0-151.653,0-268.375h-51.443v-74.367h51.443c0-29.492,0-50.463,0-56.302 c0-27.82-2.096-41.02,9.725-62.578C205.948,28.32,239.308-0.174,297.007,0.512c57.713,0.711,82.04,6.263,82.04,6.263 l-12.501,79.257c0,0-36.853-9.731-54.942-6.263C293.539,83.238,283.122,94.366,283.122,122.174z"
                                ></path>
                            </g>
                            </g>
                        </svg>
                        <a href="https://www.facebook.com">UAB GKSvirtucom</a>

                    </div>
                </div>
              </div>
              <div className={styles.footerInfoBottom}>
                <span>Įm. kodas 185285648 / PVM kodas LT852856412</span>
              </div>
              <div className={styles.footerRights}>
                <span>© 2024 GKSvirtucom</span>
              </div>
            </div>
        </section>
    );
}

export default Footer;
