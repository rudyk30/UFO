// import the data from data.js

const tableData = data;

// reference the HTML table using d3

var tbody = d3.select("tbody");

function buildTable(data){
    tbody.html("");
}


data.forEach((dataRow) => {
    let row = tbody.append("tr");
    Object.values(dataRow).forEach((val) => {
      let cell = row.append("td");
      cell.text(val);
      }
    );
  });

//data is calling the data table 
//dataRow is the value when the function is called 
// row is a variable that will append a row to the table body 

function handleClick(){
    let date = d3.select("#datetime").property("value");
    let filteredData = tableData;
    if (date){
        filteredData = filteredData.filter(row => row.datetime === date);
    };
    buildTable(filteredData);
};

d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);