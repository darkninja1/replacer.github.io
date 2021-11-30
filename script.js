function m2() {
  var text = document.getElementById('m1').value;
  if (text.includes('sqrt')) {
    text.replace('sqrt','√');
    document.getElementById('m1').value = text;
  }
}