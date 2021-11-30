function math1() {
  var text = document.getElementById('math1').value;
  if (text.includes('sqrt')) {
    text.replace('sqrt','√');
  }
}