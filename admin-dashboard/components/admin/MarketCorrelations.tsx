"use client"

import { useEffect, useRef } from "react"
import * as d3 from "d3"

const data = {
  nodes: [
    { id: "Bitcoin", group: 1 },
    { id: "Ethereum", group: 1 },
    { id: "S&P 500", group: 2 },
    { id: "Gold", group: 3 },
    { id: "Oil", group: 3 },
  ],
  links: [
    { source: "Bitcoin", target: "Ethereum", value: 1 },
    { source: "Bitcoin", target: "S&P 500", value: 0.5 },
    { source: "Bitcoin", target: "Gold", value: 0.3 },
    { source: "Gold", target: "Oil", value: 0.6 },
  ],
}

export function MarketCorrelations() {
  const svgRef = useRef(null)

  useEffect(() => {
    if (svgRef.current) {
      const svg = d3.select(svgRef.current)
      const width = 400
      const height = 300

      const simulation = d3
        .forceSimulation(data.nodes)
        .force(
          "link",
          d3.forceLink(data.links).id((d) => d.id),
        )
        .force("charge", d3.forceManyBody())
        .force("center", d3.forceCenter(width / 2, height / 2))

      const link = svg
        .append("g")
        .selectAll("line")
        .data(data.links)
        .join("line")
        .attr("stroke", "#999")
        .attr("stroke-opacity", 0.6)
        .attr("stroke-width", (d) => Math.sqrt(d.value))

      const node = svg
        .append("g")
        .selectAll("circle")
        .data(data.nodes)
        .join("circle")
        .attr("r", 5)
        .attr("fill", (d) => d3.schemeCategory10[d.group])

      node.append("title").text((d) => d.id)

      simulation.on("tick", () => {
        link
          .attr("x1", (d) => d.source.x)
          .attr("y1", (d) => d.source.y)
          .attr("x2", (d) => d.target.x)
          .attr("y2", (d) => d.target.y)

        node.attr("cx", (d) => d.x).attr("cy", (d) => d.y)
      })
    }
  }, [])

  return <svg ref={svgRef} width="400" height="300"></svg>
}

