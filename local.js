function submitForm() {
    // Getting values from each form field
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const comments = document.getElementById('comments').value;
    const satisfaction = document.querySelector('input[name="satisfaction"]:checked').value;
    const rating = document.getElementById('rating').value;
    const date = document.getElementById('date').value;
    const employment = document.getElementById('Employment Status').value;

    // Creating an object to store form data
    const formData = {
        name,
        email,
        comments,
        satisfaction,
        rating,
        date,
        employment,
    };

    // Saving the form data object in local storage
    localStorage.setItem('formData', JSON.stringify(formData));
    alert('Your feedback has been submitted!');
}