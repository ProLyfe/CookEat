
import React, { Component } from 'react';

import { Link } from 'react-router-dom';

class Footer extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <footer className="footer">
                    <div className="container">
                        <div className="row">
                                <center>
                                    <h4>Ne manquez pas notre actu !</h4>
                                </center>
                                <div className="text-muted margin-t-20">
                                </div>
                                <form className="form subscribe">
                                    <input placeholder="Email" className="form-control" required />
                                    <Link onClick={evt => {  evt.preventDefault(); } } to="#" className="submit"><i className="pe-7s-paper-plane"></i></Link>
                                </form>
                        </div>
                    </div>
                </footer>
            </React.Fragment >
        );
    }
}

export default Footer;


