// FloatingActionButton.js
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css'; // Adjust the version if needed
document.head.appendChild(fontAwesomeLink);




document.addEventListener('DOMContentLoaded', function () {
    // Add CSS styles
    const styles = `
      .multi-action {
        display: inline-block;
        position: fixed;
        bottom: 20px;
        right: 20px;
        width: 56px;
        height: 56px;
      }
      
      .action-button {
        position: absolute;
        width: 56px;
        height: 56px;
        border-radius: 50%;
        border: 0;
        outline: 0;
        background: #3f873f;
        font-size: 24px;
        color: white;
        z-index: 2;
        box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        transition: all .3s;
      }
      
      .actions {
        position: absolute;
        list-style: none inside none;
        margin: 0 0 0 0;
        padding: 0;
        width: auto;
        float: left;
        background-color: transparent;
        top: 8px;
        left: 8px;
        z-index: 1;
        width: 40px;
        height: 40px;
        border-radius: 50%;
  
        li {
          position: absolute;
          display: block;
          width: 40px;
          height: 40px;
          line-height: 40px;
          border-radius: 50%;
          box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.16), 0 2px 5px 0 rgba(0, 0, 0, 0.26);
          margin: 0;
          background: #212121;
          color: #ffffff;
          transition: all .3s;
          transform: scale(.3);
  
          &:nth-child(1) {background: #ff9800;}
          &:nth-child(2) {background: #2196F3;}
          &:nth-child(3) {background: #bfaf1d;}
  
          a {
            background: inherit;
            color: inherit;
            display: block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            line-height: 40px;
            text-align: center;
          }
  
          &:active {
            box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2);
          }
        }
      }

      .action-button {
        &.active {
          box-shadow: 0 17px 50px 0 rgba(0, 0, 0, 0.19), 0 12px 15px 0 rgba(0, 0, 0, 0.24);
        }
        
          &.active ~ .actions {
  
            li {
                  transition: all .3s;
                  transform: scale(1);
  
                  &:nth-child(1) {margin-top: -56px;}
                  &:nth-child(2) {margin-top: -104px;}
                  &:nth-child(3) {margin-top: -152px;}
              }
          }
      }
  
      .action-button span {
          transition: all .3s;
      }
  
      .action-button.active:not(.no-rotate) span {
        transform: scale(1.2) rotate(-45deg);
      }
    `;

    // Function to extract 'id' parameter from URL
    function getJobIdFromUrl() {
        var urlParams = new URLSearchParams(window.location.search);
        return urlParams.get('id');
    }

    // Get the 'id' parameter from the URL
    var jobId = getJobIdFromUrl();
  
    // Create a style element and append it to the head
    const styleElement = document.createElement('style');
    styleElement.textContent = styles;
    document.head.appendChild(styleElement);
  
    // Create the multi-action container and append it to the body
    const multiActionContainer = document.createElement('div');
    multiActionContainer.classList.add('multi-action');
    if (jobId) {
        multiActionContainer.innerHTML = `
        <button class='action-button'><span class='fa fa-plus'></span></button>
        <ul class='actions'>
        <li><a href="https://hirehop.sj-tech.se/sound/?job=${jobId}" target="_blank"><span class='fa-solid fa-microphone'></span></a></li>
        <li><a href="https://hirehop.sj-tech.se/light/?job=${jobId}" target="_blank"><span class='fa-solid fa-lightbulb'></span></a></li>
        <li><a href="https://hirehop.sj-tech.se/video/?job=${jobId}" target="_blank"><span class='fa-solid fa-video'></span></a></li>
        </ul>
        `;
    } else {
        multiActionContainer.innerHTML = `
        <button class='action-button'><span class='fa fa-plus'></span></button>
        <ul class='actions'>
        <li><a href="https://hirehop.sj-tech.se" target="_blank"><span class='fa-solid fa-computer'></span></a></li>
        </ul>
        `;
    }
    
    document.body.appendChild(multiActionContainer);

    const fabButton = document.querySelector('.action-button');
    const fabOptions = document.querySelector('.actions');
    fabButton.addEventListener('click', function () {
    fabButton.classList.toggle('active');
    fabOptions.classList.toggle('active');
    });
  
    
  });
  

  
