function calculate(){

  var x=parseInt(document.getElementById("p1").value);
  var y=parseInt(document.getElementById("prix1").value);
  var z=parseInt(document.getElementById("q1").value);

  var a=parseInt(document.getElementById("p2").value);
  var b=parseInt(document.getElementById("prix2").value);
  var c=parseInt(document.getElementById("q2").value);

  var d=parseInt(document.getElementById("p3").value);
  var e=parseInt(document.getElementById("prix3").value);
  var f=parseInt(document.getElementById("q3").value);

  var g=parseInt(document.getElementById("p4").value);
  var h=parseInt(document.getElementById("prix4").value);
  var i=parseInt(document.getElementById("q4").value);

  var j=parseInt(document.getElementById("p5").value);
  var k=parseInt(document.getElementById("prix5").value);
  var l=parseInt(document.getElementById("q5").value);

  var m=parseInt(document.getElementById("p6").value);
  var n=parseInt(document.getElementById("prix6").value);
  var o=parseInt(document.getElementById("q6").value);

  var p=parseInt(document.getElementById("p7").value);
  var q=parseInt(document.getElementById("prix7").value);
  var r=parseInt(document.getElementById("q7").value);

  var s=parseInt(document.getElementById("p8").value);
  var t=parseInt(document.getElementById("prix8").value);
  var u=parseInt(document.getElementById("q8").value);

  var v=parseInt(document.getElementById("p9").value);
  var w=parseInt(document.getElementById("prix9").value);
  var a1=parseInt(document.getElementById("q9").value);

  var b1=parseInt(document.getElementById("p10").value);
  var c1=parseInt(document.getElementById("prix10").value);
  var d1=parseInt(document.getElementById("q10").value);

  var e1=parseInt(document.getElementById("p11").value);
  var f1=parseInt(document.getElementById("prix11").value);
  var g1=parseInt(document.getElementById("q11").value);

  

  document.getElementById("answer").value=(y*z);
  document.getElementById("answer1").value=(b*c);
  document.getElementById("answer2").value=(e*f);
  document.getElementById("answer3").value=(h*i)
      document.getElementById("answer4").value=(k*l)
        document.getElementById("answer5").value=(n*o)
          document.getElementById("answer6").value=(q*r)
            document.getElementById("answer7").value=(t*u)
              document.getElementById("answer8").value=(w*a1)
                document.getElementById("answer9").value=(c1*d1)
                  document.getElementById("answer10").value=(f1*g1)
    document.getElementById("total").value=(x+y+z+a+b+c+d+e+f+g+h+i+k+l+n+m+o+p+q+r+s+t+u+v+w+a1+b1+c1+d1+e1+f1+g1);
             }

