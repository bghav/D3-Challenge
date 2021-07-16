// set the dimensions and margins of the graph
var margin = {top: 10, right: 30, bottom: 30, left: 60},
    width = 460 - margin.left - margin.right,
    height = 400 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#scatter")
  .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
  .append("g")
    .attr("transform",
          "translate(" + margin.left + "," + margin.top + ")");

//Read the data
d3.csv("", function(data) {

  // Add X axis
  var x = d3.scaleLinear()
    .domain([0, 20])
    .range([ 0, width ]);
  svg.append("g")
    .attr("transform", "translate(0," + height + ")")
    .call(d3.axisBottom(x));

  // Add Y axis
  var y = d3.scaleLinear()
    .domain([0, 40])
    .range([ height, 0]);
  svg.append("g")
    .call(d3.axisLeft(y));

  // Add dots
  svg.append('g')
    .selectAll("dot")
    .data(data)
    .enter()
    .append("circle")
      .attr("cx", function (d) { return x(d.poverty); } )
      .attr("cy", function (d) { return y(d.obesityHigh); } )
      .attr("r", 1.5)
      .style("fill", "#69b3a2")

})


d3.csv("assets/data/data.csv").then(function(stateData) {

    console.log(stateData);
  
    // log a list of names
    var states = stateData.map(data => data.states);
    console.log("states", states);
  
    // Cast each hours value in tvData as a number using the unary + operator
    stateData.forEach(function(data) {
      console.log("id",data.id);
      console.log("state",data.state);
      console.log("abbr",data.abbr);
      console.log("poverty",data.poverty);
      console.log("povertyMOE");
      console.log("age");
      console.log("ageMOE");
      console.log("income",income.data);
      console.log("incomeMOE",incomeMOE.data);
      console.log("healthcare",healthcare.data);
      console.log("healthcareLow",healthcareLow.data);
      console.log("healthcareHigh",healthcareHigh.data);
      console.log("obesity",obesity.data);
      console.log("obesityLow",obesityLow.data);
      console.log("obesityHigh",obesityHigh.data);
      console.log("smokes",smokes.data);
      console.log("smokesLow",smokesLow.data);
      console.log("smokesHigh",smokesHigh.data);
    });
  }).catch(function(error) {
    console.log(error);


    
  });