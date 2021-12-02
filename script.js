function m2(e) {
  e.preventDefault();
  //document.write('hi');
  var text1 = document.getElementById('m1').value;
  var new1 = text1;
  if (new1.includes("sqrt")) {
    new1.replace("sqrt","√");
  }
  else if (new1.includes("_")) {
    new1.replace("_","<sub>");
  }
  else if (new1.includes("^")) {
    new1.replace("^","<sup>");
  }
  document.getElementById('m3').innerHTML = new1;
}