import React from 'react'
import Axios from "axios"
import classes from "./TopicDetailsPage.module.css"
import AssignmentCard from "../../Components/AssignmentCard/AssignmentCard"
import { imgData, blankData } from "../../Assets/data"


function TopicDetailsPage(props) {



    const courseId = props.match.params.subject;
    const [allCourses, setallCourses] = React.useState([]);
    React.useEffect(() => {

        async function makePostRequest() {
            const request = await Axios.get("https://5f860417c8a16a0016e6a8d5.mockapi.io/topiDetails")
            console.log(request.data);
            setallCourses(request.data); //Get only array
            return request
            //This will never give you the updated state, because setState is async

        }
        makePostRequest()
    }, []);


    return (
        <div className={classes.BgColor}>
            <div className={classes.ExtraWidth}></div>
            <div className={classes.TopicDetailsContainer}>
                <div className={classes.CourseHeader}>
                    <div className={classes.CourseIcon}>
                        <img src={imgData[courseId]} alt="Coutse-icon" />
                    </div>
                    <div className={classes.CourseInfo}>
                        <p className={classes.CourseName}>{courseId}</p>
                        <p className={classes.PercentageCompletion}>0.0%</p>
                        <p className={classes.AvgScore}>Avg Score</p>
                    </div>

                </div>
                <div className={classes.Assignments}>
                    {(blankData.includes(courseId)) ? <h2> No Topics Available</h2> : allCourses.map((current) => {
                        return <AssignmentCard key={current.id} id={current.id} topic={current.topic} status={current.status} course={courseId} />
                    })}

                </div>


            </div>

            <div className={classes.BottomExtra}></div>
        </div>
    )
}

export default TopicDetailsPage
