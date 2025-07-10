document.addEventListener('DOMContentLoaded', function() {
  // Toggle between login and signup forms
  const loginToggle = document.getElementById('login-toggle');
  const signupToggle = document.getElementById('signup-toggle');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');

  // Make sure login and signup forms are available in the DOM
  if (loginForm && signupForm) {
    // Event Listener for Login Toggle
    loginToggle.addEventListener('click', function() {
      loginForm.style.display = 'block';
      signupForm.style.display = 'none';
      loginToggle.classList.add('active');
      signupToggle.classList.remove('active');
    });

    // Event Listener for Signup Toggle
    signupToggle.addEventListener('click', function() {
      loginForm.style.display = 'none';
      signupForm.style.display = 'block';
      signupToggle.classList.add('active');
      loginToggle.classList.remove('active');
    });
  }

  // Form submission handlers
  const loginFormElement = document.getElementById('login-form');
  const signupFormElement = document.getElementById('signup-form');

  if (loginFormElement) {
    loginFormElement.addEventListener('submit', function(e) {
      e.preventDefault();
      const email = document.getElementById('login-email').value;
      const password = document.getElementById('login-password').value;
      
      // Add your login logic here
      console.log('Login attempt:', email);
      alert('Login functionality would be implemented here');
    });
  }

  if (signupFormElement) {
    signupFormElement.addEventListener('submit', function(e) {
      e.preventDefault();
      const password = document.getElementById('signup-password').value;
      const confirmPassword = document.getElementById('signup-confirm-password').value;
      
      if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
      }
      
      // Add your signup logic here
      console.log('Signup attempt');
      alert('Signup functionality would be implemented here');
    });
  }

  // Add ripple effect to buttons
  document.querySelectorAll('.ripple').forEach(button => {
    button.addEventListener('click', function(e) {
      const x = e.clientX - e.target.getBoundingClientRect().left;
      const y = e.clientY - e.target.getBoundingClientRect().top;
      
      const ripple = document.createElement('span');
      ripple.classList.add('ripple-effect');
      ripple.style.left = `${x}px`;
      ripple.style.top = `${y}px`;
      
      this.appendChild(ripple);
      
      setTimeout(() => {
        ripple.remove();
      }, 1000);
    });
  });
});
