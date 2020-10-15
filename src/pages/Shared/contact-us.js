
import React, { Component } from 'react';
import { AvForm, AvField } from 'availity-reactstrap-validation';

class ContatUs extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {

        return (
            <React.Fragment>
                <section className="section " id="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8 offset-lg-2">
                                <h1 className="section-title text-center">Contactez nous</h1>
                                <div className="section-title-border margin-t-20"></div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="custom-form mt-4 pt-4">
                                    <div id="message"></div>
                                    <AvForm id="contact-form">
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <div className="form-group mt-2">
                                                   <AvField type="text" name="name" className="form-control"  placeholder="Nom*"  required />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group mt-2">
                                                <AvField type="email" name="email" className="form-control"  placeholder="Email*"  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                <AvField type="text"   name="subject" className="form-control"  placeholder="Sujet"  required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12">
                                                <div className="form-group mt-2">
                                                    <textarea name="comments"  id="comments" rows="4" className="form-control" placeholder="Votre message"></textarea>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-lg-12 text-right">
                                                <input type="submit" id="submit" name="send" className="submitBnt btn btn-custom" value="Envoyer" />
                                                <div id="simple-msg"></div>
                                            </div>
                                        </div>
                                    </AvForm>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </React.Fragment>
        );
    }
}

export default ContatUs;


