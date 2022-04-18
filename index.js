// code your solution here

const record = [
  {year: "2018", result: "L"},
  {year: "2015", result: "W"},
  {year: "2016", result: "N/A"}
]
const superbowlWin = (arr) => {
    arr.find(element => {
     
    if (element.result === "W"){
      console.log(element.year)
    } else {
      console.log(undefined)
    }
  }
  );
}
superbowlWin(record)
