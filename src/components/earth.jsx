import { geoEqualEarth, geoPath } from 'd3'
import "./common.css"

const projection = geoEqualEarth();
const path = geoPath(projection);

export const Marks = ({ data }) => (
   <svg  viewBox="0 0 1200 1200" xmlns="http://www.w3.org/2000/svg" > 
   { data && <g  className='marks' >
       {
        data.features.map((feature, i) => (
            <path key={i} d={path(feature)} />
        ))}    
    </g>}
    </svg>
)