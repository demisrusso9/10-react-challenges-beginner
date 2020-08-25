import React, { useState } from 'react'

import './style.css'

function ReactState() {

    const [name, setName] = useState()
    const [age, setAge] = useState()

    return (
        <>
            <div className="display">
                <p>Display Name: {name}</p>
                <p>Display Age: {age}</p>
            </div>

            <div className="input-box">
                <label htmlFor="name">Name</label>
                <input type="text" id="name" value={name} onChange={event => setName(event.target.value)} />
            </div>

            <div className="input-box">
                <label htmlFor="age">Age</label>
                <input type="number" id="age" value={age} onChange={event => setAge(+event.target.value)} />
            </div>
        </>
    )
}

export default ReactState