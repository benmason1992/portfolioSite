import React, { Component } from "react";
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, CardText, IconButton, Button } from "react-mdl";

class Projects extends Component {

    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    };

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    <Card shadow={10} className="projects-card">
                        <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png) center / cover' }}>Portfolio Website</CardTitle>
                        <CardText>
                            This very website was created in React, see github below!
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/benmason1992/portfolioSite" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={10} className="projects-card">
                        <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png) center / cover' }}>Restaurant Menu</CardTitle>
                        <CardText>
                            React app to display restaurant menu, can toggle what sections of the menu appear.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/benmason1992/menuReact" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={10} className="projects-card">
                        <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2560px-React-icon.svg.png) center / cover' }}>Table Tennis Bracket App</CardTitle>
                        <CardText>
                            This was my final project in March 2020 following my attendence at DevelopMe.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/benmason1992/tech-challenge" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={10} className="projects-card">
                        <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://zdnet1.cbsistatic.com/hub/i/2019/04/21/9d791bf2-9b20-476a-bba6-201e622d2a1f/jquery-logo-blue.png) center / cover' }}>GMaps Order App</CardTitle>
                        <CardText>
                            An application that allows you to enter orders and have markers placed on google maps.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/benmason1992/orderGmap" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 1) {
            return (
                <div className="projects-grid">
                    <Card shadow={10} className="projects-card">
                        <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://vulpo.io/wp-content/uploads/2018/06/laravel-1.png) center / cover' }}>MIXR API</CardTitle>
                        <CardText>
                            I created the API in Laravel and MySQL for the back-end of this project.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/benmason1992/mixr-api" target="_blank" rel="noopener noreferrer">Github</a></Button>
                            <Button colored><a href="https://bristolruss.github.io/group-project-frontend/#/" target="_blank" rel="noopener noreferrer">Live Demo</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={10} className="projects-card">
                        <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://vulpo.io/wp-content/uploads/2018/06/laravel-1.png) center / cover' }}>instaBen</CardTitle>
                        <CardText>
                            Created a basic clone of instagram using MVC in Laravel/Vue.js.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/benmason1992/instaben" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                    <Card shadow={10} className="projects-card">
                        <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://vulpo.io/wp-content/uploads/2018/06/laravel-1.png) center / cover' }}>AWS Uploader</CardTitle>
                        <CardText>
                            A simple Laravel Application designed to read and write files to an S3 bucket.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/TerenceJefferies/aws-upload" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        } else if (this.state.activeTab === 2) {
            return (
                <div className="projects-grid">
                    <Card shadow={4} className="projects-card">
                        <CardTitle style={{ color: '#000', height: '176px', background: 'url(https://image.flaticon.com/icons/svg/919/919825.svg) center / cover' }}>Name Finder</CardTitle>
                        <CardText>
                            Created a program in Node.js that will read a .txt file and find entries that match names or entries in another .txt file. The book I used was Oliver Twist.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href="https://github.com/benmason1992/oliverT" target="_blank" rel="noopener noreferrer">Github</a></Button>
                        </CardActions>
                        <CardMenu style={{ color: '#fff' }}>
                            <IconButton name="share" />
                        </CardMenu>
                    </Card>
                </div>
            );
        };
    };
    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>JQuery/React</Tab>
                    <Tab>PHP/Laravel</Tab>
                    <Tab>Node.js</Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    };
};

export default Projects;