import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class About extends Component {
    render() {
        return (
            <div>
                <h2 className="about-header">Ben Mason</h2>
                <Grid>
                    <Cell className="about-cell" col={4}>
                        <h4>Junior Developer in Bristol</h4>
                        <hr style={{ borderTop: "3px dotted", width: "50%" }} />
                        <p>At the start of 2019 I made the decision to change my career and enter the tech industry as a developer. I have always been orientated towards tech and decided to try and move myself in that direction. In October 2019 I attended an open evening with DevelopMe and subsequently enrolled on their 12-week coding fellowship web developer bootcamp starting in January 2020.
                        I am now searching for a junior developer role so that I can continue to learn and grow my skills.</p>
                        <hr style={{ borderTop: "3px dotted", width: "50%" }} />
                        <h5>Phone</h5>
                        <p>07587 170269</p>
                        <h5>Email</h5>
                        <p>benmason1992@hotmail.co.uk</p>
                    </Cell>
                    <Cell className="about-right-col" col={8}>
                        <h4>Skills</h4>
                        <hr style={{ borderTop: "3px dotted", width: "50%" }} />
                        <p>During the three month bootcamp at DevelopMe I learned the following languages and frameworks:</p>
                        <ul>
                            <li>HTML/CSS3/Bootstrap</li>
                            <li>JavaScript/JSX</li>
                            <li>React/Redux</li>
                            <li>jQuery</li>
                            <li>PHP</li>
                            <li>Laravel</li>
                            <li>SQL</li>
                            <li>Git</li>
                        </ul>
                        <h4>Previous Employment</h4>
                        <hr style={{ borderTop: "3px dotted", width: "50%" }} />
                        <h5>Civil Service 2014-2019</h5>
                        <p>My previous employment was as an insolvency examiner with the Official Receiver’s Office. I would investigate insolvencies and interview both bankrupts and directors, to build up a picture of what had occurred in the build-up to the court order. Prior to that but still within the civil servide I worked for HMRC as a tax officer.</p>

                    </Cell>
                </Grid>
            </div>
        )
    }
}

export default About;