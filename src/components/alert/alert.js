import React, {Component} from 'react';
import './alert.css';
import * as PropTypes from "prop-types";

class Alert extends Component {

    componentWillUnmount() {
        this.props.onUnmount();
    }

    render() {
        let {message, type} = this.props;

        const valid = ['primary', 'danger', 'warning'].find((i) => type === i);

        if (!valid) {
            type = 'primary'
        }

        const classNames = `alert alert-dismissible alert-${type}`;

        return (
            <div id="alert" className={classNames}>
                <button type="button" className="close" data-dismiss="alert">&times;</button>
                <h4 className="alert-heading">{type}!</h4>
                <p className="mb-0">{message}</p>
            </div>
        )
    }
}

Alert.propTypes = {
    message: PropTypes.any,
    type: PropTypes.any
}

export default Alert;