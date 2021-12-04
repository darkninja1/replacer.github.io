//
var form = document.getElementById("m1");
//
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var text1 = document.getElementById('m2').value;

    
    var end1 = text1.replace("sqrt","√");
    
    var end2 = end1.replace("_","<sub>");
    
    var end3 = end2.replace("^","<sup>");
    
    document.getElementById('m3').innerHTML = end3;
    
});

  
  


