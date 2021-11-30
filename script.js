function m2() {
  //document.write('hi');
  var text1 = document.getElementById('m1').value;
  if (text1.includes("sqrt")) {
    text.replace("sqrt","√");
    document.getElementById('m1').value = text;
  }
  document.getElementById('m1').value = text;
}