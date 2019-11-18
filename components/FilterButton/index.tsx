import React, { useState } from 'react'
import { MdExpandMore, MdLocationOn } from 'react-icons/md'
import { useTransition, animated } from 'react-spring'

interface IProps {
    options: Record<string, string>
    value: string
    onChange: (value: string) => void
    placeholder: string
    icon: 'marker' | 'dropdown' | undefined
}

function FilterButton({ placeholder, options, value, onChange, icon }: IProps) {
    const [menuOpen, set] = useState(false)

    const handleBtnClick = () => set(!menuOpen)

    const transitions = useTransition(menuOpen, null, {
        from: { opacity: 0, transform: 'translateY(-2%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(-2%)' },
    })

    const selectedValue = options[value] || placeholder

    const setOption = (optionKey: string) => {
        onChange(optionKey)
        set(false)
    }

    const optionsContent = Object.entries(options).map(
        ([optionKey, optionValue]) => (
            <div
                className="py-1 cursor-pointer bg-descriptive"
                key={optionKey}
                onClick={() => setOption(optionKey)}
            >
                {optionValue} {optionKey === value ? '(selected)' : ''}
            </div>
        )
    )

    let iconElement = <MdExpandMore />
    if (icon === 'marker') {
        iconElement = <MdLocationOn />
    }
    return (
        <div>
            <button
                className="bg-transparent py-2 px-4 mr-4 border focus:outline-none rounded flex flex-row "
                onClick={handleBtnClick}
            >
                {selectedValue}
                <div className="ml-2 self-center">{iconElement}</div>
            </button>
            {transitions.map(
                ({ item, key, props }) =>
                    item && (
                        <animated.div
                            style={{ ...props }}
                            className="mt-1 px-4 py-2 border rounded"
                            key={key}
                        >
                            {optionsContent}
                        </animated.div>
                    )
            )}
        </div>
    )
}

export default FilterButton
