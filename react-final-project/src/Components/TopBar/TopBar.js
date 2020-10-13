import React from 'react';
import classes from './TopBar.module.css';
import EdyodaLogo from '../../Assets/Edyodalogo.png';


const TopBar = () => {
    
    return(

       <div className={classes.Topbar}>

           <nav className={classes.NavBar}>
               <div className={classes.NavLeftContent}>
                   <div className={classes.LogoLink}>
                       <img src={EdyodaLogo} alt="EdyodaLogo"/>
                   </div>
                   <div className={classes.NavItem}>
                       <p>Practise Arena</p>
                   </div>
                   <div className={classes.NavItem}>
                       <p>Classroom</p>  
                   </div>
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