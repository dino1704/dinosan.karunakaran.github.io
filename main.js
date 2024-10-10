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