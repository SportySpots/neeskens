import React from 'react'

interface IProps {
    children : React.ReactNode
    onClick ?: () => any
    disabled ?: boolean
}

export default function ButtonPrimary( {children, onClick, disabled}: IProps  ) {
    return (
        <button disabled={disabled} onClick={onClick} className="disabled:bg-silver-100 flex justify-center items-center bg-grass-100 rounded-lg p-4 w-1/2 h-14 text-center hover:bg-darkgrass-100 cursor-pointer">
            <p className="font-sans text-chalk text-xl font-medium">
                {children}
            </p>
        </button>
    )
}
