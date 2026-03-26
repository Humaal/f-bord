// const increaseBtn = document.querySelector(".counter_button--increase");
// const decreaseBtn = document.querySelector(".counter_button--decrease");
// const resetBtn = document.querySelector(".counter_button--reset");
// const counterValue = document.querySelector(".counter_value");
// const container = document.querySelector(".counter"); // main div

// let count = 0;
// const MAX_LIMIT = 5;

// // ⭐ UI Update Function (modular)
// // function updateUI() {
// //     if (count >= MAX_LIMIT) {
// //         container.innerHTML = "<h2>Limit! Buy Pro for more 😎</h2>";
// //     } else {
// //         counterValue.textContent = count;
// //     }
// // }
// function updateUI() {
//     counterValue.textContent = count;
// }



// // function increase() {

// //     if (count === MAX_LIMIT) {
// //         // ⭐ jab already 5 ho aur user dubara click kare
// //         container.innerHTML = "<h2>Limit! Buy Pro for more 😎</h2>";
// //         return;
// //     }

// //     count++;
// //     updateUI();
// // }
// function increase() {

//     if (count === MAX_LIMIT) {
//         // ⭐ sirf heading change
//         document.querySelector(".counter_title").textContent = "Limit! Buy Pro 😎";

//         // ⭐ color change
//         container.classList.add("limit-reached");

//         return; // ❌ 6 nahi banega
//     }

//     count++;
//     counterValue.textContent = count;
// }
// // ⭐ Decrease
// function decrease() {
//     if (count > 0) {
//         count--;
//         updateUI();
//     }
// }

// // ⭐ Reset
// // function reset() {
// //     count = 0;
// //     location.reload(); // UI wapas normal
// // }
// function reset() {
//     count = 0;
//     counterValue.textContent = count;

//     document.querySelector(".counter_title").textContent = "Fancy Counter";
//     container.classList.remove("limit-reached");
// }

// // ⭐ Button Events
// increaseBtn.addEventListener("click", increase);
// decreaseBtn.addEventListener("click", decrease);
// resetBtn.addEventListener("click", reset);

// // ⭐ Keyboard Control
// document.addEventListener("keydown", function (e) {
//     if (e.key === "ArrowUp") {
//         increase();
//     }
//     if (e.key === "ArrowDown") {
//         decrease();
//     }
// });      





// increment and decrement 


const increaseButtonE1 = document.querySelector(".counter_button--increase");
const decreaseButtonE1 = document.querySelector(".counter_button--decrease");
const resetButtonE1 = document.querySelector(".counter_reset-button");
const counterValueE1 = document.querySelector(".counter_value");
const titleE1 = document.querySelector(".counter_title");
const container = document.querySelector(".counter");

let count = 0;

const MAX_LIMIT = 15;
const MIN_LIMIT = -15;

// ⭐ UI update
function updateUI() {
    counterValueE1.textContent = count;
}

// ⭐ main logic
function updateCounter(change) {

    // 👉 limit check (max)
    if (count === MAX_LIMIT && change === 1) {
        titleE1.textContent = "Limit! Buy Pro 😎";
        container.classList.add("limit-reached");
        return;
    }

    let newValue = count + change;

    // 👉 max limit
    if (newValue > MAX_LIMIT) {
        newValue = MAX_LIMIT;
    }

    // 👉 min limit (-15)
    if (newValue < MIN_LIMIT) {
        newValue = MIN_LIMIT;
    }

    count = newValue;
    updateUI();
}

// 🔼 Increase button
increaseButtonE1.addEventListener("click", () => updateCounter(1));

// 🔽 Decrease button (SPECIAL BUTTON)
decreaseButtonE1.addEventListener("click", () => updateCounter(-1));

// 🔄 Reset
resetButtonE1.addEventListener("click", function () {
    count = 0;
    updateUI();
    titleE1.textContent = "Fancy Counter";
    container.classList.remove("limit-reached");
});


// ⌨️ KEYBOARD CONTROL (IMPORTANT PART)
document.addEventListener("keydown", function (e) {

    // 👉 minus key OR ArrowDown = decrement
    if (e.key === "-" || e.key === "ArrowDown") {
        updateCounter(-1);
    }

    // 👉 baqi keys = increase
    else {
        updateCounter(1);
    }

});