import React from 'react';
import './users-table.css';

//    need DB connection!!!

const UserList = ({name, profile}) => {
    return <span>{name},{profile}</span>
};

const UsersTable = ({allUsers}) => {
    // const users = allUsers.map((user) => {
    //     const {id, ...userProps} = user;
    //     return (
    //         <li key={id}>
    //             <UserList {...userProps}/>
    //         </li>
    //     )
    // });
    console.log(allUsers);
    return (
        <div>
        </div>
    );
};

export default UsersTable;