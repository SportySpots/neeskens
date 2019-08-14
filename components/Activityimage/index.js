import React from 'react'

const ActivityImage = () => {
    return (
        <div className="rounded-lg shadow">
            <div className="absolute rounded-br-lg rounded-tl-lg bg-notify-100 w-24">
                <p className="pt-2 px-4 text-2xl font-bold text-chalk text-center">19</p>
                <p className="pb-2 px-4 text-xl text-chalk text-center">april</p>
            </div>
            <img className="rounded-lg bg-night" src="https://www.urbansoccerpark.com/hs-fs/hubfs/san-francisco-urban-soccer-park.jpg?width=1920&height=1152&name=san-francisco-urban-soccer-park.jpg" alt="{}"/>
        </div>
    )
}

export default ActivityImage
