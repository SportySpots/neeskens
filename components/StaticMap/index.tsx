interface IProps {
    coords: {
        lat: number
        lng: number
    },
    className?: string
}

const StaticMap = (props: IProps) => {
    const coords = props.coords

    const baseURL = 'https://maps.googleapis.com/maps/api/staticmap'
    const coordsString = `${coords.lat},${coords.lng}`
    const params: { [label: string]: any } = {
        center: coordsString,
        zoom: 13,
        scale: 1,
        size: '600x300',
        maptype: 'roadmap',
        format: 'png',
        visual_refresh: true,
        markers: 'color:0x00ff00%7Clabel:S%7C' + coordsString,
        markers_size: 'mid',
        key: process.env.googleMapsAPIKey,
    }

    const queryString = Object.keys(params)
        .map(key => `${key}=${params[key]}`)
        .join('&')

    return <img className={props.className} alt="map" src={baseURL + '?' + queryString} />
}

export default StaticMap
