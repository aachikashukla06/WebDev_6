const kmInput = document.getElementById("kmInput");
const calculateBtn = document.getElementById("calculateBtn");
const errorMessage = document.getElementById("errorMessage");
const totalBill = document.getElementById("totalBill");
const breakdown = document.getElementById("breakdown");
const resultCard = document.getElementById("resultCard");

// Format currency
function formatCurrency(value) {
  return value.toLocaleString("en-IN", {
    maximumFractionDigits: 2
  });
}

// Validate input
function validateInput(value) {
  if (value === "") {
    return "Please enter kilometres.";
  }

  if (isNaN(value)) {
    return "Please enter a valid number.";
  }

  if (Number(value) < 0) {
    return "Please enter a non-negative number of kilometres.";
  }

  return "";
}

// Calculate fare
function calculateFare(km) {
  let remaining = km;

  let firstKm = Math.min(remaining, 10);
  let firstCost = firstKm * 11;
  remaining -= firstKm;

  let secondKm = Math.min(Math.max(remaining, 0), 40);
  let secondCost = secondKm * 10;
  remaining -= secondKm;

  let thirdKm = Math.max(remaining, 0);
  let thirdCost = thirdKm * 8;

  return {
    total: firstCost + secondCost + thirdCost,
    slabs: [
      { label: "First 10 km", km: firstKm, rate: 11, cost: firstCost },
      { label: "Next 40 km", km: secondKm, rate: 10, cost: secondCost },
      { label: "Beyond 50 km", km: thirdKm, rate: 8, cost: thirdCost }
    ]
  };
}

// Display breakdown
function displayBreakdown(slabs) {
  breakdown.innerHTML = "";

  slabs.forEach((slab) => {
    const div = document.createElement("div");

    div.classList.add("breakdown-item");

    div.innerHTML = `
      <div>
        <strong>${slab.label}</strong><br>
        ${slab.km} km × Rs.${slab.rate}
      </div>

      <div class="fw-bold">
        Rs. ${formatCurrency(slab.cost)}
      </div>
    `;

    breakdown.appendChild(div);
  });
}

// Button click
calculateBtn.addEventListener("click", () => {
  const value = kmInput.value.trim();

  const error = validateInput(value);

  if (error) {
    errorMessage.textContent = error;
    resultCard.classList.add("d-none");
    return;
  }

  errorMessage.textContent = "";

  const km = parseFloat(value);

  const result = calculateFare(km);

  totalBill.textContent =
    "Rs. " + formatCurrency(result.total);

  displayBreakdown(result.slabs);

  resultCard.classList.remove("d-none");
});