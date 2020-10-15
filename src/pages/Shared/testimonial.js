
import React, { Component } from 'react';

import user1 from '../../images/testimonials/user-1.jpg';
import user2 from '../../images/testimonials/user-2.jpg';
import user3 from '../../images/testimonials/user-3.jpg';

class Testimonial extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section" id="testi">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">Ce qu'en pensent nos Cookers</h1>
                                <div className="section-title-border margin-t-20"></div>
                                {/* <p className="section-subtitle text-muted text-center font-secondary padding-t-30">The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli.</p> */}
                            </div>
                        </div>
                        <div className="row margin-t-50">
                            <div className="col-lg-4">
                                <div className="testimonial-box margin-t-30">
                                    <div className="testimonial-decs p-4">
                                        <div className="p-1">
                                            <h5 className="text-center text-uppercase mb-3">Axel C - <span className="text-muted text-capitalize">PULV</span></h5>
                                            <p className="text-muted text-center mb-0">“J'aime trop le concept de pouvoir cuisiner avec des étudiants que l'on ne connait pas ! Je me suis fait de nouveaux amis.” </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-box margin-t-30">
                                    <div className="testimonial-decs p-4">
                                        <div className="p-1">
                                            <h5 className="text-center text-uppercase mb-3">Nicolas M - <span className="text-muted text-capitalize">Nanterre Université</span></h5>
                                            <p className="text-muted text-center mb-0">“Grâce à Cookeat, je cuisine à bas prix et j'ai enfin la possiblité de manger de produits sains tout en respectant les locaux.” </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="testimonial-box margin-t-30">
                                    <div className="testimonial-decs p-4">
                                        <div className="p-1">
                                            <h5 className="text-center text-uppercase mb-3">Alexandre T - <span className="text-muted text-capitalize">Nanterre Université</span></h5>
                                            <p className="text-muted text-center mb-0">“Ce que j'aime vraiement chez Cookeat c'est l'aspect humain qui s'en dégage. Nous sommes une équipe et nous nous entraidons pour pouvoir fournir un bon repas aux autres” </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </React.Fragment >
        );
    }
}

export default Testimonial;


