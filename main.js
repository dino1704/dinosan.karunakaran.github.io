const nameButton = document.getElementById('nameButton');
const displayName = document.getElementById('displayName');

nameButton.addEventListener('click', () => {
    const name = prompt("Please enter your name:");
    if (name) {
        displayName.textContent = `Hello, ${name}! Welcome to the site.`;
    } else {
        displayName.textContent = "You didn't enter a name.";
    }
})

function toggleImage(container) {
    const img = container.querySelector('img');
    img.classList.toggle('enlarged');
}

function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(e) {
    if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
      if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
      }
    }
  }

 //Toggle text colours for better accessibility 
 let isAccessibleScheme = false;

 function toggleColors() {
   const body = document.body;

   // Define accessible and default colors
   const accessibleBackgroundColor = "#f0f0e4";
   const accessibleTextColor = "#003366";
   const defaultBackgroundColor = "rgb(139, 164, 172)";
   const defaultTextColor = "black";

   if (!isAccessibleScheme) {
     // Apply accessible colors to the body background and all text elements
     body.style.backgroundColor = accessibleBackgroundColor;
     document.querySelectorAll("h1, h2, h3,h4,h5,h6,ol,ul1,ul, p, span, div,nav,p1,navbar").forEach(element => {
       element.style.color = accessibleTextColor;
     });
   } else {
     // Revert to default colors
     body.style.backgroundColor = defaultBackgroundColor;
     document.querySelectorAll("h1, h2, h3,h4,h5,h6,ol,ul,ul1, p, span, div,nav,p1,navbar").forEach(element => {
       element.style.color = defaultTextColor;
     });
   }

   isAccessibleScheme = !isAccessibleScheme;
 }

//Increase text size for visibility
let isTextEnlarged = false;

  function increaseTextSize() {
    const body = document.body;

    if (!isTextEnlarged) {
      // Apply enlarged font size
      body.style.fontSize = "30px"; 
    } else {
      // Revert to default font size
      body.style.fontSize = "18px"; 
    }

    // Toggle the enlargement state
    isTextEnlarged = !isTextEnlarged;
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
  window.onload = function(){myVideo=document.getElementById("video1");}
  
  function playPause()
  {
      if (myVideo.paused)
      {
          myVideo.play();
      } else
      {
          myVideo.pause();
      }
  }
 
  function makeBig() 
  {
      myVideo.width = 600;
      myVideo.height = 500;
  }

  function makeSmall() 
  {
      myVideo.width = 320;
      myVideo.height = 100;
  }

  function makeNormal() 
  {
      myVideo.width = 420;
      myVideo.height = 250;
  }
