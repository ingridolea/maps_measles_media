//Creating an empty list for the states//
var states = [],
    dataKey = 'vacc_rate',
    stateKey = 'state abbreviation',
    rowsArr = [
    {
    	//list of dictionnaries//
    	//dictionnary was copied and pasted from separate file, following data transformation
        "states": "Alabama", 
        "state abbreviation": "AL", 
        "vacc_rate": "90.6"
}, 
{
        "states": "Arizona", 
        "state abbreviation": "AZ", 
        "vacc_rate": "92.9"
}, 
{
        "states": "Arkansas", 
        "state abbreviation": "AR", 
        "vacc_rate": "94.2"
}, 
{
        "states": "California", 
        "state abbreviation": "CA", 
        "vacc_rate": "96.5"
}, 
{
        "states": "Colorado", 
        "state abbreviation": "CO", 
        "vacc_rate": "87.4"
}, 
{
        "states": "Connecticut", 
        "state abbreviation": "CT", 
        "vacc_rate": "95.9"
}, 
{
        "states": "Delaware", 
        "state abbreviation": "DE", 
        "vacc_rate": "97.8"
}, 
{
        "states": "Florida", 
        "state abbreviation": "FL", 
        "vacc_rate": "93.8"
}, 
{
        "states": "Georgia", 
        "state abbreviation": "GA", 
        "vacc_rate": "93.6"
}, 
{
        "states": "Hawaii", 
        "state abbreviation": "HI", 
        "vacc_rate": "91.5"
}, 
{
        "states": "Idaho", 
        "state abbreviation": "ID", 
        "vacc_rate": "89.5"
}, 
{
        "states": "Illinois", 
        "state abbreviation": "IL", 
        "vacc_rate": "94.7"
}, 
{
        "states": "Indiana", 
        "state abbreviation": "IN", 
        "vacc_rate": "91.2"
}, 
{
        "states": "Iowa", 
        "state abbreviation": "IA", 
        "vacc_rate": "93.3"
}, 
{
        "states": "Kansas", 
        "state abbreviation": "KS", 
        "vacc_rate": "90.8"
}, 
{
        "states": "Kentucky", 
        "state abbreviation": "KY", 
        "vacc_rate": "93.4"
}, 
{
        "states": "Louisiana", 
        "state abbreviation": "LA", 
        "vacc_rate": "95.5"
}, 
{
        "states": "Maine", 
        "state abbreviation": "ME", 
        "vacc_rate": "93.8"
}, 
{
        "states": "Maryland", 
        "state abbreviation": "MD", 
        "vacc_rate": "97.4"
}, 
{
        "states": "Massachusetts", 
        "state abbreviation": "MA", 
        "vacc_rate": "96.9"
}, 
{
        "states": "Michigan", 
        "state abbreviation": "MI", 
        "vacc_rate": "94.6"
}, 
{
        "states": "Minnesota", 
        "state abbreviation": "MN", 
        "vacc_rate": "92.6"
}, 
{
        "states": "Mississippi", 
        "state abbreviation": "MS", 
        "vacc_rate": "99.2"
}, 
{
        "states": "Missouri", 
        "state abbreviation": "MO", 
        "vacc_rate": "94.8"
}, 
{
        "states": "Montana", 
        "state abbreviation": "MT", 
        "vacc_rate": "93.3"
}, 
{
        "states": "Nebraska", 
        "state abbreviation": "NE", 
        "vacc_rate": "96.9"
}, 
{
        "states": "Nevada", 
        "state abbreviation": "NV", 
        "vacc_rate": "95.1"
}, 
{
        "states": "New Hampshire", 
        "state abbreviation": "NH", 
        "vacc_rate": "91.8"
}, 
{
        "states": "New Jersey", 
        "state abbreviation": "NNJ", 
        "vacc_rate": "95"
}, 
{
        "states": "New Mexico", 
        "state abbreviation": "NM", 
        "vacc_rate": "96.1"
}, 
{
        "states": "New York", 
        "state abbreviation": "NY", 
        "vacc_rate": "97.2"
}, 
{
        "states": "North Carolina", 
        "state abbreviation": "NC", 
        "vacc_rate": "93.2"
}, 
{
        "states": "North Dakota", 
        "state abbreviation": "ND", 
        "vacc_rate": "93.6"
}, 
{
        "states": "Ohio", 
        "state abbreviation": "OH", 
        "vacc_rate": "91.6"
}, 
{
        "states": "Oklahoma", 
        "state abbreviation": "OK", 
        "vacc_rate": "92.2"
}, 
{
        "states": "Oregon", 
        "state abbreviation": "OR", 
        "vacc_rate": "93"
}, 
{
        "states": "Pennsylvania", 
        "state abbreviation": "PA", 
        "vacc_rate": "96.4"
}, 
{
        "states": "Rhode Island", 
        "state abbreviation": "RI", 
        "vacc_rate": "97.4"
}, 
{
        "states": "South Carolina", 
        "state abbreviation": "SC", 
        "vacc_rate": "94.2"
}, 
{
        "states": "South Dakota", 
        "state abbreviation": "SD", 
        "vacc_rate": "96.2"
}, 
{
        "states": "Tennessee", 
        "state abbreviation": "TN", 
        "vacc_rate": "96.5"
}, 
{
        "states": "Texas", 
        "state abbreviation": "TX", 
        "vacc_rate": "96.9"
}, 
{
        "states": "Utah", 
        "state abbreviation": "UT", 
        "vacc_rate": "92.8"
}, 
{
        "states": "Vermont", 
        "state abbreviation": "VT", 
        "vacc_rate": "93"
}, 
{
        "states": "Virginia", 
        "state abbreviation": "VA", 
        "vacc_rate": "95"
}, 
{
        "states": "Washington", 
        "state abbreviation": "WA", 
        "vacc_rate": "90.8"
}, 
{
        "states": "West Virginia", 
        "state abbreviation": "WV", 
        "vacc_rate": "98.8"
}, 
{
        "states": "Wisconsin", 
        "state abbreviation": "WI", 
        "vacc_rate": "92.6"
}, 
{
        "states": "Wyoming", 
        "state abbreviation": "WY", 
        "vacc_rate": "95.1"
}
]

