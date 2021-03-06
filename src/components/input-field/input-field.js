import PropTypes from 'prop-types';
import React, { Fragment } from 'react';
import './input-field.css';

const InputField = ({ name, label, type, required, title, noBar, children, onChange, pattern }) => {
	const defaultChildren = (
		<Fragment>
			<input type={ type }
			       id={ name }
			       name={ name }
			       required={ required }
			       onChange={ onChange }
			       title={ title }
			       pattern={ pattern }/>
			{ noBar ? null : <span className="bar"/> }
			<label>{ label }</label>
		</Fragment>
	);
	return (
		<div className="field-container">
			<label className="group">
				{ children ? children : defaultChildren }
			</label>
		</div>
	);
};

InputField.defaultProps = {
	required: true,
	title: '',
	noBar: false,
	type: 'text'
};

InputField.propTypes = {
	name: PropTypes.string.isRequired,
	label: PropTypes.string.isRequired,
	type: PropTypes.string,
	required: PropTypes.bool,
	title: PropTypes.string,
	noBar: PropTypes.bool,
	onChange: PropTypes.func,
	pattern: PropTypes.string
};

export default InputField;