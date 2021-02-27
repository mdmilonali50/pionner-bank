//login button handalar
const loginButton=document.getElementById("login");
loginButton.addEventListener("click", function(){
   // nicher code click korar por login-area hide
    const loginArea=document.getElementById("login-area");
    loginArea.style.display="none";

    // transaction area block
    const transactionArea=document.getElementById("transaction-area");
    transactionArea.style.display="block";
})

//deposite button handaler
const depositeButton=document.getElementById("addDeposite");
depositeButton.addEventListener("click", function(){
    const depositeNumber=getInputNumber("depositeAmount")
    
spanUpdateText("currentDeposite", depositeNumber);
spanUpdateText("currentBlance", depositeNumber);

document.getElementById("depositeAmount").value=""; 
})


// widthrow handale start

 const widthrowButton=document.getElementById("addWidthrow");
 widthrowButton.addEventListener("click", function(){
const widthrowNumber=getInputNumber("widthrowAmount");
spanUpdateText("currentWidthrow", widthrowNumber );
spanUpdateText("currentBlance", -1*widthrowNumber );
document.getElementById("widthrowAmount").value="";


 })
// widthrow handale function start
  function getInputNumber(id){
 const widthrowAmount=document.getElementById(id).value;
    const widthrowNumber=parseFloat(widthrowAmount);
return widthrowNumber;
  }


  
function spanUpdateText(id, depositeNumber){
const current=document.getElementById(id).innerText;
const currentNumber=parseFloat(current);
const total=depositeNumber+currentNumber;
document.getElementById(id).innerText=total;

}
  