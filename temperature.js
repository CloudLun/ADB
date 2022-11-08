const width = window.innerWidth;
const height = window.innerHeight;
const fullCircle = 2 * Math.PI;

const innerRadius = 100;
const outerRadius = Math.min(width, height) / 2;
const circleData = [350, 400];
const lineData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const months = [
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
  "January",
  "February",
  "March",
];
let circularLineData = [];
let countries = [];

for (let i = 0; i < 36; i++) {
  circularLineData.push(1);
}

let svg = d3
  .select("#viz")
  .append("svg")
  .attr("width", width)
  .attr("height", height);

svg
  .selectAll("circles")
  .append("g")
  .data(circleData)
  .enter()
  .append("circle")
  .attr("r", (d) => d)
  .attr("cx", width / 2)
  .attr("cy", height / 2)
  .style("fill", "none")
  .style("stroke", "#191919");

const x = d3
  .scaleBand()
  .range([0, 2 * Math.PI])
  .align(0);
const y = d3.scaleRadial().range([innerRadius, outerRadius]); // Domain will be define later.
//   .domain([0, 1.82]); // Domain of Y is from 0 to the max seen in the data

const z = d3
  .scaleOrdinal()
  .range([
    // "#98abc5",
    // "#8a89a6",
    // "#7b6888",
    // "#6b486b",
    // "#a05d56",
    // "#d0743c",
    "#ff8c00",
  ]);

const xAxis = (g) =>
  g.attr("text-anchor", "middle").call((g) =>
    g
      .selectAll("g")
      .data(months)
      .join("g")
      .attr(
        "transform",
        (d, i, arr) => `
          rotate(${(i * 360) / arr.length})
          translate(${innerRadius},0)
        `
      )
      .call((g) =>
        g
          .append("line")
          .attr("x1", -5)
          .attr("x2", outerRadius - innerRadius + 10)
          .style("stroke", "#aaa")
      )
      .call((g) =>
        g
          .append("text")
          .attr("transform", (d, i, arr) =>
            ((i * 360) / arr.length) % 360 > 180
              ? `rotate(90) translate(0,-${outerRadius - innerRadius + 20})`
              : `rotate(-90)translate(0,${outerRadius - innerRadius + 20})`
          )
          .style("font-family", "sans-serif")
          .style("font-size", 12)
          .text((d) => d)
      )
  );

svg
  .append("g")
  .call(xAxis)
  .attr(
    "transform",
    (d, i) => `translate(${width / 2} ${height / 2}) rotate(${(i * 360) / 12})`
  );

d3.csv("./data/monthData.csv").then((data) => {
  x.domain(
    data.map(function (d) {
      return d.month;
    })
  );
  y.domain([0, 1.82]);

  data.forEach((d) => {
    for (let i = 1980; i < 2017; i++) {
      d[`${i}`] = +d[`${i}`];
    }
  });

  let g = svg
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");

  g.append("g")
    .selectAll("g")
    .data(d3.stack().keys(data.columns.slice(1))(data))
    .enter()
    .append("g")
    .attr("fill", function (d) {
      return z(d.key);
    })
    .selectAll("path")
    .data(function (d) {
      return d;
    })
    .enter()
    .append("path")
    .attr(
      "d",
      d3
        .arc()
        .innerRadius(function (d) {
          return y(d[0]);
        })
        .outerRadius(function (d) {
          return y(d[1]);
        })
        .startAngle(function (d) {
          return x(d.data.month);
        })
        .endAngle(function (d) {
          return x(d.data.month) + x.bandwidth();
        })
        .padAngle(0.05)
        .padRadius(innerRadius)
    )
    .attr('opacity', 0.5)
});

// svg
//   .selectAll("lines")
//   .data(lineData)
//   .enter()
//   .append("line")
//   .attr("y2", -height / 2)

//   .style("stroke", "#191919")
//   .style("stroke-width", "1px")
//   .style("opacity", 1);

//   svg
//     .selectAll("months")
//     .data(months)
//     .enter()
//     .append("g")
//     .attr(
//       "transform",
//       (d, i, arr) => `
//           rotate(${(i * 360) / arr.length})
//           translate(${outerRadius + width / 2},0)
//         `
//     )
//     .append("text")
//     .attr("transform", (d, i, arr) =>
//       ((i * 360) / arr.length) % 360 > 180
//         ? "rotate(90)translate(0,16)"
//         : "rotate(-90)translate(0,-9)"
//     )
//     .style("font-family", "sans-serif")
//     .style("font-size", 8)
//     .text((d) => d);
