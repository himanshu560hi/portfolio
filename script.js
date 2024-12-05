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
  





  // button for go back top 
  // Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when scrolling down
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
});






















// Function to open the payment modal with service details
let selectedService = {};

function openPaymentModal(serviceName, price) {
    selectedService = { serviceName, price };
    document.getElementById('service-title').innerText = serviceName;
    document.getElementById('service-description').innerText = `You are about to pay for the ${serviceName} service.`;
    document.getElementById('service-price').innerText = `Price: ${price} Rs`;
    document.getElementById('payment-modal').style.display = 'flex';
}

// Close the payment modal
function closePaymentModal() {
    document.getElementById('payment-modal').style.display = 'none';
}

// Razorpay Payment Gateway Integration
function initiatePayment() {
    const options = {
        key: "rzp_live_BcEBmCs2qOb2HB", // Replace with your Razorpay Key ID
        amount: selectedService.price * 100, // Amount in paisa
        currency: "INR", // Change to INR if you're using Indian Rupees
        name: "Freelancing Services",
        description: `Payment for ${selectedService.serviceName}`,
        image: "your-logo-url", // Optional: add logo URL
        handler: function (response) {
            alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
            closePaymentModal();
        },
        // prefill: {
        //     name: "Customer Name",  You can prefill the customer's name, email, etc.
        //     email: "customer@example.com",
        //     contact: "987654xxxx",
        // },
        theme: {
            color: "#007bff",
        },
    };

    const rzp = new Razorpay(options);

    rzp.on("payment.failed", function (response) {
        alert(`Payment failed! Reason: ${response.error.description}`);
    });

    rzp.open();
}
