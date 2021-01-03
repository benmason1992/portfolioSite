import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import me from './image/me.jpg';

class Landing extends Component {
    render() {
        return(
            <div style= {{width: "100%", height:"100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src={me} alt="myself" className="image-of-me"/>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | PHP | Laravel | MySQL</p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    };
};

export default Landing;