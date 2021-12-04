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

    var end5 = end4.replaceAll("*","&sdot; ");
    //
    var end6 = end5.replaceAll("sigma","Σ");
    var end7 = end6.replaceAll("alpha","α");
    var end8 = end7.replaceAll("beta","β");
    var end9 = end8.replaceAll("delta","Δ");
    var end10 = end9.replaceAll("theta","θ");
    var end11 = end10.replaceAll("omega","Ω");
    var end12 = end11.replaceAll("pi","π");
    var end13 = end12.replaceAll("psi","ψ");
    var end14 = end13.replaceAll("mu","μ");
    var end15 = end14.replaceAll("zeta","ζ");
    
    document.getElementById('m3').innerHTML = end15;
    
});

  
  
/*
<div class="frac">
    <span>1</span>
    <span class="symbol">/</span>
    <span class="bottom">2</span>
    
</div>
*/ 

