import React from 'react'
import Axios from "axios"
import CourseCard from "../../Components/CourseCardModule/CourseCard"
import classes from "./Homepage.module.css"

function Homepage() {
    const [allCourses, setallCourses] = React.useState([]);
    React.useEffect(() => {
        async function makePostRequest() {
            const request = await Axios.get("https://5f860417c8a16a0016e6a8d5.mockapi.io/homePage")
            setallCourses(request.data); //Get only array
            return request
            //This will never give you the updated state, because setState is async

        }
        makePostRequest()
    }, []);

    return (
        <div>
            <div className={classes.BgColor}>
                <div className={classes.HomepageContainer}>
                    <div className={classes.HeadingContainer}>
                        <p className={classes.PracticeArena}>Practice Arena</p>
                        <p className={classes.AllSkills}>All Skills</p>
                    </div>
                    <div className={classes.CoursesContainer}>
                        {allCourses.map((current) => {
                            return <CourseCard key={current.id} ImgSrc={current.imgUrl} Course={current.course} Units={current.units} />
                        })}
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Homepage
