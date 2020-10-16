import React from 'react';
import './App.css';
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
  );
}

export default App;
