 // Toggle mobile navigation
 const hamburger = document.querySelector('.hamburger');
 const nav = document.querySelector('nav');
 const overlay = document.querySelector('.overlay');
 
 hamburger.addEventListener('click', function() {
     hamburger.classList.toggle('active');
     nav.classList.toggle('active');
     overlay.classList.toggle('active');
 });
 
 overlay.addEventListener('click', function() {
     hamburger.classList.remove('active');
     nav.classList.remove('active');
     overlay.classList.remove('active');
 });
 
 // Role selector
 const roleOptions = document.querySelectorAll('.role-option');
 
 roleOptions.forEach(option => {
     option.addEventListener('click', function() {
         // Remove active class from all options
         roleOptions.forEach(o => o.classList.remove('active'));
         
         // Add active class to clicked option
         this.classList.add('active');
         
         // You can store the selected role in a hidden input or variable
         const selectedRole = this.getAttribute('data-role');
         console.log('Selected role:', selectedRole);
         
         // Optional: Change button text based on role
         const loginBtn = document.querySelector('.login-btn');
         loginBtn.textContent = `Sign In as ${selectedRole.charAt(0).toUpperCase() + selectedRole.slice(1)}`;
     });
 });
 
 // Default to student role selected
 document.querySelector('[data-role="student"]').click();