import React from 'react'

interface IProps {
    children : React.ReactNode
}

export default function ButtonPrimary( {children}: IProps  ) {
    return (
        <div className="flex justify-center items-center bg-grass-100 rounded-lg p-4 w-1/2 h-14 text-center hover:bg-darkgrass-100 cursor-pointer">
            <p className="font-sans text-chalk text-xl font-medium">
                {children}
            </p>
        </div>
    )
}
