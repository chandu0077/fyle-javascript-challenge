// input type to numbers
// function calculateTax() {
// aI
// eI
// aG
// tD
// tMAD = aI+eI-tD

// let taxPercentage;
// finalTax=0;
// tMAD > 8
// taxCalculate
// aG < 40
// taxPercentage = 30
// finalTax = taxPercent(taxPercentage, tMAD);
// aG >= 40 && aG < 60
// taxPercentage = 40
// finalTax = taxPercent(taxPercentage, tMAD);
// aG >= 60
// taxPercentage = 10
// finalTax = taxPercent(taxPercentage, tMAD);
// tMAD < 8
// nothing
// return finalTax;

// taxform
// successPopup
// if(finalTax) {
// taxform.addClass ='d-none'
// successPopup.removeClass='d-none'
// }
// }

// function taxPercent(taxPercentage, tMAD) {
// totalTax = taxPercentage/100 * (40-8)
// return totalTax;
// }

function calculateTax() {
  const annualIncome = document.getElementById("AnnualIncome").value;
  const extraIncome = document.getElementById("ExtraIncome").value;
  const dropdown = document.getElementById("AgeGroup");
  const ageGroup = dropdown.value;
  const totalDeductions = document.getElementById("Deductions").value;
  const taxform = document.getElementById("taxform");
  const successPopup = document.getElementById("successPopup");
  const finalAmount = document.getElementById("finalAmount");
  const formBtn = document.getElementById("formBtn");

  let totalMoneyAfterDeduction =
    parseInt(annualIncome) + parseInt(extraIncome) - parseInt(totalDeductions);
  console.log("after deduction", totalMoneyAfterDeduction);
  console.log("$$$$$", ageGroup);

  let taxPercentage;
  let finalTax = 0;

  if (totalMoneyAfterDeduction > 800000) {
    if (ageGroup === "< 40") {
      console.log("%%%%%", ageGroup);
      taxPercentage = 30;
      finalTax = taxPercent(taxPercentage, totalMoneyAfterDeduction);
    } else if (ageGroup === ">= 40 & < 60") {
      taxPercentage = 40;
      finalTax = taxPercent(taxPercentage, totalMoneyAfterDeduction);
    } else if (ageGroup === ">= 60") {
      taxPercentage = 10;
      finalTax = taxPercent(taxPercentage, totalMoneyAfterDeduction);
    }
  } else {
    // nothing
  }
  console.log("final tax", finalTax);
  if (finalTax) {
    taxform.classList.remove("d-block");
    taxform.classList.add("d-none");
    successPopup.classList.remove("d-none");
    // successPopup.classList.add("d-block");
    finalAmount.innerText = finalTax;
  }

  return finalTax;
}

function taxPercent(taxPercentage, totalMoneyAfterDeduction) {
  totalTax = (taxPercentage / 100) * (totalMoneyAfterDeduction - 800000);
  return totalTax;
}

function closeBtn() {
  //   if (finalTax) {
  taxform.classList.remove("d-none");
  taxform.classList.add("d-block");
  successPopup.classList.add("d-none");
  formBtn.reset();
  //   }
}
