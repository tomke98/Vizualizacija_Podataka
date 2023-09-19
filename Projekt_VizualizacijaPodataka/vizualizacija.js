

import { jednoclanoKucanstvo } from './podaci.js';
import { dvaOdrasladvojeDjece } from './podaci.js';
import { stopaRizikaOdSiromastvaSveDobi } from './podaci.js';
import { stopaRizikaOdSiromastvaSveDobiMuski } from './podaci.js';
import { stopaRizikaOdSiromastvaSveDobiZenski } from './podaci.js';

import { stopaRizikaOdSiromastvaPremaAktivnosti_radeUkupno } from './podaci.js';
import { stopaRizikaOdSiromastvaPremaAktivnosti_zaposlenici } from './podaci.js';
import { stopaRizikaOdSiromastvaPremaAktivnosti_samozaposlenici } from './podaci.js';
import { stopaRizikaOdSiromastvaPremaAktivnosti_neRadeUkupno } from './podaci.js';
import { stopaRizikaOdSiromastvaPremaAktivnosti_neRadeNezaposlenici } from './podaci.js';
import { stopaRizikaOdSiromastvaPremaAktivnosti_neRadeUmirovljenici } from './podaci.js';
import { stopaRizikaOdSiromastvaPremaAktivnosti_neRadeOstali } from './podaci.js';

import { stopaRizikaPremaIntenzitetuRada_2022_bez_djece } from './podaci.js';
import { stopaRizikaPremaIntenzitetuRada_2022_sa_djecom } from './podaci.js';

import { stopaRizikaOdSiromastvaPremaStupnjuObrazovanja_2022 } from './podaci.js';






var naslov = document.querySelector('#naslov');

var tooltip = d3.select(".vizualizacija").append("div")
  .attr("class", "tooltip")
  .style("opacity", 0)
  .style("position", "absolute")
  .style("background-color" , "white");


   // Kreira funkciju koja generira "stroke-dasharray" vrijednosti
   function getDashArray(totalLength, dashLength, gapLength) {
    const patternLength = dashLength + gapLength; 
    const numPatterns = Math.ceil(totalLength / patternLength);
    const remainder = totalLength % patternLength;
    return `${Array(numPatterns).fill(`${dashLength},${gapLength}`).join(' ')} ${remainder}, ${totalLength}`;
  }
  
  // Kreiranje tranzicije za liniju
  function drawLine(lineElement, dashLength, gapLength, data) {
    const totalLength = lineElement.node().getTotalLength();
  
    lineElement
      .attr("stroke-dasharray", getDashArray(totalLength, dashLength, gapLength)) // Pass the provided arguments
      .attr("stroke-dashoffset", totalLength) // Sakrivanje cijele linije
      .transition()
      .duration(2000) // Tranzicija
      .attr("stroke-dashoffset", 0); // postavljanje na 0, što otkriva cijelu liniju
  }











//==================================================================================================================
//==================================================================================================================
//==================================================================================================================









  
  

