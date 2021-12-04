//
var form = document.getElementById("m1");
//
form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    var text1 = document.getElementById('m2').value;

    if (text1.includes("sqrt")) {
      text1.replace("sqrt","√");
    }
    else if (text1.includes("_")) {
      text1.replace("_","<sub>");
    }
    else if (text1.includes("^")) {
      text1.replace("^","<sup>");
    }
    else {
      document.write("Invalid Url or Error");
    }
    document.getElementById('m3').innerHTML = text1;
    
});
  
  


