const sideA=parseFloat(prompt('Enter side A:','0'));
const sideB=parseFloat(prompt('Enter side B:','0'));
const angle=parseFloat(prompt('Enter angle:','0'));
let check=1;
let output;
const maxAngle=180;
const degree=Math.PI/maxAngle*angle;
const sideC=findSideC();
const perimeter=sideA+sideB+sideC;
const square=1 / 2 * sideA * sideB * Math.sin(degree);
function validData(){
   
    if(isNaN(sideA)||isNaN(sideB)||isNaN(angle)){
        check=0;
    }
    
    if(sideA<0||sideB<0||angle<0||angle>maxAngle){
        check=0;//sum of 3 angles cant be more than 180, same for 1 angle
    }
   return check;
}
function findSideC(){
    let result=Math.pow(sideA,2)+Math.pow(sideB,2)-2*sideA*sideB*Math.cos(degree);
    return Math.sqrt(result);
}

if(validData()===0){
    output='Invalid data';  
}else{
    output=`c length:${+sideC.toFixed(2)}
Triangle square:${+square.toFixed(2)}
Triangle perimeter:${+perimeter.toFixed(2)}`;   
}
console.log(output);
