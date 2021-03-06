import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ScrollspyNav from './Scrollspy';
import toque from '../../images/cook/toque.png';


class Header extends Component {

    constructor(props) {
        super(props);
        this.state = { Tab: '', isOpen: false };

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }

    /**
     * Sets active tab
     */
    setActiveTab = (tab, e) => {
        this.setState({ Tab: tab });
    }

    render() {

        return (
            <React.Fragment>
                <div id="is-sticky">
                    <nav className="navbar navbar-expand-lg fixed-top navbar-custom sticky" id="nav-bar">
                        <div className="container">
                            <Link className="navbar-brand logo text-uppercase" to="/">
                                CookEat   
                            </Link>

                            <button className="navbar-toggler" onClick={this.toggleMenu} type="button">
                                <i className="mdi mdi-menu"></i>
                            </button>
                            <div className={this.state.isOpen ? "collapse navbar-collapse show" : "collapse navbar-collapse"} style={{ display : this.state.isOpen ? "inline-grid" : "" }} id="navbarCollapse">

                                <ScrollspyNav
                                    scrollTargetIds={["home", "features", "services", "about", "pricing", "blog", "contact"]}
                                    activeNavClass="active"
                                    scrollDuration="800"
                                    headerBackground="true"
                                    className={this.state.isOpen ? "navbar-nav ml-0 float-left" : "navbar-nav navbar-center"} >
                                        
                                    <ul className={this.state.isOpen ? "navbar-nav navbar-left" : "navbar-nav ml-auto navbar-left"} id="mySidenav">
                                        <li className="nav-item"><a href="#features" className="nav-link">Concept</a></li>
                                        <li className="nav-item"><a href="#about" className="nav-link">Nos valeurs</a></li>
                                        <li className="nav-item"><a href="#blog" className="nav-link">Avis</a></li>
                                        <li className="nav-item"><a href="#contact" className="nav-link">Contact</a> </li>
                                    </ul>

                                </ScrollspyNav>
                                <div className={this.state.isOpen ? "nav-button" : "nav-button ml-auto"}>
                                    <ul className="nav navbar-nav navbar-left">
                                        <li>
                                            <button type="button" className="btn btn-custom navbar-btn btn-rounded waves-effect waves-light">Télécharger Cookeat !</button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
            </React.Fragment >
        );
    }
}

export default Header;


