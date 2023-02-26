var depositAmount = function () {
    var depositInputText = document.getElementById("deposit-input").value;
    if (isNaN(depositInputText) || depositInputText == "") {
        alert("Please input numerical value");
    } else {
        var depositInputValue = parseFloat(depositInputText);
        var depositText = document.getElementById("deposit-total").textContent;
        var depositValue = parseFloat(depositText);
        var totalDeposit = depositValue + depositInputValue;
        document.getElementById("deposit-total").innerHTML = totalDeposit;
        document.getElementById("deposit-input").value = "";

        var balanceInputText = document.getElementById("balance-total").textContent;
        var balanceValue = parseFloat(balanceInputText);
        var finalAmount = depositInputValue + balanceValue;
        document.getElementById("balance-total").innerHTML = finalAmount;
    }
}

var depositButton = document.getElementById("deposit-button");
depositButton.addEventListener("click", depositAmount);
// deposit portion


var withdrawAmount = function(){
    var withdrawInputText = document.getElementById("withdraw-input").value;
    var withdrawInputValue = parseFloat(withdrawInputText);
    var balanceInputText = document.getElementById("balance-total").textContent;
    var balanceValue = parseFloat(balanceInputText);
    if (isNaN(withdrawInputText) || withdrawInputText == "" || withdrawInputValue < 0) {
        alert("Please input numerical value");
    } else {
        if(withdrawInputValue > balanceValue) {
            alert("Your withdraw amount can't be greater than your total balance");
        } else {
            
            var withdrawText = document.getElementById("withdraw-total").textContent;
            var withdrawValue = parseFloat(withdrawText);
            var totalWithdraw = withdrawInputValue + withdrawValue;
            document.getElementById("withdraw-total").innerHTML = totalWithdraw;
            document.getElementById("withdraw-input").value = "";
            var finalAmount = balanceValue - withdrawInputValue;
            document.getElementById("balance-total").innerHTML = finalAmount;
        }
        
    }
}

var withdrawButton = document.getElementById("withdraw-button");
withdrawButton.addEventListener("click", withdrawAmount);
// Withdraw portion