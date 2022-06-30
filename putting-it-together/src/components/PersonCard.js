import React, { useState } from "react";


const PersonCard = (props) => {
    const [ currentAge, setCurrentAge ] = useState( props.personAge );
    return (
        <div>
            <card>
                <h2> {props.lastName}, {props.firstName}</h2>
                <p> Age: {currentAge} </p>
                <p> Hair Color: {props.hairColor} </p>
                <button onClick={ () => setCurrentAge(currentAge + 1)}> Happy Birthday {props.firstName} {props.lastName}!
                </button>
            </card>
        </div>
    )
}

export default PersonCard;