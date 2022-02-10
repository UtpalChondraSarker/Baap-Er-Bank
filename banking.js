// handle deposit button event
document.getElementById('deposit-button').addEventListener('click',function(){
    // deposit input value
    const inputField=document.getElementById('deposit-input');
    const newDepositAmount=inputField.value;
    //console.log(depositAmount);
    // deposit total card

    const depositTotal=document.getElementById('deposit-total');
    const PreviousDepositAmount=depositTotal.innerText;
    const newDepositTotal= parseFloat(PreviousDepositAmount) + parseFloat(newDepositAmount);
    depositTotal.innerText=newDepositTotal;

    //update acount balance
    const balanceTotal=document.getElementById("balance-total");
    const balanceTotalText=balanceTotal.innerText;
    const previousBalanceTotal=parseFloat(balanceTotalText) +parseFloat(newDepositAmount);
    balanceTotal.innerText=previousBalanceTotal;


    //clear the deposit input filed

    inputField.value=" ";
    
})
//handle withdraw event handler

document.getElementById('Withdraw-button').addEventListener('click',function(){

    const withdrawInput=document.getElementById('Withdraw-input');
    const withdrawAmountText=withdrawInput.value;
    const newWithdrawAmount=parseFloat(withdrawAmountText)
    
    //set withdraw total

   const withdrawTotal=document.getElementById('withdraw-total');
    const withdrawTotalText=withdrawTotal.innerText;
    const previousWithdrawTotal=parseFloat(withdrawTotalText);

    const newWithdrawTotal=previousWithdrawTotal+newWithdrawAmount;
    withdrawTotal.innerText=newWithdrawTotal;

    //clear withdraw input
    withdrawInput.value='';

    //update balance

    const balanceValue=document.getElementById('balance-total');
    const previousValueTotal=balanceValue.innerText;
    const newValueTotal=previousValueTotal-newWithdrawTotal;
    balanceValue.innerText=newValueTotal;
})