const country = [
  {
    countryCode: "IN",
    countryName: "India",
    currencyCode: "INR",
  },
  {
    countryCode: "US",
    countryName: "USA",
    currencyCode: "USD",
  },
];

function loadSelectOption() {
  const Country1 = document.getElementById("country1");

  country.forEach((country) => {
    const OP = document.createElement("option");

    OP.value = country.countryCode + "_" + country.currencyCode;

    OP.innerText = country.countryName;

    Country1.appendChild(OP);
  });
}

loadSelectOption();

async function FetchFlag1() {
  const code = document.getElementById("country1").value;
  console.log(code);

  const countryCode = code.split("_")[0];
  const currencyCode = code.split("_")[1];

  //   console.log(countryCode, currencyCode);

  document.getElementById("country1Flag").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;

  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currencyCode.toLowerCase()}.json`,
  );

  const data = await response.json();

  console.log(data);
}