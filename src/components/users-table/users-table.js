import React from 'react';
import './users-table.css';

const UsersTable = ({allUsers}) => {
    return (
        <div className="table-wrapper">
            <table className="alt">
                <thead>
                <tr>
                    <th>Ім'я</th>
                    <th>Фамілія</th>
                    <th>Побатькові</th>
                    <th>Проффеія</th>
                    <th>Телефон</th>
                    <th>Електронна адреса</th>
                    <th>Адреса</th>
                    <th>Наявність документів</th>
                </tr>
                </thead>
                <tbody>
                    {allUsers.map(({id, first_name, last_name, middle_name, profession, tel, email, address, doc}) => (
                        <tr key={id}>
                            <td><span>{first_name}</span></td>
                            <td><span>{last_name}</span></td>
                            <td><span>{middle_name}</span></td>
                            <td><span>{profession}</span></td>
                            <td><span>{tel}</span></td>
                            <td><span>{email}</span></td>
                            <td><span>{address}</span></td>
                            <td><span>{doc ? "Є в наявності" : "Відсутні"}</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default UsersTable;