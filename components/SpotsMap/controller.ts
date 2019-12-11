import * as L from 'leaflet';

//markercluster only appears to work if there is a 'global' L on window.
(window as any).L = L;
import 'leaflet.markercluster';
import 'leaflet/dist/leaflet.css';
import 'leaflet.markercluster/dist/MarkerCluster.css';
import 'leaflet.markercluster/dist/MarkerCluster.Default.css';


const defaultIcon = new L.Icon({
    // iconUrl: 'https://image.flaticon.com/icons/png/512/37/37134.png',
    iconUrl: 'https://rawcdn.githack.com/SportySpots/cruijff/4a3b1a0fe4c7c856c001bd0bd6ccf0a5eee36895/App/Components/Spots/WebViewMap/marker.svg',
    iconSize: new L.Point(20, 20),
});

const selectedIcon = new L.Icon({
    iconUrl: 'https://rawcdn.githack.com/SportySpots/cruijff/4a3b1a0fe4c7c856c001bd0bd6ccf0a5eee36895/App/Components/Spots/WebViewMap/marker.svg',
    // iconUrl: 'https://rawcdn.githack.com/google/material-design-icons/224895a86501195e7a7ff3dde18e39f00b8e3d5a/communication/svg/production/ic_location_on_48px.svg',
    iconSize: new L.Point(30, 30),
});

const tilemapURL = 'https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png';

export interface Coords {
    lat: number;
    lng: number;
}

export interface MarkerData {
    coords: Coords;
    uuid: string;
}

class IDMarker extends L.Marker {
    public id: string;
    constructor(coords: Coords, id: string) {
        const options = {
            icon: defaultIcon,
        };
        super([coords.lat, coords.lng], options);
        this.id = id;
    }
}


class SpotsMapController {
    public map: L.Map;
    public tileLayer: L.TileLayer;
    public markersLayerGroup: L.MarkerClusterGroup;
    public gpsMarker: L.CircleMarker;
    constructor(container: HTMLElement | null) {
        this.map = new L.Map(container || 'test', {
            minZoom: 5,
            maxZoom: 18,
        }).setView([52.370216, 4.895168], 13)

        this.tileLayer = new L.TileLayer(tilemapURL, {
            attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>',
            maxZoom: 18,
        }).addTo(this.map);
        this.markersLayerGroup = L.markerClusterGroup({
            spiderfyOnMaxZoom: false,
            showCoverageOnHover: false,
            zoomToBoundsOnClick: true,
            animate: true,
            animateAddingMarkers: false
        }).addTo(this.map);

        this.gpsMarker = new L.CircleMarker([52.370216, 4.895168], { radius: 10 }).addTo(this.map);
        // L.circle(e.latlng, radius).addTo(map);
    }

    public setGPSMarkerPosition(coords: Coords) {
        this.gpsMarker.setLatLng([coords.lat, coords.lng]);
    }

    public sendMoveMessage() {
        const center = this.map.getCenter();
        const bounds = this.map.getBounds();
        const nw = bounds.getNorthWest();
        const se = bounds.getSouthEast();
        const maxDistance = this.map.distance(center, nw);
        console.log(se, maxDistance);
    }

    public onMarkerClick(marker: IDMarker) {
        try {
            this.markersLayerGroup.eachLayer((marker: any) => marker.setIcon(defaultIcon));
            marker.setIcon(selectedIcon);
            // this.map.panTo(marker.getLatLng());
        } catch (e) {
            console.log(e);
        }
    }

    public setMarkers(newMarkers: MarkerData[]) {
        const newIDS = newMarkers.map(marker => marker.uuid);
        const currentMarkers = this.markersLayerGroup.getLayers() as IDMarker[];
        const currentMarkerIDS = currentMarkers.map(marker => marker.id);

        // remove markers not in the new set
        currentMarkers.forEach(marker => {
            if (newIDS.indexOf(marker.id) === -1) {
                this.markersLayerGroup.removeLayer(marker);
            }
        });

        // add new markers
        newMarkers.forEach(marker => {
            if (currentMarkerIDS.indexOf(marker.uuid) === -1) {
                this.addMarker(marker.coords, marker.uuid);
            }
        });

        // this.markersLayerGroup.eachLayer((marker: any) => marker.setIcon(defaultIcon));
    }

    public addMarker(coords: Coords, id: string) {
        const newMarker = new IDMarker(coords, id);
        newMarker.on('click', (e) => { this.onMarkerClick(e.target); });
        newMarker.addTo(this.markersLayerGroup);
    }

    public clearMarkers() {
        this.markersLayerGroup.clearLayers();
    }
}

export default SpotsMapController;
