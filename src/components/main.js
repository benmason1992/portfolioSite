import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Landing from './landingpage';
import About from "./aboutme";
import Contact from "./contact";
import Projects from "./projects";

const Main = () => (
    <Switch>
        <Route exact path ="/portfolioSite" component={Landing} />
        <Route path ="/portfolioSite/about" component={About} />
        <Route path ="/portfolioSite/contact" component={Contact} />
        <Route path ="/portfolioSite/projects" component={Projects} />
    </Switch>
)

export default Main;