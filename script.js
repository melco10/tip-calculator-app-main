const billInput = document.getElementById('bill');
const pplInput = document.getElementById('numOfPPL');
const custInpput = document.getElementById('custom-tip');
const resetBTN = document.getElementById('resetBTN');
const displayTotal = document.getElementById("tip-total");
const totalPerson = document.getElementById("tip-person");

let totalBill = 0; // Initialize with a default value
let totalPPL = 0; // default PPl value
let tipPercent = 0; // Default tip percentage

function tip5() {
  tipPercent = 0.05;
  calcRESULT();
}

function tip10() {
  tipPercent = 0.10;
  calcRESULT();
}

function tip15() {
  tipPercent = 0.15;
  calcRESULT();
}

function tip25() {
  tipPercent = 0.25;
  calcRESULT();
}

function tip50() {
  tipPercent = 0.50;
  calcRESULT();
}

function calcRESULT(){
  
  let personTip = (tipPercent * totalBill) / totalPPL;
  let totaltipperson = (totalBill + (tipPercent * totalBill)) / totalPPL;

  if (!isNaN(totalBill) && !isNaN(totalPPL) && totalPPL !== 0)
  {
    resetBTN.classList.add('active-btn');
    resetBTN.style.cursor = 'pointer';
    
    displayTotal.innerHTML = personTip.toFixed(2);
    totalPerson.innerHTML = totaltipperson.toFixed(2);
  }
  
}




billInput.addEventListener('input', () => {
  let warntxt1 = document.getElementById('warn-txt');
  totalBill = parseFloat(billInput.value)
  if (!isNaN(totalBill)) {
    warntxt1.style.opacity = '0';
    billInput.classList.remove('warnInput');         
  }
  else{
    warntxt1.style.opacity = '1';
    billInput.classList.add('warnInput');
  }
});

pplInput.addEventListener('input', () => {
  let warntxt2 = document.getElementById('warn-txt2');
  totalPPL = parseInt(pplInput.value)
  if (!isNaN(totalPPL)) {
    warntxt2.style.opacity = '0';
    pplInput.classList.remove('warnInput');
  }
  else{
    warntxt2.style.opacity = '1';
    pplInput.classList.add('warnInput');
  }
});

custInpput.addEventListener('input', function customTIP(){
  const inputValue = parseFloat(custInpput.value);
  if  (!isNaN(inputValue)){
    tipPercent = inputValue / 100;
    calcRESULT();
  }
}) 

resetBTN.addEventListener('click', function(){
    totalBill = 0; // Initialize with a default value
    totalPPL = 0; // default PPl value
    tipPercent = 0; // Default tip percentage\
    billInput.value = "";
    billInput.innerHTML = "";
    pplInput.value = "";
    pplInput.innerHTML = "";
    custInpput.value = "";
    custInpput.innerHTML = "";
    displayTotal.innerHTML = `0.00`;
    totalPerson.innerHTML = `0.00`;
    resetBTN.classList.remove('active-btn');
    resetBTN.style.cursor = 'not-allowed';
})