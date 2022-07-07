
const nameEl = document.querySelector("#name");
const weightEl = document.querySelector("#weight");
const heightEl = document.querySelector("#height");
const calcEl = document.querySelector("#calc");
const bmiEl = document.querySelector("#result .bmi");

console.log(nameEl, weightEl, heightEl, calcEl);

calcEl.addEventListener("click", () => {
    let name=nameEl.value;
    let weight = Number(weightEl.value);
    let height = Number(heightEl.value);

/*     if (isNaN(weight) || isNaN(height)) {
        alert("輸入錯誤!");
        return;
    }
 */
    let bmi = getBmi(height, weight);

    if (bmi == Infinity || isNaN(bmi)) {
        document.querySelector("#result .bmi").innerText = "";
        bmiEl.innerText = "輸入錯誤!";
        //alert("輸入錯誤!");
        return;
    }

    //console.log(weight);
/*     if (isNaN(bmi)) {
        alert("輸入錯誤!");
        return;
    }
 */    
    //alert(`${name} bmi=${bmi}`);
    console.log(bmi);
    //document.querySelector("#result .bmi").innerText = bmi;
    bmiEl.innerText=bmi;
});


function getBmi(height, weight, point = 2) {
    return (weight / (height / 100) ** 2).toFixed(point);
}
