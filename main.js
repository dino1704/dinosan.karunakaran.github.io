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

  function submitForm() {
    // Getting values from each form field
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    const subscribe = document.querySelector('input[name="subscribe"]').checked;
    const country = document.getElementById('country').value;
    const date = document.getElementById('date').value;
    const age = document.getElementById('age').value;

    // Creating an object to store form data
    const formData = {
        name,
        email,
        comments,
        satisfaction,
        subscribe,
        country,
        date,
        age,
    };

    // Saving the form data object in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Your feedback has been submitted!');
}