function setStopaRizikaOdSiromastvaPremaStupnjuObrazovanja2022(){

  
  naslov.innerHTML= "Stopa Rizika Od siromaštva prema stupnju obrazovanja u 2022."

  


  var color = ["red", "blue", "green", "purple", "orange", "pink", "brown", "gray", "teal", "cyan", "magenta", "lime"];

 var margin = {top: 40, bottom: 105, left: 60, right: 20};
 var width = 1300 - margin.left - margin.right;
 var height = 700 - margin.top - margin.bottom;
 var barPadding = 4;
 var barWidth = width / stopaRizikaOdSiromastvaPremaStupnjuObrazovanja_2022.length - barPadding;

 var x = d3.scale.ordinal()
 .domain(d3.range(stopaRizikaOdSiromastvaPremaStupnjuObrazovanja_2022.length), 0)
 .rangeRoundBands([0, width]);

 var y = d3.scale.linear()
 .domain([0, d3.max(stopaRizikaOdSiromastvaPremaStupnjuObrazovanja_2022, function(d) { return d.Stopa; })])
 .range([height , 0]);

 var svg = d3.select(".vizualizacija")
 .append("svg")
 .attr("width", width + margin.left + margin.right)
 .attr("height", height + margin.bottom + margin.top)
 .style("background-color", "lightblue")
 .append("g")
 .attr("transform", "translate(" + margin.left  + "," + margin.top +")");


 //legenda//////////
 svg.append("text")
 .attr("class", "x-axis-label") 
 .attr("x", width - 50) 
 .attr("y", 50) 
 .style("text-anchor", "middle") 
 .text("MUŠKARCI")
 .attr("fill" , "BLUE"); 

 svg.append("text")
 .attr("class", "x-axis-label") 
 .attr("x", width - 50) 
 .attr("y", 65) 
 .style("text-anchor", "middle") 
 .text("UKUPNO")
 .style("fill" , "BLACK"); 

 svg.append("text")
 .attr("class", "x-axis-label") 
 .attr("x", width - 50) 
 .attr("y", 80) 
 .style("text-anchor", "middle") 
 .text("ŽENE")
 .style("fill" , "PINK"); 


 //legenda////////

 
 var xAxis = d3.svg.axis()
 .scale(x)
 .orient("bottom")
 .tickFormat(function(d, i) { return stopaRizikaOdSiromastvaPremaStupnjuObrazovanja_2022[i].StupanjObrazovanja; });
 

 
 var yAxis = d3.svg.axis()
 .scale(y)
 .orient("left")
 .ticks(10);
 


 var xAxisGroup=svg.append("g")
 .attr("class", "x axis")
 .attr("transform", "translate(0," + height + ")")
 .call(xAxis)
 .selectAll("text")
 .style("text-anchor", "middle")
 .attr("transform", "rotate(-25) translate(-35," + margin.top + ")");
 
 




 svg.append("g")
 .attr("class", "y axis")
 .call(yAxis);

 
 

 
 var barchart = svg.selectAll("rect")
  .data(stopaRizikaOdSiromastvaPremaStupnjuObrazovanja_2022)
  .enter()
  .append("rect")
  .attr("x", function(d, i) { return x(i); })
  .attr("y", height) // Postavlja stupičaste grafove od dolje za visinu SVG-a
  .attr("height", 0) // Početna visina je 0 , kasnije ćemo u tranziciji ih povećati
  .attr("width", barWidth)
  .attr("fill", function(d) { 
      if(d.Spol ==="Muškarci")
          return "blue";
      else if(d.Spol ==="Žene")
          return "pink";
      else
          return "black";

   })
  .on("mouseover", function(d) {
    d3.select(this).style("opacity", 0.7);
    tooltip.transition()
      .duration(200)
      .style("opacity", 1);
    tooltip.html(`Stopa: ${d.Stopa}`)
      .style("left", (d3.event.pageX + 10) + "px")
      .style("top", (d3.event.pageY - 20) + "px");
  })
  .on("mousemove", function(d) { //EVENTI
    d3.select(this).style("opacity", 0.7);
    tooltip.html(`Stopa: ${d.Stopa}`)
      .style("left", (d3.event.pageX + 10) + "px")
      .style("top", (d3.event.pageY - 30) + "px");
  })
  .on("mouseout", function(d) {
    d3.select(this).style("opacity", 1);
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  });

// Tranzicija gdje će postupno povećavati stupičaste grafove
barchart.transition()
  .delay(function(d, i) { return i * 200; }) // Delay edrugačiji za svaki stupičasti graf pojedinačno
  .duration(1000) // Trajanje tranzicije u milisekundama
  .attr("y", function(d, i) { return y(d.Stopa); }) // Finalna y pozicija
  .attr("height", function(d) { return height - y(d.Stopa); })//finalna visina
     
 
}








//==================================================================================================================
//==================================================================================================================
//==================================================================================================================









