import React, { Component } from 'react';
import { alert, FirebaseService } from '../../services';
import Preloader from '../preloader';
import './admin.css';

export default class Admin extends Component {
	
	fs = new FirebaseService();
	
	componentDidMount() {
		this.fs.getAllUsers()
			.then((users) => {
				this.setState({
					allUsers: users
				});
			}, () => {
				alert('Database connection error', 'error');
			})
			.finally(() => {
				this.setState({
					preloader: false
				});
			});
		
		this.fs.getAllMessages()
			.then((messages) => {
				this.setState({
					allMessages: messages
				});
			}, () => {
				alert('Database connection error', 'error');
			})
			.finally(() => {
				this.setState({
					preloader: false
				});
			});
	}
	
	render() {
		
		const content = (
			<table className="alt">
				<thead>
				<tr>
					<th>Ім'я</th>
					<th>Фамілія</th>
					<th>Побатькові</th>
					<th>Дата народження</th>
					<th>Проффеія</th>
					<th>Особисті якості</th>
					<th>Телефон</th>
					<th>Електронна адреса</th>
					<th>Адреса</th>
					<th>Наявність документів</th>
				</tr>
				</thead>
				<tbody>
				{ this.state.allUsers.map(({ id, first_name, last_name, middle_name, birthday, profession, soft_skills, tel, email, address, doc }) => (
					<tr key={ id }>
						<td><span>{ first_name }</span></td>
						<td><span>{ last_name }</span></td>
						<td><span>{ middle_name }</span></td>
						<td><span>{ birthday }</span></td>
						<td><span>{ profession }</span></td>
						<td><span>{ soft_skills }</span></td>
						<td><span>{ tel }</span></td>
						<td><span>{ email }</span></td>
						<td><span>{ address }</span></td>
						<td><span>{ doc ? 'Є в наявності' : 'Відсутні' }</span></td>
					</tr>
				)) }
				</tbody>
			</table>
		);
		
		const messages = (
			<table className="alt">
				<thead>
				<tr>
					<th>Ім'я відправника</th>
					<th>Електронна адресса</th>
					<th>Повідомлення</th>
				</tr>
				</thead>
				<tbody>
				{ this.state.allMessages.map(({ senderName, senderEmail, message }) => (
					<tr>
						<td><span>{ senderName }</span></td>
						<td><span>{ senderEmail }</span></td>
						<td><span>{ message }</span></td>
					</tr>
				)) }
				</tbody>
			</table>
		);
		
		const display = this.state.preloader ? <Preloader/> : content;
		const display2 = this.state.preloader ? <Preloader/> : messages;
		
		return (
			<div className="table-wrapper">
				{ display }
				{ display2 }
			</div>
		);
	}
	
	state = {
		preloader: true,
		allUsers: [],
		allMessages: []
	};
}