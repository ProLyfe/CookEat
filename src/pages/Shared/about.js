
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ecran8 from '../../images/cook/ecran8.png';


import grAnaly from '../../images/growth-analytics.svg';

class About extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section" id="features">
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-lg-5 order-2 order-lg-1">
                                <div className="features-box mt-5 mt-lg-0">
                                    <h3>Un projet ambitieux mené par des étudiants pour les étudiants</h3>
                                    <p className="text-muted web-desc">Notre objectif est d'améliorer la qualité de vie des étudiants au niveau de leur alimentation et d'encourager la consommation responsable.</p>
                                    <ul className="text-muted list-unstyled margin-t-30 features-item-list">
                                        <li className="">Mangez des produits de qualité à moindre coût.</li>
                                        <li className="">Faites connaissances avec vos futur Cook'quipier.</li>
                                        <li className="">Vous pourrez enfin respecter votre budget étudiant.</li>
                                    </ul>
                                    {/* <Link to="#" className="btn btn-custom margin-t-30 waves-effect waves-light">Learn More <i className="mdi mdi-arrow-right"></i></Link> */}
                                </div>
                            </div>
                            <div className="col-lg-7 order-1 order-lg-2">
                                <div className="features-img mx-auto mr-lg-0">
                                    {/* <img src={grAnaly} alt="macbook" className="img-fluid" /> */} 
                                    
                                    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={ecran8} alt="First slide"/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    {/* <span class="carousel-control-prev-icon" aria-hidden="true"></span> */}
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    {/* <span class="carousel-control-next-icon" aria-hidden="true"></span> */}
    <span class="sr-only">Next</span>
  </a>
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

export default About;


