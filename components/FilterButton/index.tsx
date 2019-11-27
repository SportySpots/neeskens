import React, { useState } from 'react'
import { MdExpandMore, MdLocationOn } from 'react-icons/md'
import { useTransition, animated } from 'react-spring'
import useOnClickOutside from '../../hooks/useOnClickOutside'

interface IProps {
    options: Record<string, string>
    value: string
    onChange: (value: string) => void
    placeholder: string
    icon: 'marker' | 'dropdown' | undefined
}

function FilterButton({ placeholder, options, value, onChange, icon }: IProps) {
    const selfRef = React.createRef<HTMLDivElement>()
    const [menuOpen, setMenuOpen] = useState(false)

    const handleBtnClick = () => setMenuOpen(!menuOpen)

    useOnClickOutside(selfRef, () => {
        setMenuOpen(false)
    })

    const transitions = useTransition(menuOpen, null, {
        from: { opacity: 0, transform: 'translateY(-2%)' },
        enter: { opacity: 1, transform: 'translateY(0%)' },
        leave: { opacity: 0, transform: 'translateY(-2%)' },
    })

    const selectedValue = options[value] || placeholder

    const setOption = (optionKey: string) => {
        onChange(optionKey)
        setMenuOpen(false)
    }

    const optionsContent = Object.entries(options).map(
        ([optionKey, optionValue]) => {
            const classNames =
                'py-1 pl-4 pr-8 cursor-pointer bg-descriptive w-full ' +
                (optionKey === value ? 'bg-silver-100' : '')
            return (
                <div
                    className={classNames}
                    key={optionKey}
                    onClick={() => setOption(optionKey)}
                >
                    {optionValue}
                </div>
            )
        }
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
            <div>
                {transitions.map(
                    ({ item, key, props }) =>
                        item && (
                            <animated.div
                                ref={selfRef}
                                style={{ ...props }}
                                className="absolute bg-chalk mt-1 py-2 border rounded"
                                key={key}
                            >
                                {optionsContent}
                            </animated.div>
                        )
                )}
            </div>
        </div>
    )
}

export default FilterButton
