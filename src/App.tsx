import React from 'react';
import MainPage from "./components/mainPage/mainPage";
import {Link, Route, Routes} from 'react-router-dom';
import QuizPage from "./components/quizPage/quizPage";
import LastWindow from "./components/lastWindow/lastWindow";

const PATHS = ['/react', '/vue', '/next', '/angular']
function App() {
    return (
        <div className="App" style={{display: 'flex', flexDirection: 'column'}}>
            <Link to={'/'}>
                <div>Домой</div>
            </Link>
            <Routes>
                <Route path={'/'} element={<MainPage/>}/>
            </Routes>
            {PATHS.map((path) => (
                <Routes key={path}>
                    <Route path={path} element={<QuizPage path={path}/>}/>
                </Routes>
            ))}
            <Routes>
                <Route path={'/last'} element={<LastWindow/>}/>
            </Routes>
        </div>
  );
}

export default App;
