var dataKey1 = 'exemption rate',
    rowsArr1 = [
    {
        //list of dictionnaries//
        //dictionnary was copied and pasted from separate file, following data transformation
        "state": "Alabama",
        "state abbreviation": "AL",
        "exemption rate": "0.8"
    },
    {
        "state": "Alaska",
        "state abbreviation": "AK",
        "exemption rate": "7.1"
    },
    {
        "state": "Arizona",
        "state abbreviation": "AZ",
        "exemption rate": "6"
    },
    {
        "state": "Arkansas",
        "state abbreviation": "AR",
        "exemption rate": "1.8"
    },
    {
        "state": "California",
        "state abbreviation": "CA",
        "exemption rate": "0.6"
    },
    {
        "state": "Colorado",
        "state abbreviation": "CO",
        "exemption rate": "4.9"
    },
    {
        "state": "Connecticut",
        "state abbreviation": "CT",
        "exemption rate": "2.7"
    },
    {
        "state": "Delaware",
        "state abbreviation": "DE",
        "exemption rate": "1.2"
    },
    {
        "state": "Florida",
        "state abbreviation": "FL",
        "exemption rate": "3.2"
    },
    {
        "state": "Georgia",
        "state abbreviation": "GA",
        "exemption rate": "2.5"
    },
    {
        "state": "Hawaii",
        "state abbreviation": "HI",
        "exemption rate": "4.4"
    },
    {
        "state": "Idaho",
        "state abbreviation": "ID",
        "exemption rate": "7.7"
    },
    {
        "state": "Illinois",
        "state abbreviation": "IL",
        "exemption rate": "1.8"
    },
    {
        "state": "Indiana",
        "state abbreviation": "IN",
        "exemption rate": "1.3"
    },
    {
        "state": "Iowa",
        "state abbreviation": "IA",
        "exemption rate": "2.4"
    },
    {
        "state": "Kansas",
        "state abbreviation": "KS",
        "exemption rate": "2.1"
    },
    {
        "state": "Kentucky",
        "state abbreviation": "KY",
        "exemption rate": "1.4"
    },
    {
        "state": "Louisiana",
        "state abbreviation": "LA",
        "exemption rate": "1.2"
    },
    {
        "state": "Maine",
        "state abbreviation": "ME",
        "exemption rate": "6.2"
    },
    {
        "state": "Maryland",
        "state abbreviation": "MD",
        "exemption rate": "1.5"
    },
    {
        "state": "Massachusetts",
        "state abbreviation": "MA",
        "exemption rate": "1.4"
    },
    {
        "state": "Michigan",
        "state abbreviation": "MI",
        "exemption rate": "4.5"
    },
    {
        "state": "Minnesota",
        "state abbreviation": "MN",
        "exemption rate": "3.7"
    },
    {
        "state": "Mississippi",
        "state abbreviation": "MS",
        "exemption rate": "0.1"
    },
    {
        "state": "Missouri",
        "state abbreviation": "MO",
        "exemption rate": "2.7"
    },
    {
        "state": "Montana",
        "state abbreviation": "MT",
        "exemption rate": "4.5"
    },
    {
        "state": "Nebraska",
        "state abbreviation": "NE",
        "exemption rate": "2.1"
    },
    {
        "state": "Nevada",
        "state abbreviation": "NV",
        "exemption rate": "3.3"
    },
    {
        "state": "New Hampshire",
        "state abbreviation": "NH",
        "exemption rate": "3.3"
    },
    {
        "state": "New Jersey",
        "state abbreviation": "NJ",
        "exemption rate": "2.5"
    },
    {
        "state": "New Mexico",
        "state abbreviation": "NM",
        "exemption rate": "1.5"
    },
    {
        "state": "New York",
        "state abbreviation": "NY",
        "exemption rate": "1.3"
    },
    {
        "state": "North Carolina",
        "state abbreviation": "NC",
        "exemption rate": "1.6"
    },
    {
        "state": "North Dakota",
        "state abbreviation": "ND",
        "exemption rate": "4.3"
    },
    {
        "state": "Ohio",
        "state abbreviation": "OH",
        "exemption rate": "2.9"
    },
    {
        "state": "Oklahoma",
        "state abbreviation": "OK",
        "exemption rate": "2.6"
    },
    {
        "state": "Oregon",
        "state abbreviation": "OR",
        "exemption rate": "7.7"
    },
    {
        "state": "Pennsylvania",
        "state abbreviation": "PA",
        "exemption rate": "2.9"
    },
    {
        "state": "Rhode Island",
        "state abbreviation": "RI",
        "exemption rate": "1.3"
    },
    {
        "state": "South Carolina",
        "state abbreviation": "SC",
        "exemption rate": "2.6"
    },
    {
        "state": "South Dakota",
        "state abbreviation": "SD",
        "exemption rate": "2.6"
    },
    {
        "state": "Tennessee",
        "state abbreviation": "TN",
        "exemption rate": "1.9"
    },
    {
        "state": "Texas",
        "state abbreviation": "TX",
        "exemption rate": "2.4"
    },
    {
        "state": "Utah",
        "state abbreviation": "UT",
        "exemption rate": "5.7"
    },
    {
        "state": "Vermont",
        "state abbreviation": "VT",
        "exemption rate": "4.7"
    },
    {
        "state": "Virginia",
        "state abbreviation": "VA",
        "exemption rate": "1.7"
    },
    {
        "state": "Washington",
        "state abbreviation": "WA",
        "exemption rate": "5"
    },
    {
        "state": "West Virginia",
        "state abbreviation": "WV",
        "exemption rate": "0.8"
    },
    {
        "state": "Wisconsin",
        "state abbreviation": "WI",
        "exemption rate": "5.9"
    },
    {
        "state": "Wyoming",
        "state abbreviation": "WY",
        "exemption rate": "2.9"
    }
]

function drawMap(dataKey,rowsArr,svgSelector,legendSelector,thresholdList){
//Creating an empty list for the states//
var states = [],
    stateKey = 'state abbreviation' 

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
var svg = d3.select(svgSelector),
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
      .domain(thresholdList)
      .range(d3.range(thresholdList.length + 1).map(function(i) { return "q" + i + "-5"; }));
	
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
var legend = d3.select(legendSelector)
    .append('ul')
    .attr('class', 'list-inline');

var keys = legend.selectAll('li.key')
    .data(currScale.range());

keys.enter().append('li')
    .attr('class', function(d) { return'key ' + d; })
    .style('border-top-color', String)
    .text(function(d) {
  		var format = d3.format('.1%');
        var r = currScale.invertExtent(d);
        if(r[0]===undefined && svgSelector==="#map1_svg"){
        	return format(0.001)
        }
        if(r[0]===undefined && svgSelector==="#map2_svg"){
            return format(0.87)
        }
        return format(r[0]/100);
    });
};
drawMap(dataKey1,rowsArr1,"#map1_svg","#legend_container1",[1.7, 3.4, 5.1, 6.8]);
