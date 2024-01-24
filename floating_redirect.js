document.addEventListener("DOMContentLoaded", function () {
  // Function to extract 'id' parameter from URL
  function getJobIdFromUrl() {
    var urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
  }

  // Get the 'id' parameter from the URL
  var jobId = getJobIdFromUrl();

  // Create Floating Action Button
  var fab = document.createElement("div");
  fab.id = "fab";
  fab.innerHTML = "<span>+</span>";
  document.body.appendChild(fab);

  // Create Action Buttons
  var soundButton = createActionButton("microphone", "onClickSound");
  var lightButton = createActionButton("light", "onClickLight");
  var videoButton = createActionButton("camcorder", "onClickVideo");

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

    // On the first click, reveal additional action buttons
    if (clickCount === 1) {
      fab.innerHTML = ""; // Clear the plus sign
      appendActionButton(soundButton);
      appendActionButton(lightButton);
      appendActionButton(videoButton);
    } else if (clickCount === 2) {
      // On the second click, open the link associated with jobId
      if (jobId) {
        window.location.href = "https://hirehop.sj-tech.se/projects/?job=" + jobId;
      } else {
        window.location.href = "https://hirehop.sj-tech.se";
      }
    }
  });

  // Function to create an action button
  function createActionButton(icon, clickFunction) {
    var actionButton = document.createElement("div");
    actionButton.classList.add("action-button");
    actionButton.innerHTML = "<span>" + icon + "</span>";
    actionButton.addEventListener("click", window[clickFunction]); // Bind click event
    return actionButton;
  }

  // Function to append an action button to the DOM
  function appendActionButton(button) {
    fab.appendChild(button);
  }

  // onClickSound function
  window.onClickSound = function () {
    console.log("Clicked on Sound");
    // You can perform additional actions here
  };

  // onClickLight function
  window.onClickLight = function () {
    console.log("Clicked on Light");
    // You can perform additional actions here
  };

  // onClickVideo function
  window.onClickVideo = function () {
    console.log("Clicked on Video");
    // You can perform additional actions here
  };
});
