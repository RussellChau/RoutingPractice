
import React from 'react';

const PageHome = props => {
    if (!props.word) {
        return (
            <div>
                Welcome
            </div>
        );
    } else {
        if(isNaN(props.word)) {
            return (
                <div>
                    <h1 style={
                        props.color
                        ? { color: props.color, backgroundColor: props.backgroundColor }
                        : null
                    }>
                    The word is: {props.word}
                    </h1>
                </div>
            );            
        } else {
            return (
                <div>
                    The number is {props.word}
                </div>
            );                
        }
    }

}
 export default PageHome;
