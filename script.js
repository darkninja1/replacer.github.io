//
var form = document.getElementById("m1");
//
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var text1 = document.getElementById('m2').value;

    //if (text1.includes("sqrt")) {
    var end1 = text1.replace("sqrt","√");
    //}
    //else if (text1.includes("_")) {
    var end2 = end1.replace("_","<sub>");
    //}
    //else if (text1.includes("^")) {
    var end3 = end2.replace("^","<sup>");
    //}
    document.getElementById('m3').innerHTML = end3;
    
});

  
  


