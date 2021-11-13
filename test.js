'use strict';

const calculateBtn = document.querySelector(".button--new");

const modal = document.querySelector(".modal");
const closeBtn = document.querySelector(".delete");
const okBtn = document.querySelector(".okbtn");


const startDepoInp = document.querySelector('.input-depo');
const percentInp = document.querySelector('.input-percent');
const targetInp = document.querySelector('.input-target');

const titleDepo = document.querySelector('.title-depo');
const titlePercent = document.querySelector('.title-percent');
const titleCount = document.querySelector('.title-count');
const titleProfit = document.querySelector('.title-profit');

let totalCount = 0;
let bufer = 0;

function calculate() {
  let depo = +startDepoInp.value;
  let percent = +percentInp.value / 100;
  let target = +targetInp.value;

  bufer = depo;

  while (bufer <= target) {
    const value = Math.trunc(bufer * percent);
    bufer += value;
    totalCount++;
    console.log(value, bufer);
  }

  console.log("Total signal -" , totalCount, "Total amount -", bufer, "Clear profit -", bufer - depo);

  return totalCount;
}

calculateBtn.addEventListener('click', () => {
  if (startDepoInp.value && percentInp.value && targetInp.value) {
    calculate();

    titleDepo.textContent = `$${startDepoInp.value}`;
    titlePercent.textContent = `${percentInp.value}%`;
    titleCount.textContent = totalCount;
    titleProfit.textContent = bufer - startDepoInp.value;

    totalCount = 0;
    bufer = 0;
    
  } else {
    modal.classList.toggle("is-active");
  }
})

closeBtn.addEventListener('click', () => {
    modal.classList.remove("is-active");
});

okBtn.addEventListener('click', () => {
  modal.classList.remove("is-active");
});