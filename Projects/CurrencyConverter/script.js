const c1 = document.getElementById("country1"),
      c2 = document.getElementById("country2"),
      f1 = document.getElementById("flag1"),
      f2 = document.getElementById("flag2"),
      amt = document.getElementById("orgAmount"),
      result = document.getElementById("newAmount"),
      rateInfo = document.getElementById("rateInfo"),
      btn = document.getElementById("convertBtn"),
      loadTxt = document.getElementById("loadingText");


// Load Countries
fetch("codes.json")
.then(res => res.json())
.then(data => {

  data.forEach(c => {

    if (!c.Currency_Code) return;

    let val = `${c.Currency_Code.toLowerCase()},${c.Country_Code}`;

    c1.innerHTML += `<option value="${val}">${c.Country}</option>`;
    c2.innerHTML += `<option value="${val}">${c.Country}</option>`;
  });

  c1.value = "usd,US";
  c2.value = "inr,IN";

  updateFlag(c1, f1);
  updateFlag(c2, f2);
});


// Update Flag
function updateFlag(select, flag) {

  let code = select.value.split(",")[1];

  flag.src = `https://flagsapi.com/${code}/flat/64.png`;
}


// Dropdown Change
c1.onchange = () => updateFlag(c1, f1);
c2.onchange = () => updateFlag(c2, f2);


// Convert Currency
btn.onclick = async () => {

  if (!c1.value || !c2.value || amt.value <= 0)
    return alert("Please fill all fields correctly");

  loadTxt.innerHTML =
    `<div class="spinner-border spinner-border-sm"></div> Loading...`;

  let amount = +amt.value;

  let from = c1.value.split(",")[0];
  let to = c2.value.split(",")[0];

  // Same Currency
  if (from === to) {

    result.innerText =
      `${amount.toFixed(2)} ${to.toUpperCase()}`;

    loadTxt.innerHTML = "";

    return;
  }

  // API Fetch
  let res = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${from}.json`
  );

  let data = await res.json();

  let rate = data[from][to];

  let finalAmount = amount * rate;

  result.innerText =
    `${finalAmount.toFixed(2)} ${to.toUpperCase()}`;

  rateInfo.innerText =
    `1 ${from.toUpperCase()} = ${rate.toFixed(2)} ${to.toUpperCase()}`;

  loadTxt.innerHTML = "";
};


// Swap Button
document.getElementById("swapBtn").onclick = () => {

  [c1.value, c2.value] = [c2.value, c1.value];

  updateFlag(c1, f1);
  updateFlag(c2, f2);

  if (amt.value) btn.click();
};