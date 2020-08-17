import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './landingpage';
import About from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";

const Main = () => (
    <Switch>
        <Route exact path ="/" component={Landing} />
        <Route path ="/about" component={About} />
        <Route path ="/contact" component={Contact} />
        <Route path ="/projects" component={Projects} />
    </Switch>
)

export default Main;