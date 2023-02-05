const rect=require('./rectangle');


function solverec(l,b){
    console,console.log("length = "+l+"  breadt = "+b);
    rect(l,b,(err,rectangle)=>{
        if(err){
            console.log("ERROR :" ,err.message);
        }
        else{ 
            console.log("Area of rectangle of length l "+l +"  and breadth "+ b +"is :" + rectangle.area());
            console.log("perimeter of rectangle of length l " +l +"  and breadth "+ b +"is :" + rectangle.perimeter());
        }
    });
    console.log("This statment is after funcion call rect()");
   
}
solverec(2,3);