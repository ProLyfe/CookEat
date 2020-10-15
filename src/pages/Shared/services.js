
import React, { Component } from 'react';
import { Col, Row } from 'reactstrap';


class Services extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section bg-light" id="services">
                    <div className="container">
                        <div className="row margin-t-10">
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        {/* <i className="pe-7s-news-paper text-custom"></i> */}
                                        <div className="media-body ml-4">
                                            <h2>Plannifiable</h2>
                                            <p className="pt-2 text-muted">Mettez vos disponibilités pour que vous puissez rencontrer et cuisiner avec des personnes sans se prendre le Cook.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        {/* <i className="pe-7s-timer text-custom"></i> */}
                                        <div className="media-body ml-4">
                                            <h2>Rapide</h2>
                                            <p className="pt-2 text-muted">Ne vous prenez pas le Cook, consituer votre Cook'Team et choisissez vos repas en un rien de temps.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col lg="4" className="margin-t-20">
                                <div className="services-box">
                                    <div className="media">
                                        {/* <i className="pe-7s-piggy text-custom"></i> */}
                                        <div className="media-body ml-4">
                                            <h2>Économique</h2>
                                            <p className="pt-2 text-muted">Nos plats sont composés uniquement d'ingredients locaux et le tout à bas prix pour respecter votre budget étudiant.</p>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                        </div>
                    </div>
                </section>
            </React.Fragment>
        );
    }
}
export default Services;


