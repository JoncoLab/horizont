import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import { FooterCopyright, FooterForm, FooterTitle } from './';
import './app-footer.css';

/**
 * Сборка футера в зависимости от bool параметров, полученных в свойствах
 * @param title
 * @param form
 * @param copyright
 * @returns {*}
 * @constructor
 */
const AppFooter = ({ title, form, copyright }) => {
	
	return (
		<Fragment>
			{ title ? <FooterTitle/> : null }
			{ form ? <FooterForm/> : null }
			{ copyright ? <FooterCopyright/> : null }
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