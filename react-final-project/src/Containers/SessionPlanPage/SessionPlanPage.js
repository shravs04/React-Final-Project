import React from 'react'
import classes from "./SessionPlanPage.module.css"

function SessionPlanPage() {
    return (
        <div className={classes.BgColor}>
            <div className={classes.ExtraTop}></div>
            <div className={classes.ContentWrapper}>
                <div className={classes.PageTitle}><strong>Session Plan</strong></div>

                <p><big><strong>Topics:</strong></big></p>

                <p>- Cloud Computing</p>
                <p>- IAAS</p>
                <p>- PASS</p>
                <p>- SASS</p>
                <p>- Intro to AWS</p>
                <p>- AWS Dashboard</p>
                <p>- List of AWS Services</p>


                <p><big><strong>Session Link:</strong></big></p>

                <p>https://zekelabs.zoom.us/meeting/register/tZYufuChrj8qHNElsq4QJSq6f3rQKQie7WFA<br /></p>

                <p><big><strong>Meeting Password:</strong></big></p>

                <p><samp>AWS-LIVE</samp></p>

                <p>&nbsp;</p>

            </div>
            <div className={classes.ExtraBot}></div>
        </div>
    )
}

export default SessionPlanPage
