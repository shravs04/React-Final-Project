import React from 'react';
import classes from './ProblemListingPage.module.css';
import axios from 'axios';
import ProblemdataComp from '../../Components/ProblemData/ProblemData';


class ProblemListingPage extends React.Component{

    state = {
        problemData: [],
        // colorData: this.problemData.color
    }


    componentDidMount(){
        axios.get("https://5eea6936b13d0a00164e48aa.mockapi.io/adminpanel")
        .then(response => {
            console.log(response.data);
            this.setState({problemData: [...response.data]});
        })
        .catch(error => {
            console.log("Call Failed");
        })
    }

    render(){
        return(

            <div className={classes.ProblemListingWrapp}>
                 <div className={classes.ItalicText}>
                     <i className={classes.Python}>Python</i><span>></span>
                     <i className={classes.Other}>Operators and Conditional Statements</i><span>></span>
                 </div>
                 <h1 className={classes.Heading}>Problems</h1>
    
                 <div className={classes.ProblemsWrapper}>
                     {
                         this.state.problemData.map(item => {
                             return <ProblemdataComp key={item.id} id={item.id} color={item.color} title={item.title} level={item.level} score={item.score}/>
                         })
                     }
                     {/* <div className={classes.Topic}>
                         <span className={classes.Counter}>Problem 1</span>
                         <div className={classes.ProblemDetails}>
                             <span className={classes.ProblemTitle}>
                                 <div>Find area and check it is square or not</div>
                                 <div>Level : Easy, Max Score : 15</div> 
                             </span>
                             <span className={classes.ProblemDifficulty}>
                                 <div className={classes.Status}>Solve Problem</div> 
                             </span>
                         </div>   
                     </div>
                     <div className={classes.Topic}>
                         <span className={classes.Counter}>Problem 2</span>
                         <div className={classes.ProblemDetails}>
                             <span className={classes.ProblemTitle}>
                                 <div>Compute area of a circle</div>
                                 <div>Level : Easy, Max Score : 15</div> 
                             </span>
                             <span className={classes.ProblemDifficulty}>
                                 <div className={classes.Status}>Solve Problem</div> 
                             </span>
                         </div>   
                     </div>
                     <div className={classes.Topic}>
                         <span className={classes.Counter}>Problem 3</span>
                         <div className={classes.ProblemDetails}>
                             <span className={classes.ProblemTitle}>
                                 <div>Calculate value of expression</div>
                                 <div>Level : Easy, Max Score : 15</div> 
                             </span>
                             <span className={classes.ProblemDifficulty}>
                                 <div className={classes.Status}>Solve Problem</div> 
                             </span>
                         </div>   
                     </div>
                     <div className={classes.Topic}>
                         <span className={classes.Counter}>Problem 4</span>
                         <div className={classes.ProblemDetails}>
                             <span className={classes.ProblemTitle}>
                                 <div>Calculate salary</div>
                                 <div>Level : Easy, Max Score : 15</div> 
                             </span>
                             <span className={classes.ProblemDifficulty}>
                                 <div className={classes.Status}>Solve Problem</div> 
                             </span>
                         </div>   
                     </div>
                     <div className={classes.TopicMed}>
                         <span className={classes.CounterMed}>Problem 5</span>
                         <div className={classes.ProblemDetails}>
                             <span className={classes.ProblemTitle}>
                                 <div>Calculate grades</div>
                                 <div>Level : Medium, Max Score : 15</div> 
                             </span>
                             <span className={classes.ProblemDifficulty}>
                                 <div className={classes.Status}>Solve Problem</div> 
                             </span>
                         </div>   
                     </div>
                     <div className={classes.TopicMed}>
                         <span className={classes.CounterMed}>Problem 6</span>
                         <div className={classes.ProblemDetails}>
                             <span className={classes.ProblemTitle}>
                                 <div>Attendance system</div>
                                 <div>Level : Medium, Max Score : 15</div> 
                             </span>
                             <span className={classes.ProblemDifficulty}>
                                 <div className={classes.Status}>Solve Problem</div> 
                             </span>
                         </div>   
                     </div>
                     <div className={classes.TopicMed}>
                         <span className={classes.CounterMed}>Problem 7</span>
                         <div className={classes.ProblemDetails}>
                             <span className={classes.ProblemTitle}>
                                 <div>Leap Year</div>
                                 <div>Level : Medium, Max Score : 15</div> 
                             </span>
                             <span className={classes.ProblemDifficulty}>
                                 <div className={classes.Status}>Solve Problem</div> 
                             </span>
                         </div>   
                     </div>
                     <div className={classes.Topic}>
                         <span className={classes.Counter}>Problem 8</span>
                         <div className={classes.ProblemDetails}>
                             <span className={classes.ProblemTitle}>
                                 <div>Find type of triangle</div>
                                 <div>Level : Easy, Max Score : 15</div> 
                             </span>
                             <span className={classes.ProblemDifficulty}>
                                 <div className={classes.Status}>Solve Problem</div> 
                             </span>
                         </div>   
                     </div>
                     <div className={classes.TopicMed}>
                         <span className={classes.CounterMed}>Problem 9</span>
                         <div className={classes.ProblemDetails}>
                             <span className={classes.ProblemTitle}>
                                 <div>Calculate cart count</div>
                                 <div>Level : Medium, Max Score : 15</div> 
                             </span>
                             <span className={classes.ProblemDifficulty}>
                                 <div className={classes.Status}>Solve Problem</div> 
                             </span>
                         </div>   
                     </div>
                     <div className={classes.TopicMed}>
                         <span className={classes.CounterMed}>Problem 10</span>
                         <div className={classes.ProblemDetails}>
                             <span className={classes.ProblemTitle}>
                                 <div>Find obese class based on BMI</div>
                                 <div>Level : Medium, Max Score : 15</div> 
                             </span>
                             <span className={classes.ProblemDifficulty}>
                                 <div className={classes.Status}>Solve Problem</div> 
                             </span>
                         </div>   
                     </div> */}
                 </div>
            </div>
        );
    }
    
}


export default ProblemListingPage;