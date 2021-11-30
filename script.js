function math() {
  var text = document.getElementById('math').value;
  if (text.includes('sqrt')) {
    text.replace('sqrt','√');
  }
  else {
    document.write('hi');
  }
}