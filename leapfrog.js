
function setup() {
  createCanvas(400, 400);
  let v0=0;
  let x0=1;
  xn=x0;            
  a=-1*xn;
  let Dtx=0.1;
  let Dtv=0.05;
  var text = "";
  var text1 = "";
  
  for (i = 0; i < 7; i++) {
    vn=v0+a*Dtv;
    text += "Hastigheten efter " + Dtv + "sekunder är: " + vn;
   print(vn);
    xn=x0+vn*Dtx;
    text1 += "Sträckan efter " + Dtx + "sekunder är: " + xn;
    print(xn);
    print(" ");
    v0=vn;
    vn=0;
    x0=xn;
    xn=0;
    Dtv=0.1 
  
}

}
function draw() {
  background(220);
}
