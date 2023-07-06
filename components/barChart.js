import * as d3 from "d3";
import React, { useRef, useEffect } from "react";

const duration = 500;
function BarChart({ width, height, data, yAxisTitle }) {
  const margin = {
    top: 60,
    bottom: 100,
    left: 80,
    right: 40,
  };
  const innerWidth = width - margin.left - margin.right;
  const innerHeight = height - margin.top - margin.bottom;
  const ref = useRef();



  useEffect(() => {
    d3.select(ref.current)
      .attr("width", width)
      .attr("height", height)
      .append("g")
      .attr("transform", `translate(${margin.left}, ${margin.top})`).attr("align", "center");;
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    draw();
  }, [data]); // eslint-disable-line react-hooks/exhaustive-deps

  const draw = () => {
    const xScale = d3
      .scaleBand()
      .domain(data.map((d) => d.question))
      .range([0, innerWidth]);

    const yScale = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d.value)])
      .range([innerHeight, 0]);

    const colorScale = d3.scaleOrdinal(["rgba(0,0,0,0)", "rgba(0,0,0,0.6)"]);

    const svg = d3.select(ref.current);
    const chart = svg.select("g");




    chart
      .selectAll(".bar")
      .data(data)
      .join((enter) =>
        enter
          .append("rect")
          .classed("bar", true)
          .attr("y", (d) => yScale(0))
          .attr("height", 0).on('mouseover', function (d, i) {
            console.log('boop')
            d3.select(this).transition().attr('fill', 'blue');
          })
      )
      .attr("x", (d) => xScale(d.question))
      .style("fill", (d, i) => colorScale(i))
      .attr("width", (d) => xScale.bandwidth())
      .transition()
      .duration(duration)
      .delay((d, i) => (i * duration) / 10)
      .attr("height", (d) => innerHeight - yScale(d.value))
      .attr("y", (d) => yScale(d.value))



    const xAxis = d3.axisBottom().scale(xScale);

    chart
      .selectAll(".x.axis")
      .data([null])
      .join("g")
      .classed("x axis", true)
      .attr("transform", `translate(0,${innerHeight})`)
      .transition()
      .duration(duration)
      .call(xAxis);

    const yAxis = d3.axisLeft().ticks(5).scale(yScale);

    chart
      .selectAll(".y.axis")
      .data([null])
      .join("g")
      .classed("y axis", true)
      .attr("transform", "translate(0,0)")
      .transition()
      .duration(duration)
      .call(yAxis);



  };

  return (
    <div id="chartContainer" className="chart">
      <svg

        ref={ref}></svg>
    </div>
  );
}

export default BarChart;