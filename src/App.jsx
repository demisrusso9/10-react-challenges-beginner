import React from 'react'

//Components Challenge
import DisplayData from './components/DisplayData'
import Loop from './components/Loop'
import ReactState from './components/ReactState'
import SecretPhrase from './components/SecretPhrase'
import Calculator from './components/Calculator'
import MoveTheBox from './components/MoveTheBox'
import FetchDataApi from './components/FetchDataApi'
import RecreateLayout from './components/RecreateLayout'

import './app.css'

function App() {    
    return (
        <div>
            <h1>React Challenges</h1>

            <div className="components-content">
                <h4>Display Data with JSX</h4>
                <DisplayData name="Demis Russo" age="21" location="SP" likes="Play VideoGames" />
            </div>

            <div className="components-content">
                <h4>Loop Over and Display Data with JSX</h4>
                <Loop />
            </div>

            <div className="components-content">
                <h4>Use React State to Update the DOM</h4>
                <ReactState />
            </div>

            <div className="components-content">
                <h4>Show an Alert Based on an Input</h4>
                <SecretPhrase />
            </div>
            
            <div className="components-content">
                <h4>Simple Calculator</h4>
                <Calculator />
            </div>

            <div className="components-content">
                <h4>DOM Movements with Events</h4>
                <MoveTheBox />
            </div>
            
            <div className="components-content">
                <h4>DOM Movements with Events</h4>
                <FetchDataApi />
            </div>
            
            <div className="components-content">
                <h4>Recreate Layout with Components</h4>
                <RecreateLayout name="Lightings" points={480}/>
                <RecreateLayout name="Hello" points={888}/>
                <RecreateLayout name="CallOfDuty" points={3434}/>
                <RecreateLayout name="Battlefield" points={80630}/>
                <RecreateLayout name="Lightings" points={4800}/>
                <RecreateLayout name="Hello" points={88383}/>
                <RecreateLayout name="CallOfDuty" points={34334}/>
                <RecreateLayout name="Battlefield" points={8044630}/>
            </div>
        </div>
    )
}

export default App