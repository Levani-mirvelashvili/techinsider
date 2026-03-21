document.addEventListener("DOMContentLoaded", function() {
    // 1. Create and Inject CSS (The Styles)
    const style = document.createElement('style');
    style.innerHTML = `
        .cookie-banner {
            position: fixed; bottom: 25px; right: 25px;
            max-width: 380px; background: #2d2d2d; color: #f0f0f0;
            padding: 24px; border-radius: 10px; border: 1px solid #444;
            box-shadow: 0 15px 35px rgba(0,0,0,0.4);
            font-family: 'FiraGO', sans-serif; z-index: 10000;
            display: none; opacity: 1; transition: opacity 0.5s ease;
        }
        .cookie-content p { font-size: 14px; line-height: 1.6; margin-bottom: 20px; font-weight: 300; }
        .cookie-buttons { display: flex; justify-content: flex-end; gap: 12px; }
        .btn-accept { 
            background: #e63946; color: #ffffff; border: none; padding: 10px 24px; 
            border-radius: 5px; font-weight: 700; text-transform: uppercase; 
            font-size: 12px; cursor: pointer; transition: 0.3s;
        }
        .btn-accept:hover { background: #bd2f3a; transform: translateY(-2px); }
        .btn-decline { 
            background: transparent; color: #999; border: 1px solid #555; 
            padding: 10px 18px; border-radius: 5px; font-size: 12px; cursor: pointer;
        }
    `;
    document.head.appendChild(style);

    // 2. Create and Inject the HTML Structure
    const bannerHTML = `
        <div id="cookie-notice" class="cookie-banner">
            <div class="cookie-content">
                <p>ჩვენ ვიყენებთ ქუქი-ფაილებს (Cookies) თქვენი გამოცდილების გასაუმჯობესებლად და ტრაფიკის გასაანალიზებლად. ღილაკზე „თანხმობა“ დაჭერით, თქვენ ეთანხმებით ჩვენს მიერ ქუქი-ფაილების გამოყენებას</p>
                <div class="cookie-buttons">
                    <button id="accept-cookies" class="btn-accept">თანხმობა</button>
                    <button id="decline-cookies" class="btn-decline">უარყოფა</button>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', bannerHTML);

    // 3. Logic for Showing/Hiding
    const cookieNotice = document.getElementById("cookie-notice");
    const acceptBtn = document.getElementById("accept-cookies");
    const declineBtn = document.getElementById("decline-cookies");

    if (!localStorage.getItem("cookieConsent")) {
        cookieNotice.style.display = "block";

        // Auto-hide after 30 seconds
        setTimeout(function() {
            cookieNotice.style.opacity = "0";
            setTimeout(() => { cookieNotice.style.display = "none"; }, 500);
        }, 30000); 
    }

    acceptBtn.onclick = function() {
        localStorage.setItem("cookieConsent", "accepted");
        cookieNotice.style.display = "none";
    };

    declineBtn.onclick = function() {
        localStorage.setItem("cookieConsent", "declined");
        cookieNotice.style.display = "none";
    };
});
