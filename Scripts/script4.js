/*Start of Game 1*/

const element2 = document.getElementById('buttonNo')
    const element3 = document.getElementById('buttonYes')
    const element1 = document.getElementById('startButton')

    
element1.addEventListener("click", () => {
    //function mainProgram(){
    var arrayNum = [];
    //count=0;

    var pointsCount = 0;
    //var highscore = 0
    var livesCount = 3;
    var randomNum = 0 + Math.floor(Math.random()*10);
   
    startA4.innerHTML = "Focus"  
    startA3.innerHTML = "Points: " + pointsCount
    startA2.innerHTML = "Lives: " + livesCount

    startA1.innerHTML = "Has this number appeared before: " + randomNum
 
    
    element3.addEventListener("click", () => {
        
        var outputCount = 0;
        for (i = 0; i < arrayNum.length; i++){
         if(arrayNum[i] == randomNum){
            outputCount += 1
         }
        }
        
        if (outputCount == 0){
        livesCount--
        }
        else pointsCount++
    
        arrayNum.push(randomNum)
        arrayNum = [...new Set(arrayNum)];

        startA3.innerHTML = "Points: " + pointsCount
        startA2.innerHTML = "Lives: " + livesCount
        startA4.innerHTML = "Focus";

        if (pointsCount < 8)
        randomNum = 10 + Math.floor(Math.random()*10);
        else if (pointsCount < 16) 
        randomNum = 5 + Math.floor(Math.random()*25);
        else randomNum = 0 + Math.floor(Math.random()*35);


        startA1.innerHTML = "Has this number appeared before: \n" + randomNum

        if (livesCount == 0){   
            startA4.innerHTML = "You lose! Points: " + pointsCount
            setTimeout(myTimeout1, 1500)
        }
        if (pointsCount == 30){
            startA4.innerHTML = "You win! You have reached 30 points!"
            setTimeout(myTimeout1, 1500)
        }
        
    
    });

    element2.addEventListener("click", () => {
        
        
        var outputCount = 0;
        for (i = 0; i < arrayNum.length; i++){
         if(arrayNum[i] == randomNum){
            outputCount += 1
         }
        }
        
        if (outputCount > 0){
        livesCount--
        }
        else pointsCount++
    
        arrayNum.push(randomNum)
        arrayNum = [...new Set(arrayNum)];
        startA3.innerHTML = "Points: " + pointsCount
        startA2.innerHTML = "Lives: " + livesCount
        startA4.innerHTML = "Focus";

        if (pointsCount < 8)
        randomNum = 10 + Math.floor(Math.random()*10);
        else if (pointsCount < 16) 
        randomNum = 5 + Math.floor(Math.random()*35);
        else randomNum = 0 + Math.floor(Math.random()*40);

        startA1.innerHTML = "Has this number appeared before: \n" + randomNum

        if (livesCount == 0){    
            startA4.innerHTML = "You lose! Points: " + pointsCount
            setTimeout(myTimeout1, 500)
        }
        if (pointsCount == 30){
            startA4.innerHTML = "You win! You have reached 30 points!"
            setTimeout(myTimeout1, 500)
        }
        
    });
});    


function myTimeout1 (){
    startA4.innerHTML = "Press Start to Try Again" 
}