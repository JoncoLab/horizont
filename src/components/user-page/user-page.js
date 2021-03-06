import React, { Component, Fragment } from 'react';
import { alert, FirebaseService } from '../../services';
import Preloader from '../preloader';
import './user-page.css';

export default class UserPage extends Component {
	
	fs = new FirebaseService();

	// file = file => document.getElementById('fileUp');

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.fileInput = React.createRef();
    }

    handleSubmit = (event) => {
        event.preventDefault();

        const fileUp = this.fileInput.current.files[0];

        //test on cache file successful
        alert(
            `файл сформовано - ${
                this.fileInput.current.files[0].name
                }`);
        console.log(fileUp);
        console.log(fileUp.type);
        //if exist on FBS
        // this.fs.uploadFile(fileUp)
        //     .then(
        //         //test on cache file successful
        //         alert(
        //             `файл сформовано - ${
        //                 this.fileInput.current.files[0].name
        //                 }`
        //         )
        //     );


        /**
         * todo: Подгрузка и добавление файлов в Storage
         */
    };

	componentDidMount() {
		
		const currentUser = this.fs.getCurrentUser();
		
		if (currentUser !== null) {
			const tel = currentUser.phoneNumber;
			this.fs.getUserByTel(tel)
				.then(
					userData => {
						this.setState({ userData, preloader: false });
					},
					error => {
						alert(error.message, 'error');
					}
				);
		} else {
			this.props.history.push('/sign-in');
		}
	}
	
	render() {

		const { first_name, last_name, middle_name, birthday, profession, soft_skills, tel, email, address } = this.state.userData;
		
		const details = (
			<div className="details">
				<div className="tags">
					{/*Profile!!!!!!!!!!!!!!!!!!!!*/ }
					<div className="tag orange"><span className="caption">Професія: </span> { profession }</div>
				</div>
				{/*User name!!!!!!!!!!!!!!!!!!*/ }
				<div className="title">{ first_name } { last_name } { middle_name }</div>
				
				<div className="description">
					{/*Location Address!!!!!!!!!!!!!!!!!!!!!*/ }
					<div className="info-row"><i className="fa fa-map-marker"/><span
						className="caption">Адреса: </span><span
						className="value"> { address }</span></div>
					{/*Registration date!!!!!!!!!!!!!!!!!!!!*/ }
					<div className="info-row"><i className="fa fa-calendar"/><span className="caption">Дата народження: </span><span
						className="value">{ birthday }</span></div>
				</div>
			</div>
		);
		
		const further = (
			<div className="further">
				<div className="info-row">
					<div><h3>Контактна інформація</h3></div>
					{/*main tel number!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/ }
					<div className="info-block"><i className="fa fa-home"/><span
						className="value">{ tel }</span>
					</div>
				</div>
				
				<div className="info-row">
					{/*email address!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/ }
					<div className="info-block"><i className="fa fa-envelope"/><span
						className="value">{ email || 'email відсутній' }</span></div>
				</div>
				<div className="info-row">
					<div><h4>Особисті якості: </h4></div>
					{/*soft-skills!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!*/ }
					<div className="info-block"><i className="fa fa-archive"/><span
						className="value">{ soft_skills }</span></div>
				</div>
			</div>
		);
        //like this or https://codepen.io/GeoffreyCrofte/pen/HbwcG
		const footerButtons = (
			<form className="footer-buttons custom-file" onSubmit={this.handleSubmit}>
                <input className="btn btn-outline-info" id="fileUp" type="file" ref={this.fileInput} aria-label="some text" placeholder="some text"/>
                <button className="btn btn-outline-info" type="submit">Upload</button>
			</form>

		);
		
		const display = content => this.state.preloader ? <Preloader/> : content;
		
		return (
			<Fragment>
				<div className="content container user-page" id="user-page">
					<div className="profile">
						{ display(details) }
						<hr/>
						{ display(further) }
					</div>
					{ display(footerButtons) }
				</div>
			</Fragment>
		);
	}

	state = {
		preloader: true,
		userData: {}
	};
}

