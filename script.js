/**
 * Configuration & Constants
 */
const weddingDate = new Date("May 16, 2026 15:00:00").getTime();
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxHISoEwWmi2WdkAE1CZ26nBSHMTtD8jR80YjPAAO3X_nr4eN_wmsNZTsCkzj4fldDNlQ/exec";

// CLEANED GUEST LIST (Removed accidental leading/trailing spaces)
const guestList = [
    "Sean Angelo Zaquita", "Ma. Vanessa Quiano", "Gina Mepieza", "Ronnie Zaquita", "Ruel Jubay",
    "Andie Cienne Zaquita", "Xahliah Angela Jubay", "Jhon David Cos", "Gemma Dilao",
    "Jerry Mepieza", "Flordelita Mepieza", "Darna Mepieza", "Jocelyn Pateño", "Josephine Mangaoang",
    "Edward Mangaoang", "Janus Mangaoang", "Ron Xyrelle Zaquita", "Yvette Quenee Franco", "Evelyn Mangubat",
    "Jovyl Cayme", "Mark Joshua Mepieza", "Jenny Lynn Monzon", "Jannel Mepieza", "Ma. Jodilyn Pateño",
    "Danica Pateño", "Anthony Jere Mepieza", "Joeven Christopher Dilao", "Jeric Mepieza", "Jaybe Monzon",
    "Christian Paul Zaquita", "Teresita Franco", "Eduardo Franco", "Leonilo Poleño", "Nora Poleño",
    "Reynaldo Panal", "Mary Grace Poleño", "Abegail Soriano", "Evelyn Dolar", "Josefine Udan",
    "Jonathan Evangelista", "Baby Catalo", "Grace Vidal", "Seankim Vidal", "Daichi Matsushiro",
    "Christian Cabrera", "Jemanh Moron", "Renil Poyaoan", "King Cedrick Orfano", "Reieniel Ocampo",
    "Charlie Reontoy", "Rose Ann Reontoy", "Emma Tiu", "Wilfredo Mapalo", "Dr. David Pinto",
    "Jacqueline Fermil", "Sonia Endaya", "Eduardo Endaya", "Dr. Jazmine Endaya", "Francisco Aure De Jesus III",
    "Emmanuel Caturla", "Iris Caturla", "Filip Caturla", "Gladys Taningco", "Jayson Ryan Toledo",
    "Angelica Gamo Toledo", "Ronald Sambilad", "Genelyn Sambilad", "Isagani Orbita", "Eliza Pallet",
    "Jessa Mondido", "Armin Licuanan", "Joshua Angelo Aguila", "John David Cruz", "Brenda lyn Balucas",
    "Randolph Ruga", "Jefferson Wissen Dela Cruz", "Roel Calderon", "Nelson Garcia", "Eunice Katrina Esguerra",
    "Richard Malapitan", "Nelen Pelayo", "Raulito Adorias", "Analor Mepieza", "Woodrow Dela Cruz Villarante",
    "Virginia Galvez", "Mauro Reniedo", "Jocelyn Alafriz", "Woodrow Villarante", "Rowginald Villarante",
    "Whenierose Maduro", "Merlin District", "Poljan Capitis", "Seo Reuy Castro", "May Mahusay",
    "Rowell Mahusay", "Alexandra Cuanico", "Marco Salting", "Thea Andrea Salting", "Nancy Villorente",
    "Melissa Obieta", "Anna Dela Cruz", "Loise Ponciano", "Carlo Perez", "Jeriel John Cabo",
    "Roger Quiano", "Eleanor Quiano", "Maria Rogerlene Quiano", "Ma. Eloisa Torrecampo", "Aaron Torrecampo",
    "John Jomari Garcia", "Apol Garcia", "Ariel Garcia", "Geralyn Mercado", "John Vergel Legaspi",
    "Anthony Hernandez", "Alma Hernandez", "Erika Hernandez", "Abigail Antolin", "Victor Archer",
    "Maricel Hernandez", "Georgina Daculan", "Ronald Quintos", "Luisa Berongoy", "Federico Taguiam",
    "Emmanuel Hernandez", "Wilma C. Trinidad", "Emmanuel Murillo", "Jennifer Ortega", "Jayson Aguirre",
    "Genette Aguirre", "Zane Matthew Aguirre", "Zak Mikelle Aguirre", "Gerardo Dapigran", "Marjenel Hernandez",
    "Myla Ocaña", "Mcroi Aguirre", "Erica Chastine Adajar", "Grace Baniqued", "Joland Baniqued",
    "Blenda Pokan", "Trixia Mae Ombrog", "Ramilyn Mariano", "Johanz Mariano", "Lhady Veronica Anne Escudero",
    "Maria Victoria Escudero", "Rosemarie Dilao", "Gilboy Dilao", "Melody Fame Cuyahon", "Edlalyn Sualog",
    "Mary Jane Benavidez", "Jalieson Asis", "Hazel Joy Padilla", "Jonelyn Aquino", "Reechel Mirano",
    "Marietta Ramos", "Margie Sacopla", "Ferdinand Sacopla", "Lovella Agaton", "Annaliza Hipolito",
    "Esmer Hipolito", "Rolando Bagro", "Ronel Verdida", "Ma. Prima Regalario", "Vincent Regalario",
    "Margie Champlon", "Marilyn Cepe", "Jerson Quiano", "Janice Cepe", "Glen Emmanuel Champlon",
    "Glen Champlon", "Moyra Mayor", "Charlene Casia", "Miriam Lambo Bermudez", "Jose Hernandez Bermudez Jr.",
    "Analy Jison", "Joseph Villamor", "Charlene Caja", "Janette Pantig", "Lea Abigal Pantig",
    "Nyoky Hierco", "John Paul Sister", "Erma Cuerda", "Cornelio Ambulo", "Evelyn Ambulo",
    "Carlo Cunanan", "Valen Cunanan", "Mark Joseph Villamar", "Jessica Poquiz", "Ma. Monica Modestano",
    "Elma Sotto", "Emerson Arboleda", "Felix Villanueva", "Annalyne Alay-ay", "Ghie An Mercado",
    "Charles Michael Poja", "Ryan Jolampong", "Hamid Sabuddin", "Kristoffer Ivan Paz", "Anson Aguirre",
    "Francis Rosanes Jr", "Onel Hernandez", "Andrea Policarpio", "Khaila Racelis", "Bryan Jimenez",
    "Carmela Agustin", "Darling opao", "Shelden Mesa", "Juan Mahusay", "Normi Mahusay", "Jan Ellesse Senen", 
    "Sheryl Lou Apuhin", "Arsenio Nastor", "Marlon Flore", "Charelyn Mullaneda", "Jeffrey Gaden", "Joemar Venus",
];

