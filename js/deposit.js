const depobtn = document.getElementById("depoBtn");

const depositCalc = () => {
  // getting input from User
  const userDepoAmount = parseFloat(
    document.getElementById("userDepoAmount").value
  );

  // Empty Input Field
  document.getElementById("userDepoAmount").value = "";

  // gettig data from deposit Display
  const displayDepo = parseFloat(
    document.getElementById("displayDepo").innerText
  );
  const newDisplay = displayDepo + userDepoAmount;
  document.getElementById("displayDepo").innerText = newDisplay;

  const totalDisplay = parseFloat(
    document.getElementById("totalDisplay").innerText
  );
  const updateTotal = userDepoAmount + totalDisplay;
  document.getElementById("totalDisplay").innerText = updateTotal;
};

depobtn.addEventListener("click", depositCalc);