function setPragRizikaOdSiromastva(){

    naslov.innerHTML="Prag rizika od siromaštva , euri";

 
   
   var margin = {top: 50, bottom: 70, left: 150, right: 20};
   var width = 1000 - margin.left - margin.right;
   var height = 800 - margin.top - margin.bottom;

   var x = d3.scale.ordinal()
   .domain(d3.range(jednoclanoKucanstvo.length))
   .rangeRoundBands([0, width]);

   var y = d3.scale.linear()
  .domain([0, d3.max(dvaOdrasladvojeDjece, function(d) { return d.Prag_rizika_od_siromaštva; }) + 0.5])
  .range([height, 0]);

   var svg = d3.select(".vizualizacija")
   .append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.bottom + margin.top)
   .style("background-color", "lightblue")
   .append("g")
   .attr("transform", "translate(" + margin.left + "," + margin.top +")");


   //LEGENDA


  svg.append("text")
  .attr("class", "x-axis-label") 
  .attr("x", width - 100) 
  .attr("y", 105) 
  .style("text-anchor", "middle") 
  .text("Dvije odrasle osobe s dvoje djece")
  .style("fill" , "RED")
  .style("opacity", 0)
  .transition()
  .duration(3000)
  .style("opacity", 1); 

  svg.append("text")
  .attr("class", "x-axis-label") 
  .attr("x", width - 120) 
  .attr("y", 420) 
  .style("text-anchor", "middle") 
  .text("Jednočlano kućanstvo")
  .style("fill" , "BLUE")
  .style("opacity", 0)
  .transition()
  .duration(3000)
  .style("opacity", 1); 

   //LEGENDA

   var xAxis = d3.svg.axis()
 .scale(x)
 .orient("bottom")
 .tickFormat(function(d, i) { return jednoclanoKucanstvo[i].godina; });

   var yAxis = d3.svg.axis()
   .scale(y)
   .orient("left")
   .ticks(10);

   svg.append("g")
   .attr("class", "x axis")
   .attr("transform", "translate(0," + height + ")")
   .call(xAxis)
   .selectAll("text")
   .style("text-anchor", "middle")
   .style("font-size", "20px");


   svg.append("text")
  .attr("class", "x-axis-label") 
  .attr("x", width / 2) 
  .attr("y", height + margin.bottom - 10) 
  .style("text-anchor", "middle") 
  .text("Godina")
  .style("font-size", "25px"); 


  
   svg.append("text")
   .attr("x", (width / 2))
   .attr("y", -(margin.top / 2))
   .attr("font-weight", "bold")
   .style("font-size", "20px")
   .style("text-anchor", "middle")

   svg.append("g")
   .attr("class", "y axis")
   .call(yAxis)
   .append("text")
   .attr("transform", "rotate(-90)")
   .attr("x", -(height / 2))
   .attr("y", -((margin.left / 2) + 20))
   .style("text-anchor", "middle")
   .style("font-size", "22px");

   svg.append("text")
  .attr("class", "y-axis-label") 
  .attr("transform", "rotate(-90)") 
  .attr("x", -height / 2) 
  .attr("y", -margin.left/2 -10) 
  .style("text-anchor", "middle") 
  .text(" PRIHODI PRETHODNE KALENDARSKE GODINE, €  ")
  .style("font-size", "25px"); 

   svg.append("text")
   .attr("x", (width / 2))
   .attr("y", (height + (margin.bottom / 2)))
   .attr("dy", "1em")
   .style("text-anchor", "middle")

   
   var valueline2 = d3.svg.line()
   .interpolate("basis")
   .x(function(d, i) { return x(i); })
   .y(function(d) { return y(d.Prag_rizika_od_siromaštva); });

   var linechart2 = svg.append("path")
   .attr("class", "line")
   .attr("d", valueline2(dvaOdrasladvojeDjece))
   .style("stroke", "red")
   .attr("fill", "none");

   var valueline3 = d3.svg.line()
   .interpolate("basis")
   .x(function(d, i) { return x(i); })
   .y(function(d) { return y(d.Prag_rizika_od_siromaštva); });

   var linechart3 = svg.append("path")
   .attr("class", "line")
   .attr("d", valueline3(jednoclanoKucanstvo))
   .style("stroke", "blue")
   .attr("fill", "none");
   


  
  //postepeno crtanje linija za mogućnošću podešavanja dužine crte i praznine
  drawLine(linechart2, 20, 5, dvaOdrasladvojeDjece);
  drawLine(linechart3, 1, 0, jednoclanoKucanstvo);

}






//==================================================================================================================
//==================================================================================================================
//==================================================================================================================


//funkcija koja uklanja sve aktivne SVG elemente
function removeActiveSvgElements() {
  
  const svgElements = document.querySelectorAll('svg');

  // Iteracija kroz svaki SVG element
  svgElements.forEach(svgElement => {
    
      svgElement.remove();
    
  });
}







//==================================================================================================================
//==================================================================================================================
//==================================================================================================================











