import React from 'react'

import './style.css'
import users from './user-data'

function Loop() {

    const usuarios = users.map((user, i) => {
        return (
            <div className="users-box" key={i}>
                <p>{user.name}</p>
                <p>{user.location}</p>
                <p>{user.carBrand}</p>
            </div>
        )
    })

    return (
        <div className="loop">
            {usuarios}
        </div>
    )
}

export default Loop;