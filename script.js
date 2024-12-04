// Toggle navigation menu visibility
// const hamburger = document.getElementById('hamburger');
// const navLinks = document.getElementById('nav-links');

// hamburger.addEventListener('click', () => {
//   navLinks.classList.toggle('active');
// });


var typed = new Typed('#element', {
  strings: ['Web Developer', 'Software Engineer', 'Aspiring Artificial Intelligence'],
  typeSpeed: 100,
  loop: true,
  });



  document.addEventListener('DOMContentLoaded', () => {
    // Get all the tab buttons and content
    const tabButtons = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
  
    // Function to change active tab
    function changeTab(tab) {
      // Remove the active class from all buttons and contents
      tabButtons.forEach(button => button.classList.remove('active'));
      tabContents.forEach(content => content.classList.remove('active'));
  
      // Add the active class to the selected tab and its corresponding content
      const activeTabContent = document.querySelector(`.tab-content.${tab}`);
      const activeTabButton = document.querySelector(`.tab-btn[data-tab="${tab}"]`);
  
      activeTabButton.classList.add('active');
      activeTabContent.classList.add('active');
    }
  
    // Event listener for each tab button
    tabButtons.forEach(button => {
      button.addEventListener('click', () => {
        const tab = button.getAttribute('data-tab');
        changeTab(tab);  // Switch to the selected tab
      });
    });
  
    // Set default tab to Education on page load
    changeTab('education');
  });
  









//for auto hide slidebar on click

  document.addEventListener('DOMContentLoaded', () => {
    const navbarToggle = document.getElementById('hamburger');
    const navbarLinks = document.getElementById('nav-links');
    const navItems = navbarLinks.querySelectorAll('a'); // Select all navigation links
  
    // Toggle menu visibility
    navbarToggle.addEventListener('click', () => {
      navbarLinks.classList.toggle('active');
    });
  
    // Hide menu when a link is clicked
    navItems.forEach((item) => {
      item.addEventListener('click', () => {
        navbarLinks.classList.remove('active');
      });
    });
  });
  