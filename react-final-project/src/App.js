import React from 'react';
import './App.css';
import { Route, BrowserRouter, Link, Redirect } from "react-router-dom"
import ProblemListingPage from './Containers/ProblemListingPage/ProblemListingPage';
import TopBar from "./Components/TopBar/TopBar"
import Footer from "./Components/Footer/Footer"
import HomePage from "./Containers/Homepage/Homepage"
import TopicDetailsPage from "./Containers/TopicDetailsPage/TopicDetailsPage"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TopBar />
        <Route exact path="/" component={HomePage} />
        <Route exact path="/dashboard/:subject" component={TopicDetailsPage} />
        <Route exact path="/problemList" component={ProblemListingPage} />
        <Footer />
      </div>
    </BrowserRouter>

  );
}

export default App;
