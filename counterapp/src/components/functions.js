import React from 'react';

const Timer = props => {
console.log(props)
return (
    <div>
    <h1>Hello {props.name}</h1>
    {props.children}
    </div>
    )
}
// const Timer = ({name}) => {
//     console.log()
//     return (
//         <div>
//         <h1>Hello {name}</h1>
//          {/* {props.children} */}
//         </div>
//         )
//     }

export default Timer;