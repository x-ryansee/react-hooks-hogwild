import React from 'react';
import {useState} from 'react'


function HogItem({image, name, weight, specialty, greased}) {

    const [showDetails, setShowDetails] = useState(false);

    const handleClick = (e) => {
        setShowDetails(prevState => !prevState);
}
    return (
        <li classname= "ui eight wide column pigTile">
            <figures>
                <h1>{name}</h1>
                <img src={image} alt={name} height="300" width="300" onClick={handleClick}/>
                {showDetails ? (
                    <div>
                        <p>
                            {weight}, {specialty}, {greased ? "Greased" : "Not Greased"}
                        </p>
                    </div>
                ) : null
                }
                <ul></ul>
            </figures>

        </li>
    )
}

export default HogItem