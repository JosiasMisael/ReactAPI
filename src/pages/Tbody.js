import React from 'react'
const Tbody = ({ id, name, avatar, email }) => {
    return (
        <>
            <tr>
                <th scope="row">{id}</th>
                <td>{email}</td>
                <td>{name}</td>
                <td>
                    <img src={avatar} className="img-fluid" alt={name} />
                </td>
            </tr>
        </>
    )
}

export default Tbody
