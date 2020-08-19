import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Ben Mason</h2>
                        <img src="https://media-exp1.licdn.com/dms/image/C4E03AQEolgWukYsanQ/profile-displayphoto-shrink_400_400/0?e=1602720000&v=beta&t=nbmt8UussvkmW9yZDExP6m7_BMFzL5z8v2WItI-SKk4" alt="myself" className="image-of-me" />
                        <p className="about-text">A career changing developer formerly a Civil Servant. Attended DevelopMe's bootcamp at the beginning of 2020 and am looking for my first web/software development role. </p>
                    </Cell>
                    <Cell col={6}>
                        <h2>Contact Me</h2>
                        <hr />
                        <div className="contact-listItem">
                            <p className="contact-li">
                                07587 170269
                            </p>
                            <p className="contact-li">
                                benmason1992@hotmail.co.uk
                            </p>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    };
};

export default Contact;