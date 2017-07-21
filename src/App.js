import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Stadium from './components/stadium/Stadium';
import StadiumSvg from './components/stadiumSvg/StadiumSvg';

const App = () => (
    <Router>
        <main>
            <div>Stadium Seat Picker</div>
            <Route exact path="/" component={Stadium} submitStand={() => {}} />
            <Route path="/svg" component={StadiumSvg} />
        </main>
    </Router>
);

export default App;
