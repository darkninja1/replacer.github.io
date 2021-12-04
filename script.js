//
var form = document.getElementById("m1");
//
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var text1 = document.getElementById('m2').value;

    var end1 = text1.replaceAll("sqrt","√");
    
    var end2 = end1.replaceAll("_(","<sub>");
    
    var end3 = end2.replaceAll("^(","<sup>");

    var end4 = end3.replaceAll(")","</sup></sub>");

    var end5 = end4.replaceAll("*","&sdot;");
    
    document.getElementById('m3').innerHTML = end5;
    
});

  
  


