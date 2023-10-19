const withdRawBtn = document.getElementById("withdRawBtn");

const withdrawCalc = () => {
  // getting input from User
  const userWithdrawAmount = parseFloat(
    document.getElementById("userWithdrawAmount").value
  );
  console.log(userWithdrawAmount);
  if (isNaN(userWithdrawAmount)) {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="">Why do I have this issue?</a>',
    });
  } else {
    document.getElementById("userWithdrawAmount").value = "";

    const displayWithdraw = parseFloat(
      document.getElementById("displayWithdraw").innerText
    );
    const totalWithdraw = displayWithdraw + userWithdrawAmount;

    document.getElementById("displayWithdraw").innerText = totalWithdraw;

    const totalDisplay = parseFloat(
      document.getElementById("totalDisplay").innerText
    );

    const updateTotal = totalDisplay - userWithdrawAmount;
    document.getElementById("totalDisplay").innerText = updateTotal;
  }
};
withdRawBtn.addEventListener("click", withdrawCalc);
