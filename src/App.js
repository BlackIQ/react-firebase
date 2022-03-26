import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Login from "./pages/login";
import Navbar from "./components/navbar";
import Register from "./pages/register";
import Reset from "./pages/reset";

function App() {
    return (
        <Router>
            <Navbar />
            <div className='container py-4'>
                <Switch>
                    <Route exact path='/'>Index</Route>
                    <Route exact path='/login'><Login /></Route>
                    <Route exact path='/register'><Register /></Route>
                    <Route exact path='/reset'><Reset /></Route>
                    <Route exact path='/home'>Home</Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
