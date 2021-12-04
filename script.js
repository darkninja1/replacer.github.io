//
var form = document.getElementById("m1");
//
form.addEventListener('submit', function(e) {
    e.preventDefault();
    var end = "";
    var text1 = document.getElementById('m2').value;

    if (text1.includes("sqrt")) {
      end = text1.replace("sqrt","√");
    }
    else if (text1.includes("_")) {
      end = text1.replace("_","<sub>");
    }
    else if (text1.includes("^")) {
      end = text1.replace("^","<sup>");
    }
    else {
      document.write("Invalid or Error");
    }
    document.getElementById('m3').innerHTML = end;
    
});

  
  


