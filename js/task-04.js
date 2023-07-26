const refs = {
    decrementBtn: document.querySelector('[data-action="decrement"]'),
    incrementBtn: document.querySelector('[data-action="increment"]'),
    counter: document.querySelector("#value"),
};

let counterValue = 0;
refs.decrementBtn.addEventListener("click", makeNegativeCounter);
refs.incrementBtn.addEventListener("click", makePositiveCounter);

function makeNegativeCounter() {
    counterValue -= 1;
    refs.counter.textContent = counterValue;
}

function makePositiveCounter() {
    counterValue += 1;
    refs.counter.textContent = counterValue;
}
