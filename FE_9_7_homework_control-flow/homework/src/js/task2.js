let random, numberUser, curentPrice;
let game=confirm('Do you want to play a game?');
let startRange=5;
let prize=10;
let totalSum=0;
let attempt=1;
let firstAttempt=1;
if(!game){
    alert('You did not become a millionaire, but can.');
}else{
    let range=startRange;
    for(;game;){
        random=Math.round(Math.random()*range);
        curentPrice=prize;
        for(let i=0;i<3;i++){
            if(attempt!==firstAttempt){
                numberUser=prompt(`False! Enter e number from 0 to ${range}\n`
                +`Attemts left: ${attempt}\n`
                +`Total prize: ${totalSum}$\n`
                +`Possible prize on current attempt: ${curentPrice}$`);
            }else{
                numberUser=prompt(`Enter e number from 0 to ${range}\n`
                +`Attemts left: ${attempt}\n`
                +`Total prize: ${totalSum}$\n`
                +`Possible prize on current attempt: ${curentPrice}$`);
            }
            if(numberUser===null){
                alert('You did not become a millionaire, but can.');
                game=!game;
                break;
            }else if(numberUser===''){
                attempt++;
                curentPrice=parseInt(curentPrice/2);
            }else if(random===+numberUser){
                totalSum+=curentPrice;
                alert(`Congratulation! Your prize is: ${curentPrice}$\n`
                +`Your total prize is: ${totalSum}$`);
                game=confirm(`Do you want to continue?`);
                attempt=firstAttempt;
                if(game){
                    prize=prize*3;
                    range=range*2;
                    break;
                }else{
                    game=confirm('Do you want to play a game?');
                    break;
                }
            }else{
                attempt++;
                curentPrice=parseInt(curentPrice/2);
            }
            if(attempt===4){
                attempt=firstAttempt;
                totalSum=0;
                range=startRange;
                alert(`Your prize is: ${totalSum}$`);
                game=confirm('Do you want to play a game?');
            }
        }
    }
}