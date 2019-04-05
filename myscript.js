//SVG sizes and margins
var margin = {
    top: 250,
    right: 200,
    bottom: 200,
    left: 100
},
width = 1000,
height = 500;

//The number of columns and rows of the heatmap
var MapColumns = 3,
    MapRows = 3;

//The maximum radius the hexagons can have to still fit the screen
var hexRadius = d3.min([width/((MapColumns + 0.5) * Math.sqrt(3)),
    height/((MapRows + 1/3) * 1.5)]);

//Calculate the center positions of each hexagon
var points = [];
  for (var i = 0; i < MapRows; i++) {
      for (var j = 0; j < MapColumns; j++) {
        points.push([hexRadius * j * 1.75, hexRadius * i * 1.5]);
      }//for j
    }//for i

    //Create SVG element
var svg = d3.select("#chart").append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

//Set the hexagon radius
var hexbin = d3.hexbin().radius(hexRadius);

//Draw the hexagons
svg.append("g")
    .selectAll(".hexagon")
    .data(hexbin(points))
    .enter().append("path")
    .attr("class", "hexagon")
    .attr("d", function (d) {
        return "M" + d.x + "," + d.y + hexbin.hexagon();
    })
    .attr("stroke", "white")
    .attr("stroke-width", "1px")
    .style("fill", "powderblue");

//add ids all hexagons by number so we can select individual hex for manipulation
var hexaname = document.getElementsByClassName("hexagon");
for(i = 0; i < hexaname.length; i++)
{
   hexaname.item(i).setAttribute("id", i);
}

//remove extra blocks
document.getElementById("0").remove();
document.getElementById("6").remove();



//add text
var titles = [
      "",
      "Data Stream/Method Cluster",
      "Coordinating Team Cluster",
      "Treatment Cluster",
      "",
      "HIV Prevention Cluster",
      "",
      "HIV/TB Diagnosis Cluster",
      "Health Systems Strengthening Cluster"
]


svg.append("text")
.each(function(d) {
  var text = d3.select(this);
  holder = [1,2,3,5,7,8];
        for (var i = 0; i < holder.length; i++){
          text.append("tspan")
          .style("font-size", "15px")
          .style("text-anchor", "middle")
          .attr("width", width + margin.left + margin.right)
          .attr("height", height + margin.top + margin.bottom)
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
          .attr('x', points[holder[i]][0])
          .attr('y', points[holder[i]][1])
          .attr("stroke","black")
          .attr("xlink:href",'#' + holder[i])
          .text(titles[holder[i]]);
        }
});
