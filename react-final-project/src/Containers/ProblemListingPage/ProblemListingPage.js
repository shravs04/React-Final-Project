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
                 </div>
            </div>
        );
    }
    
}


export default ProblemListingPage;