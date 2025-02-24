document.addEventListener('DOMContentLoaded', () => {
    let investment = document.getElementById("investment");
    let duration = document.getElementById("duration");
    let inputDurationRange = document.getElementById("input_duration_range");
    let rate = document.getElementById("rate");
    let inputRateReturnRange = document.getElementById("input_rate_return_range");
    let resultDiv = document.getElementById("result");
    let canvas = document.getElementById("pieChart");
    let ctx = canvas.getContext("2d");

    // Set initial values
    inputDurationRange.value = duration.value = "40";
    inputRateReturnRange.value = rate.value = "1";
    investment.value = "500";

    function syncInputs(source, target) {
        source.addEventListener("input", () => {
            let value = parseFloat(source.value) || 0;
            target.value = value;
            calculateLumpSum();
        });
    }

    syncInputs(inputRateReturnRange, rate);
    syncInputs(rate, inputRateReturnRange);
    syncInputs(inputDurationRange, duration);
    syncInputs(duration, inputDurationRange);
    syncInputs(investment, investment);

    function calculateLumpSum() {
        let P = parseFloat(investment.value) || 0; // Initial investment
        let r = parseFloat(rate.value) / 100; // Convert % to decimal
        let t = parseFloat(duration.value) || 0; // Duration in years
        let n = 1; // Annual compounding (change to 12 for monthly)

        if (P <= 0 || t <= 0 || isNaN(P) || isNaN(r) || isNaN(t)) {
            resultDiv.innerText = "Please enter valid investment, rate, and duration.";
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            return;
        }

        // ✅ Correct compound interest formula
        let A = P * Math.pow(1 + (r / n), n * t);

        resultDiv.innerText = `Future Value: $${A.toFixed(2)}`;

        animatePieChart(P, A - P);
    }

    function animatePieChart(invested, returns) {
        let total = invested + returns;
        let data = [returns, invested];
        let colors = ["#f39c12", "#3498db"];

        let animationProgress = 0;
        let animationSpeed = 0.04; // Speed of animation

        // Ensure canvas updates properly
        canvas.width = canvas.offsetWidth;
        canvas.height = canvas.offsetWidth;
        let centerX = canvas.width / 2;
        let centerY = canvas.height / 2;
        let radius = canvas.width / 2;

        function drawFrame() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let currentAngle = 0;

            data.forEach((value, index) => {
                let sliceAngle = (value / total) * 2 * Math.PI * animationProgress;
                ctx.beginPath();
                ctx.moveTo(centerX, centerY);
                ctx.arc(centerX, centerY, radius, currentAngle, currentAngle + sliceAngle);
                ctx.closePath();
                ctx.fillStyle = colors[index];
                ctx.fill();

                currentAngle += sliceAngle;
            });

            if (animationProgress < 1) {
                animationProgress += animationSpeed;
                requestAnimationFrame(drawFrame);
            }
        }

        animationProgress = 0; // Reset animation progress
        drawFrame();
    }

    // Initial calculation
    calculateLumpSum();
});
