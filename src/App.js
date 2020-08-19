import React from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from "./components/main";
import { Link } from "react-router-dom";

function App() {
  return (
    <div className="demo-big-content">
      <Layout>
        <Header className="header-colour" title="Benjamin Mason" scroll>
          <Navigation>
            <Link to="/portfolioSite">Home</Link>
            <Link to="/portfolioSite/about">About</Link>
            <Link to="/portfolioSite/projects">Projects</Link>
            <Link to="/portfolioSite/contact">Contact</Link>
          </Navigation>
        </Header>
        <Drawer title="Title">
          <Navigation>
            <Link to="/portfolioSite">Home</Link>
            <Link to="/portfolioSite/about">About</Link>
            <Link to="/portfolioSite/projects">Projects</Link>
            <Link to="/portfolioSite/contact">Contact</Link>
          </Navigation>
        </Drawer>
        <Content>
          <div className="page-content" />
          <Main />
        </Content>
      </Layout>
    </div>
  );
}

export default App;
