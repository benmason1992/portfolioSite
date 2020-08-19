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
                        </div>
                    </Cell>

                </Grid>
            </div>
        )
    }
}

export default Landing;