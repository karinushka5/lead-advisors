import React from 'react';
import styles from '../../styles/Modal.module.css';
const Modal = ({setPopUp}) => {
    return (
        <div className={styles.modalBackground}>
            <div className={styles.modalContainer}>
                <div className={styles.titleCloseBtn}>
                    <button
                        onClick={() => {
                            setPopUp(false);
                        }}
                    >
                        <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clipPath="url(#clip0_5_27)">
                                <path d="M13.6713 12.8072L24.0709 2.40765C24.437 2.04151 24.437 1.44789 24.0709 1.08179C23.7047 0.715702 23.1111 0.715655 22.745 1.08179L12.3454 11.4814L1.94592 1.08179C1.57978 0.715655 0.986157 0.715655 0.620064 1.08179C0.253971 1.44794 0.253924 2.04156 0.620064 2.40765L11.0196 12.8072L0.620064 23.2068C0.253924 23.5729 0.253924 24.1665 0.620064 24.5326C0.80311 24.7157 1.04306 24.8072 1.28302 24.8072C1.52297 24.8072 1.76287 24.7157 1.94597 24.5326L12.3454 14.1331L22.745 24.5326C22.928 24.7157 23.168 24.8072 23.4079 24.8072C23.6479 24.8072 23.8878 24.7157 24.0709 24.5326C24.437 24.1665 24.437 23.5729 24.0709 23.2068L13.6713 12.8072Z" fill="#135978" fillOpacity="0.5" />
                            </g>
                            <defs>
                                <clipPath id="clip0_5_27">
                                    <rect width="24" height="24" fill="white" transform="translate(0.345703 0.806458)" />
                                </clipPath>
                            </defs>
                        </svg>
                    </button>
                </div>
                <div className={styles.title}>
                    SUCCESS!
                </div>
                <div className={styles.body}>
                    You have successfully subscribed to the email newsletter
                </div>
                <div className={styles.footer}>
                    <button
                        onClick={() => {
                            setPopUp(false);
                        }}
                        id="cancelBtn"
                    >
                        Close
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Modal;