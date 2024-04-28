import React, {useRef, useState} from 'react';
import clsx  from "clsx";
import styles from '../../styles/Events.module.css';
import {animated, useInView} from '@react-spring/web'
import {ROUTES} from "../../routes/routes";
import {Link} from "react-router-dom";
const Events = () => {
    const [ref1, inView] = useInView();
    const [activeImg,setActiveImg] = useState(1);
    const handler = (id) => {
        setActiveImg(id);}
    return (
        <animated.div className={styles.App} ref={ref1}
             style={{
                 opacity: inView ? 1 : 0,
                 transition: "0.5s ease-in-out"
             }}>
            <div className={styles.title}
                         >All events</div>
                <div className={styles.imgAccordion}>
                    <div
                        className={activeImg === 1 ? clsx(styles.img, styles.img1, styles.activeImg) : clsx(styles.img, styles.img1)}
                        id={1} onClick={() => handler(1)}>
                        <div className={styles.name}>
                            <p className={styles.text}>Hawaiian party</p>
                            <p className={styles.number}>01</p>

                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>Hawaiian party</div>
                            <div className={styles.infoDate}>13.02.2023</div>
                            <Link to={ROUTES.OTHER} target="_blank" className={styles.linkEvent}>
                                More information
                            </Link>
                        </div>

                    </div>
                    <div
                        className={activeImg === 2 ? clsx(styles.img, styles.img2, styles.activeImg) : clsx(styles.img, styles.img2, styles.hidden)}
                        onClick={() => handler(2)}>
                        <div className={styles.name}>
                            <p className={styles.text}>Mafia party</p>
                            <p className={styles.number}>02</p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>Mafia party</div>
                            <div className={styles.infoDate}>13.02.2023</div>
                            <Link to={ROUTES.OTHER} target="_blank" className={styles.linkEvent}>
                                More information
                            </Link>
                        </div>
                    </div>

                    <div
                        className={activeImg === 3 ? clsx(styles.img, styles.img3, styles.activeImg) : clsx(styles.img, styles.img3, styles.hidden)}
                        onClick={() => handler(3)}>
                        <div className={styles.name}>
                            <p className={styles.text}>Party</p>
                            <p className={styles.number}>03</p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>Party</div>
                            <div className={styles.infoDate}>13.02.2023</div>
                            <Link to={ROUTES.OTHER} target="_blank" className={styles.linkEvent}>
                                More information
                            </Link>
                        </div>
                    </div>

                    <div
                        className={activeImg === 4 ? clsx(styles.img, styles.img4, styles.activeImg) : clsx(styles.img, styles.img4, styles.hidden)}
                        onClick={() => handler(4)}>
                        <div className={styles.name}>
                            <p className={styles.text}>Party on the beach</p>
                            <p className={styles.number}>04</p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>Party on the beach</div>
                            <div className={styles.infoDate}>13.02.2023</div>
                            <Link to={ROUTES.OTHER} target="_blank" className={styles.linkEvent}>
                                More information
                            </Link>
                        </div>
                    </div>

                    <div
                        className={activeImg === 5 ? clsx(styles.img, styles.img5, styles.activeImg) : clsx(styles.img, styles.img5, styles.hidden)}
                        onClick={() => handler(5)}>
                        <div className={styles.name}>
                            <p className={styles.text}>Home Security</p>
                            <p className={styles.number}>05</p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>Home Security</div>
                            <div className={styles.infoDate}>13.02.2023</div>
                            <Link to={ROUTES.OTHER} target="_blank" className={styles.linkEvent}>
                                More information
                            </Link>
                        </div>
                    </div>
                    <div
                        className={activeImg === 6 ? clsx(styles.img, styles.img6, styles.activeImg) : clsx(styles.img, styles.img6, styles.hidden)}
                        onClick={() => handler(6)}>
                        <div className={styles.name}>
                            <p className={styles.text}>Network Design & Implementation</p>
                            <p className={styles.number}>06</p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>Network Design & Implementation</div>
                            <div className={styles.infoDate}>13.02.2023</div>
                            <Link to={ROUTES.OTHER} target="_blank" className={styles.linkEvent}>
                                More information
                            </Link>
                        </div>
                    </div>
                    <div
                        className={activeImg === 7 ? clsx(styles.img, styles.img7, styles.activeImg) : clsx(styles.img, styles.img7, styles.hidden)}
                        onClick={() => handler(7)}>
                        <div className={styles.name}>
                            <p className={styles.text}>System Design & Engineering</p>
                            <p className={styles.number}>07</p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>System Design & Engineering</div>
                            <div className={styles.infoDate}>13.02.2023</div>
                            <Link to={ROUTES.OTHER} target="_blank" className={styles.linkEvent}>
                                More information
                            </Link>
                        </div>
                    </div>
                    <div
                        className={activeImg === 8 ? clsx(styles.img, styles.img8, styles.activeImg) : clsx(styles.img, styles.img8, styles.hidden)}
                        onClick={() => handler(8)}>
                        <div className={styles.name}>
                            <p className={styles.text}>Client Care Plans</p>
                            <p className={styles.number}>08</p>
                        </div>
                        <div className={styles.info}>
                            <div className={styles.infoTitle}>Client Care Plans</div>
                            <div className={styles.infoDate}>13.02.2023</div>
                            <Link to={ROUTES.OTHER} target="_blank" className={styles.linkEvent}>
                                More information
                            </Link>
                        </div>
                    </div>
                </div>
        </animated.div>
    );
};

export default Events;