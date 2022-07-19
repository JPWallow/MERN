import React from 'react';
import { useParams } from 'react-router-dom';

const Parameters = (props) => {

    const {input, textColor, bgColor} = useParams();



    return(
        <div>
            {
                isNaN(input)?
                <h1 style={
                    textColor?
                    {color: textColor, backgroundColor: bgColor}
                    :
                    null
                }> 
                The word is: {input} 
                </h1>
                :
                <h1 style={
                    textColor?
                    {color: textColor, backgroundColor: bgColor}
                    :
                    null
                }>
                The number is: {input}
                </h1>
            }

        </div>
    )
}

export default Parameters;