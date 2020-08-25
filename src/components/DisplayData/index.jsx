import React from 'react'

import './style.css'

function DisplayData(props) {

    const user = {
        name: 'Dominique',
        age: 22,
        location: 'SP',
        likes: 'Play VideoGames',
        github: 'demisrusso9',
        avatar: 'https://avatars3.githubusercontent.com/u/26807283?s=460&u=43336adeed8ac4575cdfba866b665ad88276b12e&v=4'
    }

    return (
        <div className="container">
            <img src={user.avatar} alt={user.name}/>
            <h2 className="title"><a href={`https://github.com/${user.github}`}>{props.name}</a></h2>

            <p className="sub-title">Location</p>
            <h3 className="description">{props.location}</h3>

            <p className="sub-title">Age</p>
            <h3 className="description">{props.age}</h3>

            <p className="sub-title">Likes</p>
            <h3 className="description">{props.likes}</h3>

            <p className="sub-title">Github</p>
            <h3 className="description"><a href={`https://github.com/${user.github}`}>{user.github}</a></h3>
        </div>
    )
}

export default DisplayData