let input=prompt('enter yuor name','');
let password='';
if(input===null){
    alert('Canceled');
}else if(input.length<4){
    alert("I don't know any users having name length less than 4 symbols");
}else if(input==='User'){
    password=prompt('enter yuor password');
        if(password===null){
            alert('Canceled');
        }else if(password.length===0){
            alert('Canceled');
        }else if(password==='SuperUser'){
            new Date().getHours()<20? alert('Good day!'):alert('Good evening!');
        }else{
            alert('Wrong password');
        }
}else{
    alert('I don’t know you');
}