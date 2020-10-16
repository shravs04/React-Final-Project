import React from 'react'
import classes from "./AssignmentCard.module.css"
import { Link } from 'react-router-dom'

function AssignmentCard(props) {
    return (
        <div className={classes.AssignmentCard}>
            <div className={classes.AssignmentDetails}>
                <Link to={`/problemList/${props.course}/${props.topic}`}>
                    <div className={classes.AssignmentName}>
                        <div className={classes.RightSideName}>
                            <span className={classes.NameSum}>{`${props.id}).`}</span>
                            <span className={classes.NameName}>{props.topic}</span>
                        </div>
                        <div className={classes.LeftSideSection}>
                            <span className={classes.PendingState}>
                                {props.status}
                            </span>
                        </div>
                    </div>
                </Link>

            </div>

        </div>
    )
}

export default AssignmentCard
