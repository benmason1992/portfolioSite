import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

class Contact extends Component {
    render() {
        return (
            <div className="contact-body">
                <Grid className="contact-grid">
                    <Cell col={6}>
                        <h2>Ben Mason</h2>
                        <p className="about-text">A career changing developer formerly a Civil Servant. Attended DevelopMe's bootcamp in 2020 and I am looking for my first web/software development role. </p>
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