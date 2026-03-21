
<style>
/* Container - Modern Grey */
.cookie-banner {
    position: fixed;
    bottom: 25px;
    right: 25px;
    max-width: 380px;
    background: #2d2d2d; /* Professional Charcoal Grey */
    color: #f0f0f0;
    padding: 24px;
    border-radius: 10px;
    box-shadow: 0 15px 35px rgba(0,0,0,0.4);
    font-family: 'FiraGO', sans-serif;
    z-index: 10000;
    border: 1px solid #444; /* Subtle border for depth */
}

.cookie-content p {
    font-size: 14px;
    line-height: 1.6;
    margin-bottom: 20px;
    font-weight: 300;
}

/* Button Layout */
.cookie-buttons {
    display: flex;
    justify-content: flex-end;
    gap: 12px;
}

/* The Primary Red Button */
.btn-accept {
    background: #e63946; /* Strong Red */
    color: #ffffff;
    border: none;
    padding: 10px 24px;
    border-radius: 5px;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 12px;
    letter-spacing: 0.5px;
    transition: all 0.3s ease;
    cursor: pointer;
}

.btn-accept:hover {
    background: #bd2f3a; /* Darker red on hover */
    transform: translateY(-2px);
    box-shadow: 0 4px 10px rgba(230, 57, 70, 0.3);
}

/* The Decline Button */
.btn-decline {
    background: transparent;
    color: #999;
    border: 1px solid #555;
    padding: 10px 18px;
    border-radius: 5px;
    font-size: 12px;
    cursor: pointer;
    transition: 0.3s;
}

.btn-decline:hover {
    background: #3d3d3d;
    color: #fff;
    border-color: #777;
}
</style>

<div id="cookie-notice" class="cookie-banner">
    <div class="cookie-content">
        <p>ჩვენ ვიყენებთ ქუქი-ფაილებს (Cookies) თქვენი გამოცდილების გასაუმჯობესებლად და ტრაფიკის გასაანალიზებლად. ღილაკზე „თანხმობა“ დაჭერით, თქვენ ეთანხმებით ჩვენს მიერ ქუქი-ფაილების გამოყენებას</p>
        <div class="cookie-buttons">
            <button id="accept-cookies" class="btn-accept">თანხმობა</button>
            <button id="decline-cookies" class="btn-decline">უარყოფა</button>
        </div>
    </div>
</div>

<script>
document.addEventListener("DOMContentLoaded", function() {
    const cookieNotice = document.getElementById("cookie-notice");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    // 1. Show banner if no choice has been made
    if (!localStorage.getItem("cookieConsent")) {
        cookieNotice.style.display = "block";

        // 2. Auto-hide after 30 seconds
        setTimeout(function() {
            // Smoothly fade out before hiding
            cookieNotice.style.transition = "opacity 0.5s ease";
            cookieNotice.style.opacity = "0";
            
            setTimeout(() => {
                cookieNotice.style.display = "none";
            }, 500); // Wait for fade animation to finish
        }, 30000); 
    }

    // 3. Manual Accept
    acceptBtn.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "accepted");
        cookieNotice.style.display = "none";
    });

    // 4. Manual Decline
    declineBtn.addEventListener("click", function() {
        localStorage.setItem("cookieConsent", "declined");
        cookieNotice.style.display = "none";
    });
});
</script>
