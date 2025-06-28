let randomNumber= Math.floor(Math.random()*100)+1;
let attempt=5;
function checkNumber(){
    let guess= Number(document.getElementById("inputText").value);
    let message= document.getElementById("message");
if(guess==randomNumber){
    message.textContent="Congragulations !!!!!";
attempt=0;

}else if(guess<1 || guess>100 || isNaN(guess)){
    message.textContent="Error , please enter a number between 1 to 100";
}
else{
attempt--;
if(attempt>0){
message.textContent="You have "+attempt+" left.";
}else{
message.textContent="Better Luck Next Time,the number was "+randomNumber;

}
 }document.getElementById("inputText").value="";
}
    function clearLabel(){
        document.getElementById("inputText").value="";
        document.getElementById("message").textContent=" ";
        randomNumber= Math.floor(Math.random()*100)+1;
        attempt=5;
    }
    

