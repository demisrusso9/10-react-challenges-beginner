import React, { useState } from 'react'

import './style.css'

function SecretPhrase() {

    const [phrase, setPhrase] = useState('')
    const secret = 'Call';

    function showSecret(e) {
        setPhrase(e.target.value === secret ? alert('You may Pass') : e.target.value)
    }

    return (
        <div className="secret">
            <h3>What's the secret phrase?</h3>

            <input type="text" value={phrase} onChange={showSecret} />

            <p>Hint: <strong>FPS Game</strong></p>
        </div>
    )
}

export default SecretPhrase;