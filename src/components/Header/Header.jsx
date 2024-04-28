import React from 'react';
import {Link} from "react-router-dom";
import {ROUTES} from "../../routes/routes";

import LOGO from "../../images/Group.svg";
import LOGOmin from "../../images/Group320.svg";
import styles from '../../styles/Header.module.css';

const Header = () => {
    return (
            <div className={styles.header}>
                <Link to={ROUTES.HOME}>
                    {window.innerWidth > 320 ?
                        <img src={LOGO} alt="lead-advisors"/> :
                        <img src={LOGOmin} alt="lead-advisors"/>}

                </Link>
            </div>
    );
};

export default Header;