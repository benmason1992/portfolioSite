import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Landing extends Component {
    render() {
        return(
            <div style= {{width: "100%", margin: "auto"}}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEolgWukYsanQ/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=nbmt8UussvkmW9yZDExP6m7_BMFzL5z8v2WItI-SKk4" alt="myself" className="image-of-me"/>
                        <div className="banner-text">
                            <h1>Full Stack Web Developer</h1>
                            <hr/>
                            <p>HTML/CSS | Bootstrap | JavaScript | React | PHP | Laravel | MySQL</p>
                            <div className="social-links">
                                <a href="https://www.linkedin.com/in/benmason1992/" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-linkedin-square" aria-hidden="true"></i>
                                </a>
                                <a href="https://github.com/benmason1992" target="_blank" rel="noopener noreferrer">
                                    <i className="fa fa-github-square" aria-hidden="true"></i>
                                </a>
                            </div>

                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Landing;