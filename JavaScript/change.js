// Year footer
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("copyright-name").textContent = "MEMBER";

// Flatpickr Init
flatpickr("#full-calendar", {
    inline: true,
    mode: "range",
    dateFormat: "Y-m-d"
  });

 
// Counter Graph (Line Chart)
const counterCtx = document.getElementById("counterChart").getContext("2d");
new Chart(counterCtx, {
  type: "line",
  data: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [{
      label: "Users",
      data: [150, 200, 180, 220, 170],
      borderColor: "#17a2b8",
      backgroundColor: "rgba(23, 162, 184, 0.2)",
      tension: 0.4
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } }
  }
});

// Glass Morphic Bar Graph
const barCtx = document.getElementById("barGraph").getContext("2d");
new Chart(barCtx, {
  type: "bar",
  data: {
    labels: ["Login", "Profile", "Upload", "Search", "Logout"],
    datasets: [{
      label: "Activity",
      data: [40, 55, 30, 70, 45],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
        "rgba(75, 192, 192, 0.6)",
        "rgba(153, 102, 255, 0.6)"
      ],
      borderRadius: 15,
      barThickness: 25
    }]
  },
  options: {
    responsive: true,
    plugins: { legend: { display: false } },
    scales: {
      y: { beginAtZero: true }
    }
  }
});




  // Show/hide the scroll button
window.onscroll = function() {
    const btn = document.getElementById("scrollTopBtn");
    btn.style.display = (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) ? "block" : "none";
  };
  
  // Scroll to top on click
  document.getElementById("scrollTopBtn").onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  