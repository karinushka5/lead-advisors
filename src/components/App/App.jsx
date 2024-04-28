import React, {useRef, useState} from 'react';
import Header from "../Header/Header";
import Countdown from "../Countdown/Countdown";
import Footer from "../Footer/Footer";
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/routes";
import Modal from "../Modal/Modal";
import Events from "../Events/Events";

import {animated, useInView} from '@react-spring/web'

const App = () => {
    const [popUp, setPopUp] = useState(false);
    const eventRef = useRef();
    const [ref, inView] = useInView();
    const [ref2, inView2] = useInView();

    return (
            <div className="app">
                {popUp && <Modal setPopUp={setPopUp}/>}

                    <Header/>

                <div className="wrapper">
                    <animated.div className="container"
                                  ref={ref}
                                  style={{
                                      opacity: inView ? 1 : 0,
                                      transition: "0.5s ease-in-out"
                                  }}>
                        <div className="container-title">
                            Under Construction
                        </div>
                        <div className="container-info">
                            We're making lots of improvements and will be back soon
                        </div>
                    </animated.div>
                    <Countdown date={new Date('Wed, 24 Jul 2024 00:00:00')}/>
                    {/*<Countdown date={new Date('Fri, 26 Apr 2024 21:04:00')}/>*/}
                    <animated.div className="container" ref={ref2}
                         style={{
                             opacity: inView2 ? 1 : 0,
                             transition: "0.5s ease-in-out"
                         }}>
                        <div className="container-text">
                            Check our event page when you wait:
                        </div>
                        <div className="link">
                            <Link to={ROUTES.OTHER} target="_blank" className="btn-link">
                                <span>Go to the event</span>
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M4.16669 10H15.8334" stroke="white" strokeWidth="2" strokeLinecap="round"
                                          strokeLinejoin="round"/>
                                    <path d="M10 4.16666L15.8333 9.99999L10 15.8333" stroke="white" strokeWidth="2"
                                          strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </Link>
                        </div>
                    </animated.div>
                </div>

                <Footer setPopUp={setPopUp}/>
                <div className="events">
                    <button className="btn-events" onClick={()=>{
                        eventRef.current?.scrollIntoView({
                            behavior: 'smooth'
                        })
                    }}>
                        <span style={{padding: "3px 10px", fontSize: "20px"}}>Other Events</span>
                        <svg width="24" height="30" className="svg" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 5V19" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M19 12L12 19L5 12" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
                <div id="events" ref={eventRef}>
                    <Events />
                </div>

            </div>
    )
};
export default App;