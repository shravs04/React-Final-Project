import React from 'react';
import classes from './SessionRecordingPage.module.css';


function Sessionrecordingpage(props) {
    

    return (
        <div className={classes.Container}>
           <div className={classes.ClearFix}></div>
           <div className={classes.Row}>
                <div className={classes.Col}>
                    <div className={classes.Wrapper}>
                        <iframe src="https://player.vimeo.com/video/462708845" frameBorder="0" webkitallowfullscreen 
                        mozallowfullscreen allowFullScreen></iframe> 
                    </div>
                </div> 
           </div>
        </div>
    )
}

export default Sessionrecordingpage;