//latches on to grid structure set out in USmap.html//
d3.select("#grid").text().split("\n").forEach(function(line, i) {
  var re = /\w+/g, m;
  while (m = re.exec(line)) {
    states.push({
      name: m[0],
      data: _.result(_.findWhere(rowsArr, { 'state abbreviation': m[0]}), dataKey),
      x: m.index / 3,
      y: i
    });
  }
});

//viz is generated//
var svg = d3.select("svg"),
    width = +svg.attr("width"),
    height = +svg.attr("height");

var gridWidth = d3.max(states, function(d) { return d.x; }) + 1,
    gridHeight = d3.max(states, function(d) { return d.y; }) + 1,
    cellSize = 40;

//inserts state abbreviations into grid structure//
var nestedData = d3.nest()
    .key(function(d) { return d.stateAbbrev; })
    .entries(rowsArr);

var mappedData = function mappedValues(key) {
  return rowsArr.map(function(stateObj) {
    return stateObj[dataKey]
  })
}

//changed to threshold scale from original quantile scale//
//such that upper two sections represent vaccine exemptions rate above 5%, i.e. no herd immunity
console.log(mappedData(stateKey))
console.log(dataKey)
var currScale = d3.scale.threshold()
      .domain([89.4, 91.9, 94.3, 96.8])
      .range(d3.range(5).map(function(i) { return "q" + i + "-5"; }));
	
var state = svg.append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")")
  .selectAll(".state")
    .data(states)
  .enter().append("g")
    .attr("transform", function(d) { return "translate(" + (d.x - gridWidth / 2) * cellSize + "," + (d.y - gridHeight / 2) * cellSize + ")"; })
    .attr("class", function(d) {
      var currData = d.data,
          currClassStr = '';
      if (currData !== null) {
        currClassStr += "state " + currScale(d.data)
      } else {
        currClassStr += "state"
      }
      return currClassStr;
    });

state.append("rect")
    .attr("x", -cellSize / 2)
    .attr("y", -cellSize / 2)
    .attr("width", cellSize - 1)
    .attr("height", cellSize - 1);

state.append("text")
    .attr("dy", ".35em")
    .text(function(d) { return d.name; });
  
//select #legend-container to ensure legend is in right place//
var legend = d3.select("#legend-container")
    .attr("id", "legend")
    .append('ul')
    .attr('class', 'list-inline');

var keys = legend.selectAll('li.key')
    .data(currScale.range());

//keys/ threshold values for legend are determined//
keys.enter().append('li')
    .attr('class', function(d) { return'key ' + d; })
    .style('border-top-color', String)
    .text(function(d) {
  		var format = d3.format('.1%');
        var r = currScale.invertExtent(d);
        if(r[0]===undefined){
        	return format(87.4)
        }
        return format(r[0]/100);
    });