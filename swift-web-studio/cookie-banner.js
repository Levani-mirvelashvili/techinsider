document.addEventListener("DOMContentLoaded", function() {
    // 1. Inject Styles (Positioned to the LEFT)
    const style = document.createElement('style');
    style.innerHTML = `
        .cookie-banner {
            position: fixed; 
            bottom: 25px; 
            left: 25px; /* MOVED TO LEFT */
            max-width: 400px; 
            background: #2d2d2d; 
            color: #f0f0f0;
            padding: 24px; 
            border-radius: 12px; 
            border: 1px solid #444;
            box-shadow: 0 15px 35px rgba(0,0,0,0.4);
            font-family: 'FiraGO', sans-serif; 
            z-index: 10000;
            display: none; 
            opacity: 1; 
            transition: opacity 0.5s ease, transform 0.5s ease;
            transform: translateY(0);
        }
        .cookie-container { display: flex; align-items: flex-start; gap: 15px; }
        .cookie-icon { flex-shrink: 0; margin-top: 5px; }
        .cookie-content p { font-size: 13px; line-height: 1.5; margin-bottom: 15px; font-weight: 300; }
        .cookie-buttons { display: flex; justify-content: flex-end; gap: 10px; }
        .btn-accept { 
            background: #e63946; color: #fff; border: none; padding: 10px 20px; 
            border-radius: 5px; font-weight: 700; cursor: pointer; transition: 0.3s;
            text-transform: uppercase; font-size: 11px;
        }
        .btn-accept:hover { background: #bd2f3a; transform: translateY(-2px); }
        .btn-decline { 
            background: transparent; color: #999; border: 1px solid #555; 
            padding: 10px 15px; border-radius: 5px; cursor: pointer; font-size: 11px;
        }
        
        /* Mobile adjustment for iPhone 15 and smaller screens */
        @media (max-width: 480px) {
            .cookie-banner {
                left: 10px;
                right: 10px;
                bottom: 10px;
                max-width: none;
            }
        }
    `;
    document.head.appendChild(style);

    // 2. Inject HTML (Remains the same)
    const bannerHTML = `
        <div id="cookie-notice" class="cookie-banner">
            <div class="cookie-container">
                <div class="cookie-icon">
                    <svg width="35" height="35" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.27455 20.9097 6.80375 19.1414 5" stroke="#e63946" stroke-width="2" stroke-linecap="round"/>
                        <circle cx="8.5" cy="8.5" r="1.5" fill="#e63946"/>
                        <circle cx="15.5" cy="12.5" r="1.5" fill="#e63946"/>
                        <circle cx="10.5" cy="15.5" r="1.5" fill="#e63946"/>
                    </svg>
                </div>
                <div class="cookie-content">
                    <p>ჩვენ ვიყენებთ ქუქი-ფაილებს (Cookies) თქვენი გამოცდილების გასაუმჯობესებლად. ღილაკზე „თანხმობა“ დაჭერით, თქვენ ეთანხმებით მათ გამოყენებას.</p>
                    <div class="cookie-buttons">
                        <button id="accept-cookies" class="btn-accept">თანხმობა</button>
                        <button id="decline-cookies" class="btn-decline">უარყოფა</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    document.body.insertAdjacentHTML('beforeend', bannerHTML);

    // 3. Logic (Same functionality)
    const cookieNotice = document.getElementById("cookie-notice");
    if (!localStorage.getItem("cookieConsent")) {
        cookieNotice.style.display = "block";
        setTimeout(() => {
            cookieNotice.style.opacity = "0";
            cookieNotice.style.transform = "translateY(20px)"; // Subtle slide out
            setTimeout(() => { cookieNotice.style.display = "none"; }, 500);
        }, 30000); 
    }

    document.getElementById("accept-cookies").onclick = () => {
        localStorage.setItem("cookieConsent", "accepted");
        cookieNotice.style.display = "none";
    };
    document.getElementById("decline-cookies").onclick = () => {
        localStorage.setItem("cookieConsent", "declined");
        cookieNotice.style.display = "none";
    };
});
