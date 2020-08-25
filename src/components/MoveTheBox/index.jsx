import React, { useState } from 'react'
import './style.css'

function MoveTheBox() {

    const [moveUp, setMoveUp] = useState(300);

    function moveBoxUp() {
        setMoveUp(moveUp - 20)
    }

    return (
        <div className="move-box">
            <p>Move the Box!</p>

            <button className="btn-box" onClick={moveBoxUp}>Move Up</button>

            <div className="box" style={{
                transform: `translateY(${moveUp}px)`,
            }} />
        </div>
    )
}

export default MoveTheBox