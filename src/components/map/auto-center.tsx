import { useEffect, useRef } from 'react';
import { useMapEvents } from 'react-leaflet';

interface AutoCenterProps {
    center: L.LatLngTuple;
}

const AutoCenter = ({ center }: AutoCenterProps) => {
    const map = useMapEvents({});
    const timeoutRef = useRef<NodeJS.Timeout | null>(null);

    useEffect(() => {
        const handleDrag = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
        };

        const handleDragEnd = () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            timeoutRef.current = setTimeout(() => {
                map.flyTo(center, map.getZoom(), { animate: true, duration: 1.5 });
            }, 2000);
        };

        map.on('drag', handleDrag);
        map.on('dragend', handleDragEnd);

        return () => {
            if (timeoutRef.current) clearTimeout(timeoutRef.current);
            map.off('drag', handleDrag);
            map.off('dragend', handleDragEnd);
        };
    }, [center, map]);

    return null;
};

export default AutoCenter