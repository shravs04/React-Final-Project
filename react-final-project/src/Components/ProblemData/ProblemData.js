import React from 'react';
import ProblemListingPage from '../../Containers/ProblemListingPage/ProblemListingPage';
import classes from './ProblemData.module.css';


const ProblemdataComp = (props) => {

    // const [id, color, title, level, score] = props;

    return(
        <div className={props.color === "purple" ? classes.TopicMed : classes.Topic}>
           <span className={props.color === "purple" ? classes.CounterMed : classes.Counter}>Problem {props.id}</span>
            <div className={classes.ProblemDetails}>
               <span className={classes.ProblemTitle}>
                   <div>{props.title}</div>
                   <div>Level : {props.level}, Max Score : {props.score}</div> 
               </span>
               <span className={classes.ProblemDifficulty}>
                   <div className={classes.Status}>Solve Problem</div> 
               </span>
            </div>   
        </div>
    );

}

export default ProblemdataComp;