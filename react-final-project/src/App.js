import React from 'react';
import './App.css';
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
        <Route exact path="/problemList/:subject/:topic" component={ProblemListingPage} />
        <Route exact path="/classroom" component={ClassRoomPage} />
        <Route exact path="/progDetail" component={ProgramDetail} />
        <Route exact path="/curriculumpage/:moduleId" component={Curriculum} />
        <Route exact path="/sessionplan" component={SessionPlanPage} />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
