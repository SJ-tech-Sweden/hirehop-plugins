document.addEventListener("DOMContentLoaded", function () {
  // Create Floating Action Button
  var fab = document.createElement("div");
  fab.id = "fab";
  fab.innerHTML = "<span>+</span>";
  document.body.appendChild(fab);

  // Floating Action Button Styles
  fab.style.position = "fixed";
  fab.style.bottom = "20px";
  fab.style.right = "20px";
  fab.style.backgroundColor = "#007bff";
  fab.style.color = "#fff";
  fab.style.width = "50px";
  fab.style.height = "50px";
  fab.style.borderRadius = "50%";
  fab.style.display = "flex";
  fab.style.alignItems = "center";
  fab.style.justifyContent = "center";
  fab.style.cursor = "pointer";
  fab.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
  fab.style.fontSize = "24px";
  fab.style.transition = "background-color 0.3s ease-in-out";

  // Add Hover Effect
  fab.addEventListener("mouseover", function () {
    fab.style.backgroundColor = "#0056b3";
  });

  fab.addEventListener("mouseout", function () {
    fab.style.backgroundColor = "#007bff";
  });

  // Redirect to hirehop.sj-tech.se
  fab.addEventListener("click", function () {
    window.location.href = "https://hirehop.sj-tech.se";
  });
});
