window.addEventListener('load', () => {
    const calculateButton = document.querySelector(".confirm-button");
    calculateButton.addEventListener('click', calculate);

    // Gets the value from inputs and calls the functions that calculate all the data.
    function calculate() {
        const startWeight = document.querySelector(".start-weight-input").value;
        const goalWeight = document.querySelector(".goal-weight-input").value;
        const calorieIntake = document.querySelector(".calorie-intake-input").value;
        const caloriesBurned = document.querySelector(".calories-burned-input").value;
        const poundsOrkg = document.querySelector(".check-box").checked;
        console.log(poundsOrkg);

        DailyWeight(startWeight, calorieIntake, caloriesBurned, poundsOrkg);
        EndGoalWeight(startWeight, goalWeight, calorieIntake, caloriesBurned, poundsOrkg);
    }
})

// Formats numbers
function numberFormat(num) {
    const formatedNumber = num.toLocaleString("en-US");
    return formatedNumber;
}

// Calculates and Displays the data
function DailyWeight(startWeight, calorieIntake, calorieBurned, poundsOrkg) {
    const start_weight = document.getElementById("start-weight");
    const daily_cals_consumed = document.getElementById("cals-consumed-daily");
    const daily_cals_burned = document.getElementById("cals-burned-daily");
    const daily_cal_deficit = document.getElementById("cals-deficit-daily");
    const daily_weight_loss = document.getElementById("weight-lost-daily");


    if (poundsOrkg == false) {
        start_weight.innerHTML = startWeight + " lbs";
        const weightLossCalculation = (calorieBurned - calorieIntake) / 3500;
        daily_weight_loss.innerHTML = weightLossCalculation.toFixed(2) + " lbs";
    } else {
        start_weight.innerHTML = (startWeight / 2.205).toFixed(1) + " kg";
        const weight_loss_calculation = (calorieBurned - calorieIntake) / 3500;
        daily_weight_loss.innerHTML = (weight_loss_calculation / 2.205).toFixed(1) + " kg";
    }

    daily_cals_consumed.innerHTML = numberFormat(calorieIntake) + " cals";
    daily_cals_burned.innerHTML = numberFormat(calorieBurned) + " cals";
    daily_cal_deficit.innerHTML = numberFormat(calorieBurned - calorieIntake) + " cals";


}

// Calculates and Displays the data
function EndGoalWeight(startWeight, goalWeight, calorieIntake, caloriesBurned, poundsOrkg) {
    const goal_weight = document.getElementById("end-weight");
    const goal_cals_consumed = document.getElementById("cals-consumed-goal");
    const goal_cals_burned = document.getElementById("cals-burned-goal");
    const goal_cal_deficit = document.getElementById("cals-deficit-goal");
    const total_weight_loss = document.getElementById("weight-lost-goal");
    const total_time = document.getElementById("days-to-lose-weight");

    if (poundsOrkg == false) {
        goal_weight.innerHTML = goalWeight + " lbs";
        total_weight_loss.innerHTML = (startWeight - goalWeight).toFixed(1) + " lbs";
    } else {
        goal_weight.innerHTML = (goalWeight / 2.205).toFixed(1) + " kg";
        total_weight_loss.innerHTML = ((startWeight - goalWeight) / 2.205).toFixed(1) + " kg";
    }

    const totaldaysto = Math.floor((startWeight - goalWeight) / ((caloriesBurned - calorieIntake) / 3500));

    total_time.innerHTML = totaldaysto + " Days";
    goal_cals_consumed.innerHTML = numberFormat(calorieIntake * totaldaysto) + " cals";
    goal_cals_burned.innerHTML = numberFormat(caloriesBurned * totaldaysto) + " cals";
    goal_cal_deficit.innerHTML = numberFormat((caloriesBurned - calorieIntake) * totaldaysto) + " cals";

}