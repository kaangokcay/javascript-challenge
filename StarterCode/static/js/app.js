// from data.js
var tableData = data;
var tbody = d3.select("tbody");
//console.log(tableData);

var filter = d3.select("#filter-btn");
tableData.forEach(function(table){
    var row = tbody.append("tr")

    Object.entries(table).forEach(function([key, value]){
        var cell = row.append("td");
        cell.text(value);
    })
})

filter.on("click", function(){
    tbody.html("");

    var inputDate = d3.select("#datetime");
    var inputState = d3.select("#state");
    var inputCity = d3.select("#city");
    var inputCountry = d3.select("#country");
    var inputShape = d3.select("#selShapes");

    var date = inputDate.property("value");
    var state = inputState.property("value");
    var city = inputCity.property("value");
    var country = inputCountry.property("value");
    var shape = inputShape.property("value");

    if(date == ""){
        var dateFilter = tableData;
    }
    else{
        var dateFilter = tableData.filter(d => d.datetime == date);
    }
    if(city == ""){
        var cityFilter = dateFilter;
    }
    else{
        var cityFilter = dateFilter.filter(d => d.city == city);
    }
    if(state == ""){
        var stateFilter = cityFilter;
    }
    else{
        var stateFilter = cityFilter.filter(d => d.state == state);
    }
    if(country == ""){
        var countryFilter = stateFilter;
    }
    else{
        var countryFilter = stateFilter.filter(d => d.country == country);
    }
    if(shape == ""){
        var finalFilter = countryFilter;
    }
    else{
        var finalFilter = countryFilter.filter(d => d.shape == shape);
    }
    finalFilter.forEach(function(table){
        var row = tbody.append("tr");
        Object.entries(table).forEach(function([key, value]){
            var cell = row.append("td");
            cell.text(value);
        })
    })
})