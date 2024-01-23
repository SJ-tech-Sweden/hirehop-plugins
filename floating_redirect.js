document.addEventListener("DOMContentLoaded", function () {
  // Create Floating Action Button
  var fab = document.createElement("div");
  fab.id = "fab";
  fab.innerHTML = "<span>+</span>";
  document.body.appendChild(fab);

  // Create Link Icon
  var linkIcon = document.createElement("a");
  linkIcon.href = "https://hirehop.sj-tech.se";
  linkIcon.target = "_blank";
  linkIcon.innerHTML = "<span>&#128279;</span>"; // Unicode for link icon
  linkIcon.style.display = "none"; // Initially hide the link icon

  // Track the click count
  var clickCount = 0;

  // Floating Action Button Styles
  fab.style.position = "fixed";
  fab.style.bottom = "20px";
  fab.style.right = "20px";
  fab.style.width = "50px";
  fab.style.height = "50px";
  fab.style.backgroundColor = "#007bff";
  fab.style.borderRadius = "50%";
  fab.style.display = "flex";
  fab.style.alignItems = "center";
  fab.style.justifyContent = "center";
  fab.style.cursor = "pointer";
  fab.style.boxShadow = "0px 0px 10px rgba(0, 0, 0, 0.2)";
  fab.style.transition = "background-color 0.3s ease-in-out";

  // Add Hover Effect
  fab.addEventListener("mouseover", function () {
    fab.style.backgroundColor = "#0056b3";
  });

  fab.addEventListener("mouseout", function () {
    fab.style.backgroundColor = "#007bff";
  });

  // Handle Click on Floating Action Button
  fab.addEventListener("click", function () {
    clickCount++;

    // On the first click, show the link icon
    if (clickCount === 1) {
      fab.innerHTML = ""; // Clear the plus sign
      linkIcon.style.display = "inline"; // Show the link icon
      fab.appendChild(linkIcon); // Append the link icon to the button
    } else if (clickCount === 2) {
      // On the second click, open the link in a new tab
      window.open(linkIcon.href, "_blank");
    }
  });
});
