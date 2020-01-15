import React from 'react'

const DEFAULT_WIDTH = 1024;
const DEFAULT_HEIGHT = 768;

const useWindowSize = () => {
    const [windowSize, setWindowSize] = React.useState({
        width: typeof window !== 'undefined' ? window.innerWidth : DEFAULT_WIDTH,
        height: typeof window !== 'undefined' ? window.innerHeight : DEFAULT_HEIGHT,
    });
    React.useEffect(() => {
        if (typeof window !== 'undefined') {
            const handler = () => {
                setWindowSize({
                    width: window.innerWidth,
                    height: window.innerHeight,
                })
            }
            window.addEventListener('resize', handler);
            return () => {
                console.log('removing event listener');
                window.removeEventListener('resize', handler);
            }
        }
    },[]);
    return windowSize;
}


export default useWindowSize;
