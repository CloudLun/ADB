const width = window.innerWidth;
const height = window.innerHeight;
const fullCircle = 2 * Math.PI;

const energyTypes = [
  "Hydro",
  "Solar",
  "Wind",
  "Nuclear",
  "Waste",
  "Biomass",
  "Wave and Tidal",
  "Cogeneration",
  "Other",
  "Storage",
  "Geothermal",
  "Petcoke",
  "Gas",
  "Oil",
  "Coal",
];
const typesColor = [
  "#026F94",
  "#0794C2",
  "#0794C2",
  "#2DCBFF",
  "#89E0FD",
  "#A9E9FE",
  "#C9EEFB",
  "#CCEFFB",
  "#E1E1E1",
  "#FFE2DC",
  "#FEC8BD",
  "#FFCEC5",
  "#FCAC9C",
  "#FF8770",
  "#FF4E2C",
];

let innerRadius = 100;
let outerRadius = 400;
let circleData = [350, 400];
let lineData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
let circularLineData = [];
let energyData = [];

let x = d3.scaleLinear().range([0, fullCircle]).domain([-180, 180]);

for (let i = 0; i < 36; i++) {
  circularLineData.push(1);
}
for (let i = 0; i < energyTypes.length; i++) {
  energyData[i] = [];
}

let arc = d3
  .arc()
  .innerRadius(400)
  .outerRadius(400)
  .startAngle((0 * fullCircle) / 36)
  .endAngle((16 * fullCircle) / 36);

let svg = d3
  .select("#viz")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg
  .selectAll("circles")
  .data(circleData)
  .enter()
  .append("circle")
  .attr("r", (d) => d)
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .style("fill", "none")
  .style("stroke", "#191919");

svg
  .selectAll("lines")
  .data(lineData)
  .enter()
  .append("line")
  .attr("y2", -height / 2)
  .attr(
    "transform",
    (d, i) => `translate(${width / 2} ${height / 2}) rotate(${(i * 360) / 16})`
  )
  .style("stroke", "#191919")
  .style("stroke-width", "1px")
  .style("opacity", 1);

svg
  .selectAll("lines")
  .data(circularLineData)
  .enter()
  .append("line")
  .attr("y2", -height / 2)
  .attr(
    "transform",
    (d, i) => `translate(${width / 2} ${height / 2}) rotate(${(i * 360) / 36})`
  )
  .style("stroke", (d, i) => (i === 35 || i === 15 ? "orange" : "#191919"))
  .style("stroke-width", "3px")
  .style("opacity", (d, i) => (i === 35 || i === 15 ? 1 : 0));

svg
  .append("path")
  .attr("d", arc)
  .style("stroke", "orange")
  .style("stroke-width", "3.5px")
  .attr("transform", `translate(${width / 2} ${height / 2}) rotate(-10)`);

svg
  .append("circle")
  .attr("id", "center")
  .attr("r", 100)
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .style("fill", "white")
  .style("stroke", "none");

svg
  .append("text")
  .attr("x", width / 2)
  .attr("y", height / 2)
  .style("text-anchor", "middle")
  .style("font-size", "24px")
  .style("font-weight", "500")
  .text("North Pole");

d3.csv(
  "./data/sort.csv"
).then((data) => {
  console.log(data);

  for (let i = 0; i < data.length; i++) {
    for (let j = 0; j < energyTypes.length; j++)
      if (data[i]["primary_fuel"] === energyTypes[j]) {
        energyData[j].push([
          data[i]["primary_fuel"],
          data[i]["country_long"],
          +data[i]["latitude"],
          +data[i]["longitude"],
        ]);
      }
  }

  for (let i = 0; i < energyData.length; i++) {
    lineGenerator(x, energyData[i], typesColor[i]);
  }
});

function lineGenerator(x, data, color) {
  let y = d3.scaleRadial().range([100, outerRadius]).domain([-90, 90]);

  let line = d3
    .lineRadial()
    .angle(function (d) {
      return x(d[3]);
    })
    .radius(function (d) {
      return y(d[2]);
    });

  svg
    .append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", color)
    .attr("d", line)
    .attr("transform", (d, i) => `translate(${width / 2} ${height / 2}) `);
}