function setStopaRizikaOdSiromastvaPremaDobiISpolu(){

  naslov.innerHTML="Stopa rizika od siromaštva sve dobi";


  
   
   var margin = {top: 50, bottom: 70, left: 150, right: 20};
   var width = 1200 - margin.left - margin.right;
   var height = 700 - margin.top - margin.bottom;

   var x = d3.scale.ordinal()
   .domain(d3.range(stopaRizikaOdSiromastvaSveDobi.length))
   .rangeRoundBands([0, width]);

   var y = d3.scale.linear()
  .domain([0, d3.max(stopaRizikaOdSiromastvaSveDobiZenski, function(d) { return d.Stopa; }) + 2.5])
  .range([height, 0]);

   var svg = d3.select(".vizualizacija")
   .append("svg")
   .attr("width", width + margin.left + margin.right)
   .attr("height", height + margin.bottom + margin.top)
   .style("background-color", "lightblue")
   .append("g")
   .attr("transform", "translate(" + margin.left + "," + margin.top +")");


   //LEGENDA

   svg.append("text")
  .attr("class", "x-axis-label") 
  .attr("x", width - 50) 
  .attr("y", 50) 
  .style("text-anchor", "middle") 
  .text("ŽENE")
  .attr("fill" , "#A33058"); 

  svg.append("text")
  .attr("class", "x-axis-label") 
  .attr("x", width - 50) 
  .attr("y", 65) 
  .style("text-anchor", "middle")
  .text("UKUPNO")
  .style("fill" , "RED"); 

  svg.append("text")
  .attr("class", "x-axis-label") 
  .attr("x", width - 50) 
  .attr("y", 80) 
  .style("text-anchor", "middle") 
  .text("MUŠKARCI")
  .style("fill" , "BLUE"); 



   //LEGENDA

   var xAxis = d3.svg.axis()
 .scale(x)
 .orient("bottom")
 .tickFormat(function(d, i) { return stopaRizikaOdSiromastvaSveDobiZenski[i].godina; });

   var yAxis = d3.svg.axis()
   .scale(y)
   .orient("left")
   .ticks(10);

   svg.append("g")
   .attr("class", "x axis")
   .attr("transform", "translate(0," + height + ")")
   .call(xAxis)
   .selectAll("text")
   .style("text-anchor", "middle");

   svg.append("text")
  .attr("class", "x-axis-label") 
  .attr("x", width / 2) 
  .attr("y", height + margin.bottom - 10) 
  .style("text-anchor", "middle") 
  .text("Godina"); 

   svg.append("text")
   .attr("x", (width / 2))
   .attr("y", -(margin.top / 2))
   .attr("font-weight", "bold")
   .style("font-size", "20px")
   .style("text-anchor", "middle");

   svg.append("g")
   .attr("class", "y axis")
   .call(yAxis)
   .append("text")
   .attr("transform", "rotate(-90)")
   .attr("x", -(height / 2))
   .attr("y", -((margin.left / 2) + 20))
   .style("text-anchor", "middle")
   .style("font-size", "13px");

   svg.append("text")
  .attr("class", "y-axis-label") 
  .attr("transform", "rotate(-90)") 
  .attr("x", -height / 2) 
  .attr("y", -margin.left/2) 
  .style("text-anchor", "middle") 
  .text("Postotak %")
  .style("font-size", "25px"); 

   svg.append("text")
   .attr("x", (width / 2))
   .attr("y", (height + (margin.bottom / 2)))
   .attr("dy", "1em")
   .style("text-anchor", "middle")

   var valueline1 = d3.svg.line()
   .interpolate("line")
   .x(function (d, i) {return x(i)})
  .y(function (d ) {return y(d.Stopa) });

   var linechart = svg.append("path")
   .attr("class", "cardinal")
   .attr("d", valueline1(stopaRizikaOdSiromastvaSveDobi))
   .style("stroke", "red")
   .attr("fill", "none");

   var valueline2 = d3.svg.line()
   .interpolate("basis")
   .x(function(d, i) { return x(i); })
   .y(function(d) { return y(d.Stopa); });

   var linechart2 = svg.append("path")
   .attr("class", "line")
   .attr("d", valueline2(stopaRizikaOdSiromastvaSveDobiMuski))
   .style("stroke", "blue")
   .attr("fill", "none");

   var valueline3 = d3.svg.line()
   .interpolate("basis")
   .x(function(d, i) { return x(i); })
   .y(function(d,i) { return y(d.Stopa); });

   var linechart3 = svg.append("path")
   .attr("class", "line")
   .attr("d", valueline3(stopaRizikaOdSiromastvaSveDobiZenski))
   .style("stroke", "#A33058")
   .attr("fill", "none");
   


  
  
  
  drawLine(linechart, 30, 10, stopaRizikaOdSiromastvaSveDobi);
  drawLine(linechart2, 1, 0, stopaRizikaOdSiromastvaSveDobiMuski);
  drawLine(linechart3, 1, 0, stopaRizikaOdSiromastvaSveDobiZenski);


}












