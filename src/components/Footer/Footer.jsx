import React, {useState} from 'react';

import styles from '../../styles/Footer.module.css';
import axios from "axios";
const Footer = ({setPopUp}) => {
    const [email, setEmail] = useState('');
    const [emailDirty, setEmailDirty] = useState(false);
    const [emailError, setEmailError] = useState('Email should not be empty!');

    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Please enter a valid email address');
            if (!e.target.value && emailDirty) setEmailError('Email should not be empty!');
        }
        else {
            setEmailError('');
        }

    }
    const blurHandler =(e) => {
        setEmailDirty(true);
    }
    const subscribeEmail = async () => {
        try {
            const token = await axios.post(`#`, {
                email
            });
        } catch (err) {
            if (err.code === 'ERR_BAD_REQUEST' && email && !emailError) {
                setPopUp(true)
            }
        }
        setEmail('');
        setEmailDirty(false);
    }
    return (
        <div className={styles.footer}>
            <form className={styles.subscription}>
                {(emailDirty && emailError) && <div style={{color:"red", padding: "5px 20px", fontSize:"14px"}}>{emailError}</div>}
                <div className={styles.input}>
                    <input name="email" type="text" placeholder="Enter your Email and get notified"
                           value={email}
                           onChange={e=> emailHandler(e)}
                           onBlur={e=>blurHandler(e)}/>
                    <button className={styles.arrow} type="button" onClick={subscribeEmail} disabled={!!emailError}>
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M4.16669 10H15.8334" stroke="white" strokeWidth="2" strokeLinecap="round"
                                  strokeLinejoin="round"/>
                            <path d="M10 4.16666L15.8333 9.99999L10 15.8333" stroke="white" strokeWidth="2"
                                  strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Footer;