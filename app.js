// document.getElementById("firstClassAdd").addEventListener("click",function(){
//     const firstClassInput = document.getElementById("firstClassData").value;
//     const firstClassValue = parseInt(firstClassInput);
//     const newValue = firstClassValue + 1;
//     document.getElementById("firstClassData").value = newValue;
// })
numberCalculation("firstClassAdd","firstClassData",true);
numberCalculation("firstClassLess","firstClassData",false);
numberCalculation("economyClassAdd","economyClassData",true);
numberCalculation("economyClassLess","economyClassData",false);

function numberCalculation(select, currentValue, isIncrease){
    document.getElementById(select).addEventListener("click",function(){
        const firstClassValue = getValueNumber(currentValue, "inputField");
        let newValue = firstClassValue;
        if(isIncrease == true){
         newValue = firstClassValue + 1;
        }
        if(isIncrease == false && newValue > 0){
         newValue = firstClassValue - 1;
        }
        document.getElementById(currentValue).value = newValue;

        subTotal();
    })
}


function subTotal(){
    const firstClassNumber = getValueNumber("firstClassData","inputField");
    const economyClassNumber =  getValueNumber("economyClassData","inputField");
    const firstClassCost = firstClassNumber * 150;
    const economyClassCost = economyClassNumber * 100;
    const  subTotal = firstClassCost + economyClassCost;
    document.getElementById("subTotal").innerText ="$"+ subTotal;
    const tax = subTotal * 0.10;
    document.getElementById("tax").innerText ="$"+ tax;
    const grandTotal = tax + subTotal;
    document.getElementById("grandTotal").innerText ="$"+ grandTotal;
}


function getValueNumber(Value,type){
    let valueString ='';
    if(type == "inputField"){
    valueString = document.getElementById(Value).value;
    }
    else{
    valueString = document.getElementById(Value).innerText;
    }
const valueNumber = parseInt(valueString);
return valueNumber;
}
function message(){
    alert("You have successfully booked ticket worth : "+document.getElementById("grandTotal").innerText );
}