//==================================================================================================================
//==================================================================================================================
//==================================================================================================================















function setStopaRizikaOdSiromastvaPremaAktivnosti(){

  naslov.innerHTML= "Stopa Rizika Od Siromaštva Prema Aktivnosti";
  const arrayOfData=[
    stopaRizikaOdSiromastvaPremaAktivnosti_radeUkupno,
    stopaRizikaOdSiromastvaPremaAktivnosti_zaposlenici,
    stopaRizikaOdSiromastvaPremaAktivnosti_samozaposlenici,
    stopaRizikaOdSiromastvaPremaAktivnosti_neRadeUkupno,
    stopaRizikaOdSiromastvaPremaAktivnosti_neRadeNezaposlenici,
    stopaRizikaOdSiromastvaPremaAktivnosti_neRadeUmirovljenici,
    stopaRizikaOdSiromastvaPremaAktivnosti_neRadeOstali];


  const legendaOpis = [
    "Rade ukupno ",
    "Rade ->zaposlenici",
    "Rade ->samozaposlenici",
    "Ne rade  ukupno",
    "Ne rade -> nezaposlenici",
    "ne rade ->umirovljenici",
    "ne rade ->ostali"];


  var margin = { top: 50, bottom: 70, left: 150, right: 300 };
  var width = 1500 - margin.left - margin.right;
  var height = 700 - margin.top - margin.bottom;
  




  var x = d3.scale.ordinal()
    .domain(d3.range(stopaRizikaOdSiromastvaPremaAktivnosti_neRadeNezaposlenici.length))
    .rangeRoundBands([0, width]);
    

    var max = 0;
    for (var i = 0; i < arrayOfData.length; i++) {
      var currentMax = d3.max(arrayOfData[i], function (d) { return d.Stopa; });
      if (currentMax > max) {
        max = currentMax;
      }
    }

  var y = d3.scale.linear()
    .domain([0, max + 2.5])
    .range([height, 0]);
  
  var svg = d3.select(".vizualizacija")
    .append("svg")
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.bottom + margin.top)
    .style("background-color", "lightblue")
    .append("g")
    .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
  
 
  var lineColors = ["red", "blue", "green", "orange", "purple", "#8C6E0B", "magenta"];
  
    
  
  
  for (var i = 0; i < 7; i++) {
    var valueline = d3.svg.line()
      .interpolate("basis")
      .x(function (d, i) { return x(i); })
      .y(function (d) { return y(d.Stopa); });
  
    var linechart = svg.append("path")
      .attr("class", "line")
      .attr("d", valueline(arrayOfData[i])) 
      .style("stroke", lineColors[i]) 
      .attr("fill", "none");

      

      drawLine(linechart, 1, 0, arrayOfData[i]);



      svg.append("text")
      .attr("class", "x-axis-label") 
      .attr("x", width + margin.right/2) 
      .attr("y", 100 + i*35) 
      .style("text-anchor", "middle") 
      .text(legendaOpis[i])
      .style("fill" , lineColors[i])
      .style("opacity", 0)
      .transition()
      .duration(3000)
      .style("opacity", 1);
       
  }

 

  var xAxis = d3.svg.axis()
  .scale(x)
  .orient("bottom")
  .tickFormat(function(d, i) { return arrayOfData[0][i].godina; });
 
    var yAxis = d3.svg.axis()
    .scale(y)
    .orient("left")
    .ticks(10);
 
    svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis)
    .selectAll("text")
    .style("text-anchor", "middle")
    .style("font-size", "20px");
 
 
    svg.append("text")
   .attr("class", "x-axis-label") 
   .attr("x", width / 2) 
   .attr("y", height + margin.bottom - 10) 
   .style("text-anchor", "middle") 
   .text("Godina")
   .style("font-size", "25px"); 
 
 
   
    svg.append("text")
    .attr("x", (width / 2))
    .attr("y", -(margin.top / 2))
    .attr("font-weight", "bold")
    .style("font-size", "20px")
    .style("text-anchor", "middle")
 
    svg.append("g")
    .attr("class", "y axis")
    .call(yAxis)
    .append("text")
    .attr("transform", "rotate(-90)")
    .attr("x", -(height / 2))
    .attr("y", -((margin.left / 2) + 20))
    .style("text-anchor", "middle")
    .style("font-size", "22px");
 
    svg.append("text")
   .attr("class", "y-axis-label") 
   .attr("transform", "rotate(-90)") 
   .attr("x", -height / 2) 
   .attr("y", -margin.left/2 -10) 
   .style("text-anchor", "middle") 
   .text(" STOPA RIZIKA OD SIROMAŠTVA PREMA AKTIVNOSTI , %  ")
   .style("font-size", "25px"); 
    svg.append("text")
    .attr("x", (width / 2))
    .attr("y", (height + (margin.bottom / 2)))
    .attr("dy", "1em")
    .style("text-anchor", "middle")
  


}








