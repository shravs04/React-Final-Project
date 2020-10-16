import React from 'react'
import classes from "./CourseCard.module.css"
import { Link } from 'react-router-dom'
function CourseCard(props) {
    return (
        <Link to={`/dashboard/${props.Course}`} className={classes.SingleCourse}>

            <div className={classes.ImageContainer}>
                <img className={classes.CourseImage} src={props.ImgSrc} alt="Python" />

            </div>
            <div className={classes.CourseDetailsContainer}>
                <div className={classes.CourseName}>{props.Course}</div>
                <div className={classes.TotalUnits}>{`${props.Units} Units`}</div>

            </div>

        </Link>
    )
}

export default CourseCard
