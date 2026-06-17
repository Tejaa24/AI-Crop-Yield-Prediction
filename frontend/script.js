async function predictYield() {
    let rainfall = document.getElementById("rainfall").value;
    let temperature = document.getElementById("temperature").value;
    let soil_quality = document.getElementById("soil_quality").value;

    let response = await fetch("http://127.0.0.1:5000/predict", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            rainfall: Number(rainfall),
            temperature: Number(temperature),
            soil_quality: Number(soil_quality)
        })
    });

    let data = await response.json();
    document.getElementById("result").innerText =
        "Predicted Yield: " + data.predicted_yield;
}