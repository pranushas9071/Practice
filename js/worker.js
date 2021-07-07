var res = new Date();
function implement() {
  var date ="Date : "+ res.toISOString().split("T")[0];
  var time = "Time : "+res.toISOString().split("T")[1];
  postMessage(date+","+time);
}
implement();
