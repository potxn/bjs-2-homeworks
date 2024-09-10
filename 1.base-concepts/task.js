"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;
  if (d < 0) {
    arr = [];
    } else if (d === 0) {
    arr = [-b / (2 * a)];
    } else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
    } 
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
    let range = percent / 100 / 12;
    let creditBody = amount - contribution;
    let monthAmount = creditBody * (coeff + (range / (((1 + range) ** countMonths) - 1)));
    let total = monthAmount * countMonths;
    let roundedTotal =  parseFloat(total.toFixed(2));
  
    return roundedTotal;
  }
  
  calculateTotalMortgage(percent, contribution, amount, countMonths);
