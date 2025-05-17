"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let d = Math.pow(b, 2) - 4 * a * c;
  
  if (d < 0) {
    arr = [];
  }

  if (d === 0) {
    arr = [-b / (2 * a)];
  }
  
  if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
  }
  
  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let annualRate = percent / 100;
  let monthlyRate = annualRate / 12;
  let credit = amount - contribution;
  let monthlyPayment = credit * (monthlyRate + (monthlyRate / (Math.pow(1 + monthlyRate, countMonths) - 1)));
  let payment = Number((monthlyPayment * countMonths).toFixed(2));
  
  return payment;
}