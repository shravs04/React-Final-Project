import React from 'react';
import classes from './TopBar.module.css';
import EdyodaLogo from '../../Assets/Edyodalogo.png';
import { Link } from 'react-router-dom'

const TopBar = () => {

    return (

        <div className={classes.Topbar}>

            <nav className={classes.NavBar}>
                <div className={classes.NavLeftContent}>
                    <Link to="/" className={classes.LogoLink}>
                        <img src={EdyodaLogo} alt="EdyodaLogo" />
                    </Link>
                    <Link to="/" className={classes.NavItem}>
                        <p>Practice Arena</p>
                    </Link>
                    <Link to="/classroom" className={classes.NavItem}>
                        <p>Classroom</p>
                    </Link>
                    <div className={classes.NavItem}>
                        <p>View Jobs</p>
                    </div>
                </div>

                <div className={classes.NavRightContent}>
                    <div className={classes.BellItem}>
                        <i class="fa fa-bell-o"></i>
                        <div className={classes.Number}><span className={classes.Badge}>3</span></div>
                    </div>
                    <div className={classes.LastItem}>
                        <p>Sgajula55</p>
                        <i class="fas fa-caret-down"></i>
                    </div>
                </div>
            </nav>

        </div>

    );

}


export default TopBar;