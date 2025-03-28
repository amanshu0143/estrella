function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    localStorage.setItem("cartCount", cart.length); // Store count in localStorage
  }
function renderCart() {
    const cartDiv = document.getElementById('cart');
    const cart1Div = document.getElementById('cart1'); // Get the new cart1 element
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    cartDiv.innerHTML = '';
    cart1Div.innerHTML = ''; // Clear the cart1 div
    let totalPrice = 0; // Initialize total price

 cart.forEach((item, index) => {
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
    
        // Add item price to total price
        totalPrice += item.price;
    
        // Dynamically adjust the image path
        const adjustedImgPath = item.img.replace(/^(\.\.\/)+/, "../../");
    
        cartItem.innerHTML = `
            <img src="${adjustedImgPath}" alt="${item.name}">
            <div id="description-box1">
                <div><h2>${item.name}</h2></div>
                <div><h2>Size: ${item.size}</h2></div>
                <div><h2>Price: Rs${item.price}</h2></div>
                <div><h2>Product Code: ${item.productCode}</h2></div>
            </div>
            <button onclick="removeFromCart(${index})"><h2>X</h2></button>
        `;
        cartDiv.appendChild(cartItem);
    });
    updateCartCount(); // Update cart count here
    
    // Create a total price div
    const totalDiv = document.createElement('div');
    totalDiv.className = 'total-price';
    
    let discount = 0;
    let discountText = 'Discount'; // Default text is 'Discount'
    let deliveryFee = 70; // Default delivery fee is Rs 70
    let deliveryFeeText = 'Rs 70'; // Default delivery fee text
    
    // Apply discount based on total price
    if (totalPrice >= 2599 && totalPrice <= 4999) {
        discount = 300; // Flat 300 discount
        discountText = 'Flat Rs 300 Discount'; // Change text to "Flat Rs 300 Discount"
    } else if (totalPrice > 4999) {
        discount = totalPrice * 0.1; // 10% discount
        discount = Math.floor(discount); // Ensure discount is a whole number (rounded down)
        discountText = 'Discount 10%'; // Change text to "Discount 10%"
    }

    // If the total price is over Rs 1699, delivery is free
    if (totalPrice > 1699) {
        deliveryFee = 0; // Set delivery fee to Rs 0
        deliveryFeeText = '<h2>Free</h2>'; // Text for free delivery
    }

    // Final total after applying discount and delivery fee
    const finalPrice = totalPrice - discount + deliveryFee;

    totalDiv.innerHTML = `
        <div id="Order-Summery"> 
            <h2>Order Summary</h2>
        </div>
        <div id="order-price"> 
            <div id="order-price1"><h2>Sub-Total</h2></div>
            <div id="order-price2"><h2>: Rs${totalPrice}</h2></div>
        </div>
        <div id="order-price-discount"> 
            <div id="order-price-discount-left"><h2>${discountText}</h2></div>
            <div id="order-price-discount-right"><h2>: Rs${discount}</h2></div>
        </div>
        <!-- Delivery fee showing 70 with a crossed sign when delivery is free -->
        <div id="order-price-delivery">  
            <div id="order-price-delivery-left"><h2>Delivery</h2></div>
            <div id="order-price-delivery-right">
                ${deliveryFee === 0 ? `<h2 style="text-decoration: line-through;">Rs 70</h2>` : `<h2>:Rs 70</h2>`} 
           
            </div>
        </div>
            <div id="order-price-discount1">  </div>
            <div id="order-price-discount1">  </div>
            <div id="order-price-discount1">  </div>
        <div id="final-order-price"> 
            <div id="final-order-price1"><h2>Total</h2></div>
            <div id="final-order-price2"><h2>: Rs${finalPrice}</h2></div>
        </div>
        <div id="after-order-buttons">
          <button id="checkout" onclick="checkout()"><h1>Checkout</h1></button>
           <button id="shopping" onclick="goToProducts()"> <h2>Continue Shop</h2></button>
          </div>
    `;
    cart1Div.appendChild(totalDiv); // Add total price to cart1Div
}




