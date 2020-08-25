import React, { useState } from 'react'
import './style.css'

function Calculator() {

    const [num1, setNum1] = useState(0);
    const [num2, setNum2] = useState(0);
    const [total, setTotal] = useState(num1 + num2);

    function sum() {
        setTotal(num1 + num2)
    }

    return (
        <div className="calc">
            <div className="input-block">
                <input type="number" value={num1} onChange={e => setNum1(+e.target.value)} />
                <input type="number" value={num2} onChange={e => setNum2(+e.target.value)} />
            </div>

            <button className="btn" onClick={sum}>Add Them</button>

            <p className="total">{total}</p>
        </div>
    )
}

export default Calculator