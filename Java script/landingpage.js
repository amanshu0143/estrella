window.addEventListener("scroll", function () {
  let navbar = document.getElementById("navbar");
  if (window.scrollY > 0) { // Change 50 to adjust when it sticks
      navbar.classList.add("sticky");
  } else {
      navbar.classList.remove("sticky");
  }
});



document.addEventListener("DOMContentLoaded", () => {
  const loadingElement = document.getElementById("loading");
  loadingElement.style.opacity = "0"; // Smooth fade-out

  setTimeout(() => {
    loadingElement.style.display = "none";
  }, 1000); // 1-second delay for fade-out
});


document.addEventListener("DOMContentLoaded", () => {
  const cartCountSpan = document.getElementById("cart-count");
  const cartCount = localStorage.getItem("cartCount") || 0;
  cartCountSpan.textContent = cartCount;
});




var swiper = new Swiper(".mySwiper", {
    slidesPerView: 4.5,
   
    spaceBetween: 5,
    grabCursor: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });
  var swiper = new Swiper(".mySwiper1", {
    slidesPerView: 3,
   
        spaceBetween: 4,
    grabCursor: true,
    autoplay: {
      delay: 6500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  var swiper = new Swiper(".swiper1", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  
  });
  
  var swiper = new Swiper(".swiper2", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 13500,
      disableOnInteraction: false,
    },
  
  });
  var swiper = new Swiper(".swiper3", {
    spaceBetween: 0,
    centeredSlides: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
  
  });
  function toggleContent4() {
    const content = document.getElementById('toggleContent4');
    
    // Toggle the "show" class
    content.classList.toggle('show');
  }
 // Close the menu when clicking outside of the toggle content or the hamburger menu
document.addEventListener('click', function(event) {
  const content = document.getElementById('toggleContent4');
  const menuButton = document.getElementById('mobile-navbar-img');
  
  // If the click is outside the menu or the hamburger icon, hide the menu
  if (!menuButton.contains(event.target) && !content.contains(event.target)) {
      content.classList.remove('show');
  }
});
  function toggleContent5() {
    const content = document.getElementById('toggleContent5');
    
    // Toggle the "show" class
    content.classList.toggle('show');
  }
  function toggleContent6() {
    const content = document.getElementById('toggleContent6');
    
    // Toggle the "show" class
    content.classList.toggle('show');
  }
  function toggleContent7() {
    const content = document.getElementById('toggleContent7');
    
    // Toggle the "show" class
    content.classList.toggle('show');
  }
  function toggleContent8() {
    const content = document.getElementById('toggleContent8');
    
    // Toggle the "show" class
    content.classList.toggle('show');
  }
  function toggleContent9() {
    const content = document.getElementById('toggleContent9');
    
    // Toggle the "show" class
    content.classList.toggle('show');
  }
  function toggleContent10() {
    const content = document.getElementById('toggleContent10');
    
    // Toggle the "show" class
    content.classList.toggle('show');
  }
  



  document.getElementById('subscribeForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const emailInput = document.getElementById('email');
    const message = document.getElementById('message');

    // Simple email validation
    const email = emailInput.value;
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailPattern.test(email)) {
        // Replace this with your subscription logic (e.g., API call)
        message.textContent = 'Thank you for subscribing! Check your inbox for updates.';
        emailInput.value = ''; // Clear input
    } else {
        message.textContent = 'Please enter a valid email address.';
    }
});
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
///////////////////////////////////////////////////////////////////////////////////
//////////////////     G S A P SECTION      ///////////////////////////////////////



gsap.fromTo("#block10-mid-product-img img", 
  {
    scale: 1.1, // Initial zoomed-in state (slightly zoomed in)
  }, 
  {
    scale: 1, // Final state (original size)
    duration: 2, // Animation duration (time in seconds, adjust as needed)
    scrollTrigger: {
      trigger: "#block10-up", // Element that triggers the animation
      scroller: "body", // The scroll container (body)
      start: "top 70%", // Trigger when the top of the element reaches 20% of the viewport height
      
      once: true, // Ensure the animation happens once when the trigger point is passed
    }
  }
);


gsap.fromTo("#block10-up h3", 
  {
    opacity: 0, // Start as invisible
    y: 50, // Start 50px below its original position
  }, 
  {
    opacity: 1, // Fade in to full opacity
    y: 0, // Move to its original position (0px offset)
    duration: 1, // Animation duration (time in seconds, adjust as needed)
    scrollTrigger: {
      trigger: "#block10-up", // Element that triggers the animation
      scroller: "body", // The scroll container (body)
      start: "top 95%", // Trigger when the top of the element reaches 95% of the viewport height
      
      once: true, // Ensure the animation happens once when the trigger point is passed
    }
  }
);







// Check if the screen width is 360px or smaller
if (window.matchMedia("(max-width: 360px)").matches) {
  // Animation for #block10-mid-product-img img
  gsap.fromTo("#block10-mid-product-img img", 
    {
      scale: 1.1, // Initial zoomed-in state (slightly zoomed in)
    }, 
    {
      scale: 1, // Final state (original size)
      duration: 2, // Animation duration (time in seconds, adjust as needed)
      scrollTrigger: {
        trigger: "#block10-up", // Element that triggers the animation
        scroller: "body", // The scroll container (body)
        start: "top 85%", // Trigger when the top of the element reaches 20% of the viewport height
    
        once: true, // Ensure the animation happens once when the trigger point is passed
      }
    }
  );

 
 
  // Animation for #block10-up h3
  gsap.fromTo("#block10-up h3", 
    {
      opacity: 0, // Start as invisible
      y: 50, // Start 50px below its original position
    }, 
    {
      opacity: 1, // Fade in to full opacity
      y: 0, // Move to its original position (0px offset)
      duration: 1.5, // Animation duration (time in seconds, adjust as needed)
      scrollTrigger: {
        trigger: "#block10-up", // Element that triggers the animation
        scroller: "body", // The scroll container (body)
        start: "top 95%", // Trigger when the top of the element reaches 95% of the viewport height
        
        once: true, // Ensure the animation happens once when the trigger point is passed
      }
    }
  );

 
}
document.querySelectorAll('input').forEach(input => {
    input.addEventListener('input', function() {
        // Remove any potentially harmful characters like <, >, and script tags
        this.value = this.value.replace(/<script.*?>.*?<\/script>/gi, '')
                               .replace(/<\/?[^>]+>/gi, '')  // Remove HTML tags
                               .replace(/javascript:/gi, '');  // Remove JavaScript protocol
    });
});
// Elegant page transition with fade-out effect
window.addEventListener("load", function () {
  setTimeout(() => { 
      document.getElementById("loading").style.opacity = "0"; // Smooth fade-out

      setTimeout(() => {
          document.getElementById("loading").style.display = "none";
          document.getElementById("content").style.display = "block";
          document.getElementById("content").style.opacity = "1"; // Smooth fade-in
      }, 1000); // 1-second delay for fade-out
  }, 2500); // 2.5-second delay for elegance
});
