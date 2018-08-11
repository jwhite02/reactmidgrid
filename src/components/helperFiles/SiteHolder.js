import React, { Component } from 'react';
import Header from '../header/Header';
import ContentHolder from '../content/ContentHolder';
import Footer from '../footer/Footer';

class SiteHolder extends Component {
    render() {
        return (
            <React.Fragment>
                <Header />
                <ContentHolder />
                <Footer />
            </React.Fragment>
        );
    }
}

export default SiteHolder;