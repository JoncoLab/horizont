import React, { Component, Fragment } from 'react';
import { Redirect } from 'react-router-dom';
import { FirebaseService } from '../../services';
import Preloader from '../preloader';
import './log-out.css';

class LogOut extends Component {
	
	fs = new FirebaseService();
	
	componentDidMount() {
		
		this.fs.signOutUser()
			.then(
				() => {
					this.setState({
						path: '/',
						preloader: false
					});
				},
				error => {
					console.log(error);
					alert('Щось пішло не так!');
					this.setState({
						path: '/user-page',
						preloader: false
					});
				}
			);
	}
	
	render() {
		
		const { preloader, path } = this.state;
		const display = preloader ? <Preloader/> : <Redirect to={ path }/>;
		
		return (
			<Fragment>
				{ display }
			</Fragment>
		);
	}
	
	state = {
		preloader: true,
		path: ''
	};
}

export default LogOut;