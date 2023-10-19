const ctx = document.getElementById("myChart");
const chart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Total", "Deposit", "Withdraw"],
    datasets: [
      {
        label: "# Money",
        data: [12, 19, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// total

const depo = document.getElementById("depoBtn");

depo.addEventListener("click", () => {
  const displayDepo = parseFloat(
    document.getElementById("displayDepo").innerText
  );
  chart.data.datasets[0].data[1] = displayDepo;
  chart.update();
});
