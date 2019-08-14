import React from 'react'

const Card = React.forwardRef(({title, body, svg}, ref) => {
    return (
        <div ref={ref} className="flex-col text-center max-w-xs mt-4 lg:mt-0">
            <img className="inline-block w-24 p-4" src={svg}></img>
            <h4 className="font-sans font-bold text-2xl p-4">{title}</h4>
            <p className="font-sans text-lg leading-normal">{body}</p>
        </div>
    )
});

export default Card
