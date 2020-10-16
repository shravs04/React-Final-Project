import React from 'react';
import './App.css';
<<<<<<< HEAD
import TopBar from './Components/TopBar/TopBar';
import ProblemListingPage from './Containers/ProblemListingPage/ProblemListingPage';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
        <TopBar/>
        <ProblemListingPage/>
        <Footer/>
    </div>
=======
import { Route, BrowserRouter, Link, Redirect } from "react-router-dom"
import ProblemListingPage from './Containers/ProblemListingPage/ProblemListingPage';
import TopBar from "./Components/TopBar/TopBar"
import Footer from "./Components/Footer/Footer"
import HomePage from "./Containers/Homepage/Homepage"
import TopicDetailsPage from "./Containers/TopicDetailsPage/TopicDetailsPage"
import ClassRoomPage from "./Containers/ClassRoomPage/ClassRoomPage"
import ProgramDetail from "./Containers/ProgramDetailsPage/ProgramDetailsPage"
import Curriculum from "./Containers/CurriculumPage/CurriculumPage"
import SessionPlanPage from "./Containers/SessionPlanPage/SessionPlanPage"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard/:subject" component={TopicDetailsPage} />
        <Route exact path="/problemList" component={ProblemListingPage} />
        <Route exact path="/classroom" component={ClassRoomPage} />
        <Route exact path="/progDetail" component={ProgramDetail} />
        <Route exact path="/curriculumpage/:moduleId" component={Curriculum} />
        <Route exact path="/sessionplan" component={SessionPlanPage} />
        <Footer />
      </div>
    </BrowserRouter>

>>>>>>> 73b0088eeb2410592492fa5b7fe754bd40118668
  );
}

export default App;
