import React from 'react'
import classes from "./CourseCard.module.css"
function CourseCard(props) {
    return (
        <div className={classes.SingleCourse}>
            <div className={classes.ImageContainer}>
                <img className={classes.CourseImage} src={props.ImgSrc} alt="Python" />

            </div>
            <div className={classes.CourseDetailsContainer}>
                <div className={classes.CourseName}>{props.Course}</div>
                <div className={classes.TotalUnits}>{`${props.Units} Units`}</div>

            </div>
        </div>
    )
}

export default CourseCard
