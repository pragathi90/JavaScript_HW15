
var tableData = data;

var tbody = d3.select("tbody");
var button = d3.select("#filter-btn");



data.forEach(function(ufos) {
    var row = tbody.append("tr");

    Object.entries(ufos).forEach(function([key, value]) {
        var cell = tbody.append("td");
        cell.text(value);
    });
});



button.on("click", function() {
    d3.event.preventDefault();

    var inputField = d3.select("#datetime");
    var inputElement = inputField.property("value");
    console.log(inputElement);

    var filteredData = tableData.filter(tableData => tableData.datetime === inputElement);
    console.log(filteredData);

    tbody.text('');


    filteredData.forEach(dateData => {
        var row = tbody.append("tr");

        Object.entries(dateData).forEach(([key, value]) => {
            row.append("td").text(value);
        });
    });
});