function removeFromCart(index) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('cart', JSON.stringify(cart));
    renderCart();
}

function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        alert("Checkout successful! Total items: " + cart.length);
        localStorage.removeItem('cart'); // Clear the cart after checkout
         updateCartCount(); // Ensure cart count updates when an item is removed
        renderCart();
    }
}

function goToProducts() {
    window.location.href = 'http://127.0.0.1:5501/clothing/html/landingpage.html';
}

// Initial render of the cart
renderCart();


function checkout() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart.length === 0) {
        alert("Your cart is empty!");
    } else {
        // Ask for confirmation
        const confirmed = confirm("Do you want to proceed to checkout?");
        if (confirmed) {
            showCheckoutForm();
        }
    }
}

///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
///////////////////////////////////
// DETAILS FORM
function showCheckoutForm() {
    // Get the checkout overlay and form container
    const overlay = document.getElementById('checkout-overlay');
    const formContainer = document.getElementById('checkout-form-container');

    // Create the form content
    formContainer.innerHTML = `
       
        <form id="checkoutForm" onsubmit="submitForm(event)">
     
            <div id="placeorder">
        
                <h1>Order Details</h1>
                  <div id="close-button" onclick="closeCheckoutForm()">X</div>
            </div>
            <div class="details">
                <label for="name">Name:</label><br>
                <input id="input" type="text" id="name" required><br><br>
            </div>
            <div class="details">
                <label for="name">Phone no:</label><br>
                <input id="input" type="number" id="number" required><br><br>
            </div>
            <div class="details">
                <label for="email">Email:</label><br>
                <input id="input" type="email" id="email" required><br><br>
            </div>
            <div class="details1">
                <label for="address">Address:</label><br>
                <textarea id="address" required></textarea><br><br>
            </div>
            <div class="details2">
                <div class="state-city">
                    <div class="details">
                        <label id="label1" for="name">State:</label><br>
                        <input id="state" type="text" id="name" required><br><br>
                    </div>
                </div>
                <div class="state-city">
                    <div class="details">
                        <label id="label1" for="name">City:</label><br>
                        <input id="city" type="text" id="name" required><br><br>
                    </div>
                </div>
                <div class="state-city">
                    <div class="details">
                        <label id="label1" for="name">Pin code:</label><br>
                        <input id="pin" type="text" id="name" required><br><br>
                    </div>
                </div>
            </div>
            <div class="details">
                <label for="name">Landmark:</label><br>
                <input id="input" type="text" id="name" required><br><br>
            </div>
             <!-- Notification Section with Terms and Conditions -->
            <div class="notification-section">
                <h2>Important Information</h2>
                <h4>Please record a video while opening your parcel. This helps us verify any damage, stains, broken tags, or other issues with the product and ensures quick resolution if needed.</h4>
                <h4>Please record a video while opening your parcel. This helps us verify any damage, stains, or issues with the product. Do not break any tags, as once broken, the dress will not be replaceable.</h4>
                <h4>Important Information</h4>
                <label>
                    <input type="checkbox" id="agreeCheckbox" required>
                    I have read and agree to the Terms and Conditions
                </label>
            </div>
            <div class="details3">
                <button id="submit" type="submit"><h1>Place Order</h1></button>
            </div>
        </form>
    `;

    // Show the overlay
    overlay.classList.add('active');
}

// Function to close the form when submitting
function submitForm(event) {
    event.preventDefault(); // Prevent form submission
    alert("Your Order is placed successfully! We will contact you on whatsapp for further details");

    // Clear the cart after checkout
    localStorage.removeItem('cart'); 
    renderCart(); // Re-render the cart (should be empty now)

    // Close the overlay
    const overlay = document.getElementById('checkout-overlay');
    overlay.classList.remove('active');
}

// Function to close the form when submitting
function closeCheckoutForm() {
    const overlay = document.getElementById('checkout-overlay');
    overlay.classList.remove('active'); // This will hide the overlay and form
}
