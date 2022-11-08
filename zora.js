const margin = { top: 40, right: 10, bottom: 10, left: 10 },
	width = 800 - margin.left - margin.right,
	height = 800 - margin.top - margin.bottom,
	innerRadius = 30,
	outerRadius = Math.min(width, height) / 2; // the outerRadius goes from the middle of the SVG area to the border

// append the svg object to the body of the page
const svg = d3
	.select("#my_dataviz")
	.append("svg")
	.attr("width", width + margin.left + margin.right)
	.attr("height", height + margin.top + margin.bottom)
	.append("g")
	.attr("transform", `translate(${width / 2},${height / 2 + 100})`); // Add 100 on Y translation, cause upper bars are longer

// svg
// 	.enter()
// 	.append("line")
// 	.attr("x1", 0)
// 	.attr("y1", 200)
// 	.attr("x2", 800)
// 	.attr("y2", 200)
// 	// .attr("y2", -height / 2)
// 	// .attr(
// 	// 	"transform",
// 	// 	(d, i) => `translate(${width / 2} ${height / 2}) rotate(${(i * 360)})`
// 	// )
// 	.style("stroke", "#191919")
// 	.style("stroke-width", 5)
// 	.style("opacity", 1);

d3.csv("monthly.csv").then(function (data) {
	// X scale
	var formatData = data.filter((item) => {
		return item.Source == "GISTEMP";
	});

	//116 is 2016
	//1900 = 0
	//-20 is 1880
	// console.log(formatData);

	const x = d3
		.scaleBand()
		.range([0, 2 * Math.PI]) 
		.align(0)
		.domain(
			formatData.map((item) => {
				let month = new Date(item.Date).getMonth();
				return month;
			})
		); // This does nothing ?

	// Y scale
	const y = d3
		.scaleRadial()
		.range([innerRadius, outerRadius]) // Domain will be define later.
		.domain([0, 1.82]); // Domain of Y is from 0 to the max seen in the data

	// Add bars
    {
        const t = Date.now();
        const year2year = d3
            .scaleTime()
            .domain(
                formatData.map((item) => {
                    let year = new Date(item.Date).getYear();
                    return year;
                })
            )
            .range([t, t + 136]);
      
        do {
            year2year.domain([t - 1 * 1 * 5 * 1000, t + 1 * 1 * 5 * 1000])
       yield svg(year2year);
        } while (!stop)
    }
    
	svg
		.append("g")
		.selectAll("path")
		.data(formatData)
		.join("path")
		// .attr("fill", "url(#svgGradient)")
		.attr("fill", "rgba(255, 107, 0, 0.03)")
		.attr(
			"d",
			d3
				.arc() // imagine your doing a part of a donut plot
				.innerRadius(innerRadius)
				.outerRadius((d) => y(Number(d.Mean) + 0.47))
				.startAngle((d) => {
					// console.log(x(d.Date));
					let month = new Date(d.Date).getMonth();
					return x(month);
				})
				.endAngle((d) => {
					let month = new Date(d.Date).getMonth();
					return x(month) + x.bandwidth();
				})
				.padAngle(1)
				.padRadius(innerRadius)
		);
});