const bgMusic = document.getElementById('bgMusic');
const musicBtn = document.getElementById('music-control');
const scrollToTopBtn = document.getElementById("scrollToTop");

function handleEntry() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isMessenger = /FBAN|FBAV|Messenger/i.test(ua);
    const currentUrl = window.location.href;

    if (isMessenger) {
        if (/Android/i.test(ua)) {
            const chromeIntent = "intent://" + currentUrl.replace(/^https?:\/\//, "") + "#Intent;scheme=https;package=com.android.chrome;end";
            window.location.href = chromeIntent;
        } else if (/iPhone|iPad|iPod/i.test(ua)) {
            alert("For the best experience (and to hear the music!), please tap the three dots (···) at the top right and select 'Open in System Browser'.");
            startSite();
        }
    } else {
        startSite();
    }
}

function startSite() {
    const overlay = document.getElementById('overlay');
    document.body.classList.remove('locked');
    overlay.style.transform = 'translateY(-100%)';
    overlay.style.opacity = '0';

    if (bgMusic) {
        bgMusic.play().catch(() => console.log("Music waiting for interaction."));
        if (musicBtn) musicBtn.classList.add('playing');
    }

    setTimeout(() => {
        overlay.style.display = 'none';
        overlay.style.visibility = 'hidden';
    }, 1200);
}

