import { useState, useEffect } from 'react'

export const useScrollFilter = () => {
    if (typeof window === 'undefined') {
        return true
    }

    let [visible, setVisible] = useState(true)

    useEffect(() => {
        console.log('bla')
        let pos = window.pageYOffset
        const handleScroll = () => {
            let temp = window.pageYOffset
            const newVisibility = pos > temp
            console.log(visible, newVisibility)
            if (newVisibility !== visible) {
                console.log('change')
                window.removeEventListener('scroll', handleScroll)
                setVisible(newVisibility)
                setTimeout(() => {
                    window.addEventListener('scroll', handleScroll)
                }, 100)
            }
            pos = temp
        }
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return visible
}
