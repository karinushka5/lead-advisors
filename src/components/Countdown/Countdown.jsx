import React, {useEffect, useState} from 'react';

import styles  from '../../styles/Countdown.module.css';
import {animated,useInView} from "@react-spring/web";
const Countdown = ({date}) => {
    const [finishTime] = useState(date.getTime());
    const [[diffDays, diffH, diffM, diffS], setDiff] = useState([0, 0, 0, 0]);
    const [tick, setTick] = useState(false);
    const [isTimeout, setIsTimeout] = useState(false);
    const [timerId, setTimerID] = useState(0);
    const [ref, inView] = useInView();

    useEffect(() => {
        const diff = (finishTime - new Date()) / 1000;
        if (diff < 0) {
            setIsTimeout(true);
            return;
        }
        setDiff([
            Math.floor(diff / 86400), // дни
            Math.floor((diff / 3600) % 24),
            Math.floor((diff / 60) % 60),
            Math.floor(diff % 60)
        ]);
    }, [tick, finishTime]);

    useEffect(() => {
        if (isTimeout) clearInterval(timerId);
    }, [isTimeout, timerId]);

    useEffect(() => {
        const timerID = setInterval(() => {
            setTick(!tick);
        }, 1000);
        setTimerID(timerID);
        return () => clearInterval(timerID);
    }, [tick]);
    return (
        <animated.div className={styles.countdown}
                      ref={ref}
                      style={{
                          opacity: inView ? 1 : 0,
                          transition: "0.5s ease"
                      }}>
            <div className={styles.number}>
                <span className={styles.time}>{diffDays}</span>
                <span className={styles.colon}>:</span>
                <span className={styles.text}>{window.innerWidth>1024? 'Days' : 'DD'}</span>
            </div>
            <div className={styles.number}>
                <span className={styles.time}>{diffH}</span>
                <span className={styles.colon}>:</span>
                <span className={styles.text}>{window.innerWidth>1024? 'Hours' : 'HH'}</span>
            </div>
            <div className={styles.number}>
                <span className={styles.time}>{diffM}</span>
                <span className={styles.colon}>:</span>
                <span className={styles.text}>{window.innerWidth>1024? 'Minutes' : 'MM'}</span>
            </div>
            <div className={styles.number}>
                <span className={styles.time}>{diffS}</span>
                <span className={styles.text}>{window.innerWidth>1024? 'Seconds' : 'SS'}</span>
            </div>
        </animated.div>
    );
};

export default Countdown;