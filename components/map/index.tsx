import dynamic from "next/dynamic";
import markerIcon from '../node_modules/leaflet/dist/images/marker-icon.png';

const Map = dynamic(() => import('./Map'), {
    ssr: false
});

export default Map