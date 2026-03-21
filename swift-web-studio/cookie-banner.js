document.addEventListener("DOMContentLoaded", function() {
    // 1. Create and Inject the CSS
    const style = document.createElement('style');
    style.innerHTML = `
        .cookie-banner {
            position: fixed !important;
            bottom: 25px !important;
            left: 25px !important;
            max-width: 400px !important;
            background: #2d2d2d !important;
            padding: 24px !important;
            border-radius: 12px !important;
            border: 1px solid #444 !important;
            box-shadow: 0 15px 35px rgba(0,0,0,0.4) !important;
            font-family: 'FiraGO', sans-serif !important;
            z-index: 10000 !important;
            display: none;
            opacity: 1;
            transition: opacity 0.5s ease !important;
        }
        .cookie-container { display: flex !important; align-items: flex-start !important; gap: 15px !important; }
        .cookie-icon { flex-shrink: 0 !important; margin-top: 5px !important; }
        .cookie-content p { 
            color: #f0f0f0 !important; 
            font-size: 13px !important; 
            line-height: 1.5 !important; 
            margin: 0 0 15px 0 !important; 
            font-weight: 300 !important;
            text-align: left !important;
        }
        .cookie-buttons { display: flex !important; justify-content: flex-end !important; gap: 10px !important; }
        .btn-accept { 
            background: #e63946 !important; color: #ffffff !important; border: none !important; 
            padding: 10px 20px !important; border-radius: 5px !important; font-weight: 700 !important; 
            cursor: pointer !important; text-transform: uppercase !important; font-size: 11px !important;
        }
        .btn-decline { 
            background: transparent !important; color: #999 !important; border: 1px solid #555 !important; 
            padding: 10px 15px !important; border-radius: 5px !important; cursor: pointer !important; font-size: 11px !important;
        }
        @media (max-width: 480px) {
            .cookie-banner { left: 10px !important; right: 10px !important; bottom: 10px !important; max-width: none !important; }
        }
    `;
    document.head.appendChild(style);

    // 2. Create and Inject the HTML
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

    // 3. Banner Logic
    const cookieNotice = document.getElementById("cookie-notice");
    if (!localStorage.getItem("cookieConsent")) {
        cookieNotice.style.display = "block";
        setTimeout(() => {
            cookieNotice.style.opacity = "0";
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
