import * as d3 from "d3";
import { color } from "d3";
import { useRef } from "react";
// const color = d3.scale.category20();

export default function GeoMap() {
  const svg = useRef(null);

  var projection = d3.geoMercator()
    .center([107, 31])
    .scale(850)
    .translate([600 / 2, 1000 / 2]);

  var path = d3.geoPath().projection(projection);
  // eslint-disable-next-line no-undef
  d3.json("http://127.0.0.1:5501/china.json", function (error, data) {
    console.log(error, data);
    const groups = svg.append("path");

    groups
      .selectAll("path")
      .data(data.features)
      .enter()
      .append("path")
      .attr("class", "province")
      .style("fill", function (d, i) {
        return color(i);
      })
      .attr("d", path);
  });
  return (
    <div>
      <svg ref={svg}></svg>
    </div>
  );
}
