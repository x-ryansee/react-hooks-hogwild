import React from "react";
import HogItem from './HogItem'

function HogTiles({hogs}) {

    const hogItem = hogs.map(hog => {
        return <HogItem keys={hog.name} image={hog.image} name={hog.name} specialty={hog.specialty} weight={hog.weight} greased={hog.greased}/>


    })

    return (
        <div>
            <ul className="ui grid container">{hogItem}</ul>
        </div>

    )
}

export default HogTiles