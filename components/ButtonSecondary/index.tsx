import React from 'react'

interface IProps {
    children : React.ReactNode
}

export default function ButtonSecondary( {children}: IProps  ) {
    return (
        <div className="flex justify-center items-center bg-shade-100 rounded-lg p-4 w-64 text-center hover:bg-dusk cursor-pointer">
            <p className="font-sans text-chalk text-xl font-medium">
                {children}
            </p>
        </div>
    )
}