//==================================================================================================================
//==================================================================================================================
//==================================================================================================================







function setStopraRizikaOdSiromastvaPremaIntenzitetuBezDjece(){

  naslov.innerHTML= "Stopa Rizika Od Siromaštva Prema Intenzitetu u 2022. godini";
  

    var flag =false;
    var width = 1200;
    var height = 700;
    var outerRadius = 300;
    var innerRadius = 0;
   
    var color = d3.scale.category20();
   
    var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
   
    var pie = d3.layout.pie()
    .value(function(d) { return d.postotak; });
   
    var svg = d3.select(".vizualizacija")
    .append("svg")
    .attr("width", width)
    .attr("height", height);


    svg.append("text") 
    .attr("x", width/2) 
    .attr("y", 50)
    .style("opacity",0) 
    .style("text-anchor", "middle") 
    .text(" Kućanstva bez uzdržavane djece  ")
    .style("font-size", "25px")
    .attr("fill","blue")
    .transition()
    .duration(2500)
    .style("opacity",1); 

   
    var pieArcs = svg.selectAll("g.pie")
    .data(pie(stopaRizikaPremaIntenzitetuRada_2022_bez_djece))
    .enter()
    .append("g")
    .attr("class", "pie")
    .attr("transform", "translate(" + (width / 2) + ", " + (height/ 2+50) + ")");
   
    pieArcs.append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", arc)
    .transition() 
    .duration(2000) 
    .attrTween("d", function(d) {
      var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
      return function(t) {
        return arc(interpolate(t));
      };
    });


    
   
    pieArcs.append("text")
    .style("opacity",0)
    .attr("transform", function(d) { 

      var centroid = arc.centroid(d);
    var x = centroid[0];
    var y = centroid[1];
    
    var angle = Math.atan2(y, x);
    
    var labelX = Math.cos(angle) * (outerRadius -30);
    var labelY = Math.sin(angle) * (outerRadius);
    return "translate(" + labelX + "," + labelY + ") rotate(" + 15+ ")";
    })
    .transition()
    .duration(2500)
    .style("opacity",1)
    .attr("text-anchor", "middle")
    .text(function(d, i) { return stopaRizikaPremaIntenzitetuRada_2022_bez_djece[i].intenzitet; });


    pieArcs
  .on("mouseover", function(d, i) {
    d3.select(this).select("path").attr("opacity", 0.7); 
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.9);
    tooltip.html(`Stopa rizika od siromaštva:${stopaRizikaPremaIntenzitetuRada_2022_bez_djece[i].postotak}%`)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 28) + "px");
  })
  .on("mousemove", function(d,i){
    d3.select(this).select("path").attr("opacity", 0.7); 
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.9);
    tooltip.html(`Stopa rizika od siromaštva:${stopaRizikaPremaIntenzitetuRada_2022_bez_djece[i].postotak}%`)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 28) + "px");
  })
  .on("mouseout", function() {
    d3.select(this).select("path").attr("opacity", 1); 
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  })
  .on("click" ,function(){
    
    if(flag==false){

      setStopraRizikaOdSiromastvaPremaIntenzitetuSaDjecom();
      flag=true;
    }
    
    
  })

}






