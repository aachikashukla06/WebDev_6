document.getElementById("tipForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const billAmount = Number(document.getElementById("billAmount").value);
  const service = Number(document.getElementById("service").value);
  const persons = Number(document.getElementById("persons").value);

  document.getElementById("billAmount").value = "";
  document.getElementById("service").value = "";
  document.getElementById("persons").value = "";

  const totalTip = billAmount * service;

  const tipPerPerson = totalTip / persons;

  document.getElementById("tipResult").textContent = tipPerPerson.toFixed(2);
});