async function validateRSVP() {
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('guestEmail').value.trim();
    const attendance = document.getElementById('attendance').value;
    const comment = document.getElementById('guestComment').value.trim();
    const errorDisplay = document.getElementById('not-on-list-msg');
    
    const fullName = `${firstName} ${lastName}`.trim();
    const formContainer = document.getElementById('rsvp-form-container');
    const loadingContainer = document.getElementById('rsvp-loading');
    const thankYouMsg = document.getElementById('thank-you-msg');

    if (!firstName || !lastName || !email) {
        alert("Please fill in First Name, Last Name, and Email.");
        return;
    }

    // Checking guest list (added trim to the guest list items just in case)
    const isInvited = guestList.some(guest => guest.trim().toLowerCase() === fullName.toLowerCase());
    
    if (!isInvited) {
        if(errorDisplay) {
            errorDisplay.style.display = 'block';
            errorDisplay.scrollIntoView({ behavior: 'smooth' });
        } else {
            alert(`Sorry, "${fullName}" was not found on the guest list. Please contact the couple.`);
        }
        return;
    }

    if(errorDisplay) errorDisplay.style.display = 'none';
    formContainer.style.display = 'none';
    loadingContainer.style.display = 'flex';

    try {
        await fetch(GOOGLE_SCRIPT_URL, {
            method: 'POST',
            mode: 'no-cors', 
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: fullName,
                email: email,
                attendance: attendance,
                message: comment
            })
        });

        loadingContainer.style.display = 'none';
        thankYouMsg.style.display = 'block'; 
        thankYouMsg.scrollIntoView({ behavior: 'smooth' });

    } catch (error) {
        console.error('Error!', error.message);
        loadingContainer.style.display = 'none';
        formContainer.style.display = 'block';
        alert("Connection error. Please try again.");
    }
}

function formatName(input) {
    input.value = input.value.split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

function toggleMusic() {
    if (bgMusic.paused) {
        bgMusic.play();
        musicBtn.classList.replace('muted', 'playing');
    } else {
        bgMusic.pause();
        musicBtn.classList.replace('playing', 'muted');
    }
}

    document.addEventListener("DOMContentLoaded", () => {
    // --- ADD THIS BLOCK START ---
    const firstNameInput = document.getElementById('firstName');
    const lastNameInput = document.getElementById('lastName');

    if (firstNameInput) {
        firstNameInput.addEventListener('input', function() { formatName(this); });
    }
    if (lastNameInput) {
        lastNameInput.addEventListener('input', function() { formatName(this); });
    }
    // --- ADD THIS BLOCK END ---

    // ... rest of your existing revealObserver and countdown code ...
});
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) item.classList.remove('active');
            });
            faqItem.classList.toggle('active');
        });
    });

    setInterval(() => {
        const distance = weddingDate - new Date().getTime();
        if (distance > 0) {
            document.getElementById("days").innerText = String(Math.floor(distance / 86400000)).padStart(2, '0');
            document.getElementById("hours").innerText = String(Math.floor((distance % 86400000) / 3600000)).padStart(2, '0');
            document.getElementById("mins").innerText = String(Math.floor((distance % 3600000) / 60000)).padStart(2, '0');
            document.getElementById("secs").innerText = String(Math.floor((distance % 60000) / 1000)).padStart(2, '0');
        }
    }, 1000);
});

window.onscroll = () => {
    if (scrollToTopBtn) {
        scrollToTopBtn.style.display = (window.scrollY > 400) ? "block" : "none";
    }
};

if (scrollToTopBtn) {
    scrollToTopBtn.onclick = () => window.scrollTo({ top: 0, behavior: 'smooth' });
}