function setStopraRizikaOdSiromastvaPremaIntenzitetuSaDjecom(){

  naslov.innerHTML= "Stopa Rizika Od Siromaštva Prema Intenzitetu u 2022. godini";
  
   
  var width = 1200;
  var height = 700;
  var outerRadius = 300;
  var innerRadius = 0;
   
    var color = d3.scale.category20();
   
    var arc = d3.svg.arc()
    .innerRadius(innerRadius)
    .outerRadius(outerRadius);
   
    var pie = d3.layout.pie()
    .value(function(d) { return d.postotak; });
   
    var svg = d3.select(".vizualizacija")
    .append("svg")
    .attr("width", width)
    .attr("height", height);
   
    svg.append("text") 
    .attr("x", width/2) 
    .attr("y", 50)
    .style("opacity",0) 
    .style("text-anchor", "middle") 
    .text(" Kućanstva s uzdržavanom djecom  ")
    .style("font-size", "25px")
    .attr("fill","blue")
    .transition()
    .duration(2500)
    .style("opacity",1); 



    var pieArcs = svg.selectAll("g.pie")
    .data(pie(stopaRizikaPremaIntenzitetuRada_2022_sa_djecom))
    .enter()
    .append("g")
    .attr("class", "pie")
    .attr("transform", "translate(" + (width / 2) + ", " + (height/ 2 +50) + ")");
   
    pieArcs.append("path")
    .attr("fill", function(d, i) { return color(i); })
    .attr("d", arc)
    .transition() 
    .duration(2000) 
    .attrTween("d", function(d) {
      var interpolate = d3.interpolate({ startAngle: 0, endAngle: 0 }, d);
      return function(t) {
        return arc(interpolate(t));
      };
    });


    
   
    pieArcs.append("text")
    .style("opacity",0)
    .attr("transform", function(d) { 

      var centroid = arc.centroid(d);
    var x = centroid[0];
    var y = centroid[1];
   
    var angle = Math.atan2(y, x);
    
    var labelX = Math.cos(angle) * (outerRadius -60);
    var labelY = Math.sin(angle) * (outerRadius);
    return "translate(" + labelX + "," + labelY + ") rotate(" + 15+ ")";
    })
    .transition()
    .duration(2500)
    .style("opacity",1)
    .attr("text-anchor", "middle")
    .text(function(d, i) { return stopaRizikaPremaIntenzitetuRada_2022_sa_djecom[i].intenzitet; });


    pieArcs
  .on("mouseover", function(d, i) {
    d3.select(this).select("path").attr("opacity", 0.7); 
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.9);
    tooltip.html(`Stopa rizika od siromaštva:${stopaRizikaPremaIntenzitetuRada_2022_sa_djecom[i].postotak}%`)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 28) + "px");
  })
  .on("mousemove", function(d,i){
    d3.select(this).select("path").attr("opacity", 0.7); 
    tooltip.transition()
      .duration(200)
      .style("opacity", 0.9);
    tooltip.html(`Stopa rizika od siromaštva:${stopaRizikaPremaIntenzitetuRada_2022_sa_djecom[i].postotak}%`)
      .style("left", (d3.event.pageX) + "px")
      .style("top", (d3.event.pageY - 28) + "px");
  })
  .on("mouseout", function() {
    d3.select(this).select("path").attr("opacity", 1); 
    tooltip.transition()
      .duration(500)
      .style("opacity", 0);
  })
  
}








//==================================================================================================================
//==================================================================================================================
//==================================================================================================================










   //buttoni

   const divVizualizacija = document.querySelector(".vizualizacija");

const button1 = document.querySelector("#button1");
const button2 = document.querySelector("#button2");
const button3 = document.querySelector("#button3");
const button4 = document.querySelector('#button4');
const button5 = document.querySelector('#button5');

button1.addEventListener("click", function() {
    removeActiveSvgElements()
    setStopaRizikaOdSiromastvaPremaStupnjuObrazovanja2022();
    
  });


 button2.addEventListener("click", function() {
    removeActiveSvgElements()
    setStopaRizikaOdSiromastvaPremaDobiISpolu();
  });

  button3.addEventListener("click", function() {
    removeActiveSvgElements()
    setPragRizikaOdSiromastva();
  });


  button4.addEventListener("click", function() {
    removeActiveSvgElements()
    setStopaRizikaOdSiromastvaPremaAktivnosti();
  });
  

  button5.addEventListener("click", function() {
    removeActiveSvgElements()
    setStopraRizikaOdSiromastvaPremaIntenzitetuBezDjece();
  });
  