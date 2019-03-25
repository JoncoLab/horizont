import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default ({ component: Component, auth, ...other }) => (
	<Route { ...other }
	       render={
		       props =>
			       auth ? (
				       <Redirect to="/user-page"/>
			       ) : <Component { ...props } />
	       }
	/>
);