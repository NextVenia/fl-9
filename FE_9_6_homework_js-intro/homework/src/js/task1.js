const amount=parseFloat(prompt('Enter amount of money','0'));
const discount=parseFloat(prompt('Enter a number of discount','-1'));
let output;
const saved=amount*discount/100;
function priceWithDis() {
    const result=amount-amount*discount/100;
    return result.toFixed(2);
}
if(amount>0&&!isNaN(amount)&&discount>=0&&!isNaN(discount)&&discount<=100){
    output=`Price without discount: ${+amount.toFixed(2)}
Discount:${+discount.toFixed(2)}%
Price with discount: ${+priceWithDis()},
Saved:${+saved.toFixed(2)}`;
}else {
    output='Invalid data';
}
console.log(output);
