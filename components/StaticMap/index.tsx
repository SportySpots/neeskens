interface IProps {
    coords: {
        lat: number
        lng: number
    }
    className?: string
    withLink?: boolean
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

    const ImgComp = (
        <img
            className={props.className}
            alt="map"
            src={baseURL + '?' + queryString}
        />
    )

    if (props.withLink !== false) {
        const linkHref = `https://www.google.com/maps/place/${props.coords.lat},${props.coords.lng}`
        return (
            <a className={props.className} href={linkHref}>
                {ImgComp}
            </a>
        )
    }

    return ImgComp
}

export default StaticMap
