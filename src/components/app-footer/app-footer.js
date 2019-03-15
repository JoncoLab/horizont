import React, {Fragment} from 'react';
import './app-footer.css';
import { FooterTitle, FooterForm, FooterCopyright } from "./";
import PropTypes from 'prop-types';

const AppFooter = ({ title, form, copyright }) => {

    return (
        <Fragment>
            { title ? <FooterTitle /> : null }
            { form ? <FooterForm /> : null }
            { copyright ? <FooterCopyright /> : null }
        </Fragment>
    );
};

AppFooter.defaultProps = {
    title: false,
    form: false,
    copyright: true
};

AppFooter.propTypes = {
    title: PropTypes.bool,
    form: PropTypes.bool,
    copyright: PropTypes.bool
};

export default AppFooter;