import React, { Component } from 'react';

class ScrollspyNav extends Component {
    constructor(props) {
        super(props);

        this.props = props;
        this.scrollTargetIds = this.props.scrollTargetIds;
        this.activeNavClass = this.props.activeNavClass;
        this.scrollDuration = Number(this.props.scrollDuration) || 1000;
        this.headerBackground = this.props.headerBackground === "true" ? true : false;

        if (this.props.router && this.props.router === "HashRouter") {
            this.homeDefaultLink = "#/";
            this.hashIdentifier = "#/#";
        } else {
            this.homeDefaultLink = "/";
            this.hashIdentifier = "#";
        }
    }
    render() {
        return (
            <div data-nav="list" className={this.props.className}>
                {this.props.children}
            </div>
        );
    }
}

export default ScrollspyNav;