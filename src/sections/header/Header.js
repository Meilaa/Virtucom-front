import { Span } from 'next/dist/trace';
import styles from './Header.module.css';  
import Image from 'next/image';

function Header() {
    return (
        <div className={styles.headerSection}>
            <div className={styles.headerContainer}>
              <div className={styles.headerTop}>
                <Image className={styles.logo} src="/logo.jpg" alt="Logo" width={500} height={50} />
                <div className={styles.topHeaderSecond}> 
                  <svg 
                          fill="#9455D0" 
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
                   <span>S. Daukanto 31, Vilkaviškis</span>
                </div>
                <div className={styles.topHeaderThird}>
                <svg 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        xmlns="http://www.w3.org/2000/svg" 
                        className={styles.svgIcon} 
                    >
                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path 
                                d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z" 
                                fill="#9455D0"
                            ></path> 
                            <path 
                                d="M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z" 
                                fill="#9455D0"
                            ></path>
                        </g>
                    </svg>
                    <span>I-V 9-18, VI 9-14</span>
                </div>
                <div className={styles.topHeaderLast}>
                    <span>Reikia pagalbos?</span>
                    <span>Nr: +37061271545</span>
                    <span>Fb: Gintautas KAzlauskas</span>
                </div>
              </div>
              <div className={styles.headerBottom}>
                <a>APIE</a>
                <a>PASLAUGOS</a>
                <a>PARDUOTUVĖ</a>
                <a>KONTAKTAI</a>
              </div>
            </div>
        </div>
    );
}

export default Header;
