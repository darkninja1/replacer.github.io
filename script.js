function m2(e) {
  e.preventDefault();
  //document.write('hi');
  var text1 = document.getElementById('m1').value;
  var new1 = text1;
  /*if (text1.includes("sqrt")) {
    new1.replace("sqrt","√");
  }*/
  document.getElementById('m3').innerHTML = new1;
}