console.log("Hello back to school");

const viz = document.getElementById("tableauViz");
let workbook;
let vizActiveSheet;
let dashboard;
let listSheets;

function logWorkbookInformation() {
  workbook = viz.workbook;
  console.log(`The workbook name is: ${workbook.name}`);

  // get the array of dashboards in the workbook
  let sheets = workbook.publishedSheetsInfo;
  sheets.forEach((element) => {
    index = element.index;
    console.log(`The sheet with index ${index} is ${element.name}`);
  });

  //get the active sheet for this workbook
  vizActiveSheet = workbook.activeSheet;
  console.log(`The active sheet is ${vizActiveSheet.name}`);

  //get list of sheets
  listSheets = vizActiveSheet.worksheets;
  listSheets.forEach((element) => {
    index = element.index;
    console.log(`The worksheet with index ${index} is ${element.name}`);
  });
}

// run the function when viz becomes interactive.
viz.addEventListener("firstinteractive", logWorkbookInformation);
