const rect=require('./rectangle');


function solverec(l,b){
    console,console.log("length = "+l+"  breadt = "+b);
    if(l<=0 || b<=0) {
        console.log("dimesions are invalid ,l and b must should be grater than 0(zero)");
    }
    else{
       console.log("area of rectanle is :"+ rect.area(l,b));
       console.log("perimeter of rectanle is :"+ rect.perimeter(l,b));
    }
}
solverec(2,3);
solverec(0,3);
solverec(-1,3);
solverec(2,4);