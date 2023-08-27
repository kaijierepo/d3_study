import * as d3 from "d3";
import { useEffect } from "react";
import { useRef } from "react";

// Declare the chart dimensions and margins.
const width = 640;
const height = 400;
const marginTop = 20;
const marginRight = 20;
const marginBottom = 30;
const marginLeft = 40;

const Index = () => {
   const containerRef = useRef(null);

    useEffect(() => {
        const x = d3
        .scaleUtc()
        .domain([new Date("2023-01-01"), new Date("2024-01-01")])
        .range([marginLeft, width - marginRight]);

        const y = d3
        .scaleLinear()
        .range([height - marginBottom, marginTop])

        const svg = d3
         .create("svg")
         .attr("width", width)
         .attr("height", height)
         
        // add the x-axis
        svg.append("g")
        .attr("transform", `translate(0, ${height - marginBottom})`)
        .call(d3.axisBottom(x))
        
       // add the y-axis
       svg.append("g")
       .attr("transform", `translate(${marginLeft}, 0)`)
       .call(d3.axisLeft(y)) 
        console.log('&&&&&&', containerRef.current.children.length)
        
        if(containerRef.current.children.length === 0) {
            containerRef.current.append(svg.node())
        }
        // containerRef.current.append(svg.node())


    }, [])

    return <div ref={containerRef} >
         
    </div>
}

export default Index