import React, { Component } from 'react';
import './App.css';
import {Home, AiMain, SiMain, StMain, Signin, Signup, Si2Main} from './container';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';


class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/ai" component={AiMain} />
                        <Route path="/si" component={SiMain} />
                        <Route path="/st" component={StMain} />
                        <Route path="/signin" component={Signin} />
                        <Route path="/signup" component={Signup} />
                        <Route path="/si2" component={Si2Main} />
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
