import React, { Component } from 'react';
import { Link } from 'react-router-dom';

//Layout css
import '../css/colors/cyan.css';

// Layouts
import Header from './Layouts/header';
import Footer from './Layouts/footer';
import FooterAlt from './Layouts/footer-alt';

// Shared
import  Client from './Shared/client';
import  About from './Shared/about';
import  Services from './Shared/services';
import  WebsiteDescription from './Shared/website-description';
import  About1 from './Shared/about1';
import  Pricing from './Shared/pricing';
import  Testimonial from './Shared/testimonial';
import  GetStart from './Shared/getstart';
import  Blog from './Shared/blog';
import  ContactUs from './Shared/contact-us';
import cook from '../images/cook/logocook2.png';
// Modal Video 
import ModalVideo from 'react-modal-video'
import '../../node_modules/react-modal-video/scss/modal-video.scss';


class Index1 extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isOpen: false
        }
        this.openModal = this.openModal.bind(this)
    }
    openModal () {
        this.setState({isOpen: true})
      }

    componentDidMount()
    {
      document.body.classList = "";
      document.getElementById('nav-bar').classList.add('navbar-white');
    }


    render() {

        return (
            <React.Fragment>

                {/*  Header */}
                <Header />

                {/* Home Section */}
                <section className="section bg-home home-half" id="home" data-image-src="images/appleban.jpg">
                    <div className="bg-overlay"></div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2 text-white text-center">
                                <h4 className="home-small-title"></h4>
          
                                <img src={cook} width="652px"/>
                                <br/>
                                {/* <p className="padding-t-25 home-desc mx-auto">Et si vous pouviez cuisiner avec d’autres étudiants pour manger toute la semaine des produits de qualité, respectueux pour votre santé et l’environnement et tout ça à moindre coût?
</p> */}
                                <p className="play-shadow margin-l-r-auto"><Link to="#" onClick={this.openModal} className="play-btn video-play-icon"><i className="mdi mdi-play text-center"></i></Link></p>
                           
                                <ModalVideo channel='youtube' isOpen={this.state.isOpen} videoId='mgp42ttvtFg' onClose={() => this.setState({isOpen: false})} />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Client */}
                <Client />
                
                {/* About */}
                <About />
                
                {/* Services */}
                <Services />
                
                {/* Website Description */}
                <WebsiteDescription />
                
                {/* About Us */}
                <About1 />
                
                {/* Pricing */}
                <Pricing />

                {/* Testimonial */}
                <Testimonial />

                {/* GetStart */}
                <GetStart />
                
                {/* Blog */}
                <Blog />

                {/* ContactUs */}
                <ContactUs />

                {/* Footer */}
                <Footer />

                {/* Footer Alt */}
                <FooterAlt />

            </React.Fragment >
        );
    }
}

export default Index1;


