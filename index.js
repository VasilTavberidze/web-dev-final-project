// References to elements
const loginForm = document.getElementById('login');
const registerForm = document.getElementById('register');
const showRegisterFormLink = document.getElementById('showRegisterForm');
const showLoginFormLink = document.getElementById('showLoginForm');
const userActions = document.getElementById('user-actions');
const logoutDiv = document.getElementById('logout');
const logoutButton = document.getElementById('logoutButton');
const regUsername = document.getElementById('regUsername');
const regPassword = document.getElementById('regPassword');

// Event listener for showing the registration form
showRegisterFormLink.addEventListener('click', function(event) {
    event.preventDefault();
    loginForm.style.display = 'none';
    registerForm.style.display = 'block';
});

// Event listener for showing the login form
showLoginFormLink.addEventListener('click', function(event) {
    event.preventDefault();
    registerForm.style.display = 'none';
    loginForm.style.display = 'block';
});

// Handle login
loginForm.addEventListener('submit', function(event) {
    event.preventDefault();
    // Hide login and user actions, show logout button
    loginForm.style.display = 'none';
    registerForm.style.display = 'none';
    userActions.style.display = 'none';
    logoutDiv.style.display = 'block';
    
    // Show comments and contact sections
    document.getElementById('commentsSection').style.display = 'block';
    document.getElementById('contactSection').style.display = 'block';
});

// Handle registration
registerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    if (validateRegistration()) {
        // Hide register form, show login form
        registerForm.style.display = 'none';
        loginForm.style.display = 'block';
        alert('Registration successful! You can now log in.');
    }
});

// Handle logout
logoutButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Hide logout, show user actions and login form
    logoutDiv.style.display = 'none';
    userActions.style.display = 'block';
    loginForm.style.display = 'block';
    registerForm.style.display = 'none';
    
    // Hide comments and contact sections
    document.getElementById('commentsSection').style.display = 'none';
    document.getElementById('contactSection').style.display = 'none';
});


// validation for registration
function validateRegistration() {
    if (regUsername.value.length < 5) {
        alert('Username must be at least 5 characters long.');
        return false;
    }
    if (regPassword.value.length < 8) {
        alert('Password must be at least 8 characters long.');
        return false;
    }
    return true;
}
let currentSlideIndex = 0;

function moveSlide(direction) {
    const slides = document.querySelectorAll('.gallery-item');
    const totalSlides = slides.length;
    
    // Calculate the new slide index
    let newSlideIndex = currentSlideIndex + direction;
    
    // Loop back around if at start or end
    if (newSlideIndex >= totalSlides) newSlideIndex = 0;
    if (newSlideIndex < 0) newSlideIndex = totalSlides - 1;
    
    // Move the gallery container
    const gallery = document.querySelector('.gallery');
    gallery.style.transform = `translateX(-${newSlideIndex * 100}%)`;
    
    // Update the current slide index
    currentSlideIndex = newSlideIndex;
}

document.getElementById('submitComment').addEventListener('click', function() {
    const commentInput = document.getElementById('commentInput');
    const commentsList = document.getElementById('commentsList');

    // Create a new comment element
    const newComment = document.createElement('div');
    newComment.className = 'comment';
    newComment.textContent = commentInput.value;
    
    // Append the new comment to the comments list
    commentsList.appendChild(newComment);
    
    // Clear the input
    commentInput.value = '';
});

