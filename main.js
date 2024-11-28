document.getElementById('nameButton').addEventListener('click', function() {
  const userName = prompt("Please enter your name:");
  if (userName) {
    const greetingMessage = document.getElementById('greetingMessage');
    greetingMessage.style.display = 'block'; // Show the greeting message
    greetingMessage.textContent = `Hi ${userName}, welcome to my website!`; // Set the text
  }
});


// Function to change colour
function toggleColors() {
  const elements = document.querySelectorAll('.effect');
  console.log(elements); 
  
  elements.forEach((element) => {
    element.style.color = 'green'; 
  });
}



// Reset Colors Function
function resetColour() {
  const elements = document.querySelectorAll(".effect");
  
  elements.forEach(function (element) {
    element.style.color = ''; // Reset text color
  });

  document.body.style.backgroundColor = ''; // Reset background color
}

// Increase Text Size Function
function increaseTextSize() {
  const elements = document.querySelectorAll(".effect");

  elements.forEach(function (element) {
    const currentSize = window.getComputedStyle(element).fontSize;
    element.style.fontSize = (parseFloat(currentSize) + 2) + 'px'; // Increase font size
  });
}

// Decrease Text Size Function
function decreaseTextSize() {
  const elements = document.querySelectorAll(".effect");

  elements.forEach(function (element) {
    const currentSize = window.getComputedStyle(element).fontSize;
    element.style.fontSize = (parseFloat(currentSize) - 2) + 'px'; // Decrease font size
  });
}


  // Function to display alt text 
function showAltText(elementId) {
    const element = document.getElementById(elementId);
    let altText;
  
    // Making the alert 
    if (element.tagName === 'IMG') {
      altText = element.alt;
    } else if (element.tagName === 'VIDEO') {
      const description = document.getElementById('alt-' + elementId);
      description.style.display = 'block';
      return; 
    }
    alert(` ${altText}`);
  }

  //Making the buttons work for the video
  const video = document.getElementById("video1");
  
  function playPause()
  {
      if (video1.paused)
      {
          video1.play();
      } else
      {
          video1.pause();
      }
  }
 
  function makeBig() 
  {
      video1.width = 600;
      video1.height = 500;
  }

  function makeSmall() 
  {
      video1.width = 320;
      video1.height = 100;
  }

  function makeNormal() 
  {
      video1.width = 420;
      video1.height = 250;
  }

