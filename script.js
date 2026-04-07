/**
 * Configuration & Constants
 */
const weddingDate = new Date("May 16, 2026 15:00:00").getTime();
const GOOGLE_SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxHISoEwWmi2WdkAE1CZ26nBSHMTtD8jR80YjPAAO3X_nr4eN_wmsNZTsCkzj4fldDNlQ/exec";

// CLEANED GUEST LIST
const guestList = [
   "Sean Angelo Zaquita", "Ma. Vanessa Quiano", "Gina Mepieza", "Ronnie Zaquita", "Ruel Jubay",
    "Andie Cienne Zaquita", "Xahliah Angela Jubay", "Jhon David Cos", "Gemma Dilao",
    "Jerry Mepieza", "Flordelita Mepieza", "Darna Mepieza", "Jocelyn Pateño", "Josephine Mangaoang",
    "Edward Mangaoang", "Janus Mangaoang", "Ron Xyrelle Zaquita", "Yvette Quenee Franco", "Evelyn Mangubat",
    "Jovyl Cayme", "Mark Joshua Mepieza", "Jenny Lynn Monzon", "Jannel Mepieza", "Ma. Jodilyn Pateño",
    "Danica Pateño", "Anthony Jere Mepieza", "Joeven Christopher Dilao", "Jeric Mepieza", "Jaybe Monzon",
    "Christian Paul Zaquita", "Teresita Franco", "Eduardo Franco", "Leonilo Poleño", "Nora Poleño",
    "Reynaldo Panal", "Mary Grace Poleño", "Evelyn Dolar", "Josefine Udan",
    "Jonathan Evangelista", "Grace Vidal", "Seankim Vidal", "Daichi Matsushiro",
    "Christian Cabrera", "Jemanh Moron", "Renil Poyaoan", "King Cedrick Orfano", "Reieniel Ocampo",
    "Charlie Reontoy", "Rose Ann Reontoy", "Emma Tiu", "Wilfredo Mapalo", "David Pinto",
    "Jacqueline Fermil", "Sonia Endaya", "Eduardo Endaya", "Jazmine Endaya", "Francisco De Jesus III",
    "Emmanuel Caturla", "Iris Caturla", "Filip Caturla", "Gladys Taningco", "Jason Ryan Toledo",
    "Angelica Gamo Toledo", "Ronald Sambilad", "Genelyn Sambilad",
    "Jessa Mondido", "Armin Licuanan", "Joshua Angelo Aguila", "John David Cruz", "Brenda lyn Balucas",
    "Randolph Ruga", "Roel Calderon", "Eunice Katrina Esguerra",
    "Richard Malapitan", "Nelen Pelayo", "Raulito Adorias", "Analor Mepieza", "Woodrow Dela Cruz Villarante",
    "Virginia Galvez", "Mauro Reniedo", "Jocelyn Alafriz", "Woodrow Villarante", "Rowginald Villarante",
    "Whenierose Maduro", "Merlin Discipulo", "Poljan Capitis", "Seo Reuy Castro",
    "Alexandra Cuanico", "Thea Andrea Salting", "Nancy Villorente",
    "Melissa Obieta", "Anna Dela Cruz", "Loise Ponciano", "Carlo Perez", "Jeriel John Cabo",
    "Roger Quiano", "Eleanor Quiano", "Maria Rogerlene Quiano", "Ma. Eloisa Torrecampo", "Aaron Torrecampo",
    "John Jomari Garcia", "Apolonia Garcia", "Ariel Garcia", "Geralyn Mercado", "John Vergel Legaspi",
    "Anthony Hernandez", "Alma Hernandez", "Erika Hernandez", "Abigail Antolin", "Victor Arquero",
    "Maricel Hernandez", "Georgina Daculan", "Ronald Quintos", "Luisa Berongoy", "Federico Taguiam",
    "Emmanuel Hernandez", "Wilma Trinidad", "Emmanuel Murillo", "Jennifer Ortega", "Jayson Aguirre",
    "Genette Aguirre", "Zane Matthew Aguirre", "Zak Mikelle Aguirre", "Gerardo Dapigran", "Marjenel Hernandez",
    "Myla Ocaña", "Mcroi Aguirre", "Erica Chastine Adajar", "Grace Baniqued", "Jolan Baniqued",
    "Blenda Pokan", "Trixia Mae Ombrog", "Ramilyn Mariano", "Johanz Mariano", "Lhady Veronica Anne Escudero",
    "Maria Victoria Escudero", "Rosemarie Dilao", "Gilboy Dilao", "Melody Fame Cuyahon", "Ed lallyn Sualog",
    "Mary Jane Benavidez", "Jalieson Asis", "Hazel Joy Padilla", "Jonelyn Aquino", "Reechel Mirano",
    "Marietta Ramos", "Margie Sacopla", "Ferdinand Sacopla", "Lovella Agaton", "Annaliza Hipolito",
    "Esmer Hipolito", "Rolando Bagro", "Ronel Verdida", "Ma. Prima Regalario", "Vincent Regalario",
    "Margie Champlon", "Marilyn Cepe", "Jerson Quiano", "Janice Cepe", "Glen Emmanuel Champlon",
    "Glen Champlon", "Moyra Mayor", "Charlene Casia", "Miriam Lambo Bermudez", "Jose Hernandez Bermudez Jr.",
    "Analy Jison", "Joseph Villamor", "Charlene Caja", "Janet Pantig", "Lea Abbygail Pantig",
    "Nyoky Hierco", "John Paul Sister", "Erma Cuerda", "Cornelio Ambulo", "Evelyn Ambulo", "Mary May Acutillar",
    "Carlo Cunanan", "Valen Cunanan", "Mark Joseph Villamar", "Jessica Poquiz", "Ma. Monica Modestano", "Noemi Mahusay",
    "Elma Sotto", "Emerson Arboleda", "Felix Villanueva", "Annalyne Alay-ay", "Ghie An Mercado", "Juan Mahusay",
    "Miksy Poja", "Hamid Sabuddin", "Kristoffer Ivan Paz", "Anson Aguirre", "Ghie an Mercado", "Christelle Enriquez",
    "Francis Rosanes Jr", "Andrea Policarpio", "Faye Irish Ogbac", "Lawrence Ogbac", "Airjay Agulto",
    "Carmela Agustin", "Darling opao", "Shelden Mesa", "Alejandro Laoag Jr", "Ryan Gumban", "Genesis Tagle", 
    "Arsenio Nastor", "Joemar Venus",  "John David Quitlong", "Richard Jay Gambalan", "Mark Anthony Serrano",
    "Ma. Teresa Salome Florentino", "Bianca Therese Florentino", "Evangeline Estrella", "Melanie Rebadomia",
    "Herminia Rebadomia", "Liwayway Rebadomia", "Mary Ic Escullar", "May Ann Rebadomia", "Jennifer Tenerife",
];

const bgMusic = document.getElementById('bgMusic');
const weddingVideo = document.getElementById('weddingVideo');
const musicBtn = document.getElementById('music-control');

// Video UI Elements
const playPauseBtn = document.getElementById('playPauseBtn');
const videoMuteBtn = document.getElementById('videoMuteBtn');
const progressBar = document.getElementById('progress-bar');
const progressContainer = document.querySelector('.progress-container');
const videoTime = document.getElementById('videoTime');

let musicWasPlaying = false;

/**
 * Optimized Intersection Observer
 */
const videoObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            weddingVideo.play().catch(e => console.log("Autoplay blocked"));
            weddingVideo.muted = false; 
            if(playPauseBtn) playPauseBtn.textContent = '⏸';
            
            if (bgMusic && !bgMusic.paused) {
                musicWasPlaying = true;
                bgMusic.pause();
                if (musicBtn) musicBtn.classList.add('muted');
            }
        } else {
            weddingVideo.pause();
            if(playPauseBtn) playPauseBtn.textContent = '▶';

            if (musicWasPlaying && bgMusic) {
                bgMusic.play();
                if (musicBtn) musicBtn.classList.remove('muted');
                musicWasPlaying = false;
            }
        }
    });
}, { threshold: 0.5 });

if (weddingVideo) videoObserver.observe(weddingVideo);

/**
 * Video Playback Control Logic
 */
if (weddingVideo && playPauseBtn) {
    playPauseBtn.addEventListener('click', () => {
        if (weddingVideo.paused) {
            weddingVideo.play();
            playPauseBtn.textContent = '⏸';
        } else {
            weddingVideo.pause();
            playPauseBtn.textContent = '▶';
        }
    });

    videoMuteBtn.addEventListener('click', () => {
        weddingVideo.muted = !weddingVideo.muted;
        videoMuteBtn.textContent = weddingVideo.muted ? '🔇' : '🔊';
    });

    weddingVideo.addEventListener('timeupdate', () => {
        const percent = (weddingVideo.currentTime / weddingVideo.duration) * 100;
        if (progressBar) progressBar.style.width = `${percent}%`;

        const mins = Math.floor(weddingVideo.currentTime / 60);
        const secs = Math.floor(weddingVideo.currentTime % 60);
        if (videoTime) videoTime.textContent = `${mins}:${secs < 10 ? '0' + secs : secs}`;
    });

    if (progressContainer) {
        progressContainer.addEventListener('click', (e) => {
            const rect = progressContainer.getBoundingClientRect();
            const pos = (e.clientX - rect.left) / rect.width;
            weddingVideo.currentTime = pos * weddingVideo.duration;
        });
    }
}

/**
 * Existing Functions (Entry, RSVP)
 */
function handleEntry() {
    const ua = navigator.userAgent || navigator.vendor || window.opera;
    const isMessenger = /FBAN|FBAV|Messenger/i.test(ua);
    const currentUrl = window.location.href;

    if (isMessenger) {
        if (/Android/i.test(ua)) {
            const chromeIntent = "intent://" + currentUrl.replace(/^https?:\/\//, "") + "#Intent;scheme=https;package=com.android.chrome;end";
            window.location.href = chromeIntent;
        } else if (/iPhone|iPad|iPod/i.test(ua)) {
            alert("For the best experience, please tap the three dots (···) and select 'Open in System Browser'.");
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

    const isInvited = guestList.some(guest => guest.trim().toLowerCase() === fullName.toLowerCase());
    
    if (!isInvited) {
        if(errorDisplay) {
            errorDisplay.style.display = 'block';
            errorDisplay.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        } else {
            alert(`Sorry, "${fullName}" was not found on the guest list.`);
        }
        return;
    }

    if(errorDisplay) errorDisplay.style.display = 'none';
    
    formContainer.style.display = 'none';
    document.body.classList.add('submitting'); 
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
        thankYouMsg.style.display = 'flex'; 

    } catch (error) {
        console.error('Error!', error.message);
        loadingContainer.style.display = 'none';
        document.body.classList.remove('submitting');
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
    // Input Formatting
    ['firstName', 'lastName', 'tableFirstName', 'tableLastName'].forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('input', function() { formatName(this); });
    });

    // Reveal Observer
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.15, rootMargin: "0px 0px -50px 0px" });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // FAQ Logic
    document.querySelectorAll('.faq-question').forEach(button => {
        button.addEventListener('click', () => {
            const faqItem = button.parentElement;
            document.querySelectorAll('.faq-item').forEach(item => {
                if (item !== faqItem) item.classList.remove('active');
            });
            faqItem.classList.toggle('active');
        });
    });

    // Countdown
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

// Table Data Mapping
const tableData = {
    "Sean Angelo Zaquita": "Special Seat",
    "Ma. Vanessa Quiano": "Special Seat",
"David Pinto":"VIP 1",
"Jacqueline Fermil":"VIP 1",
"Virginia Galvez":"VIP 1",
"Sonia Endaya":"VIP 1",
"Eduardo Endaya":"VIP 1",
"Iris Caturla":"VIP 1",
"Emmanuel Caturla":"VIP 1",
"Gladys Taningco":"VIP 1",
"Emma Tiu":"VIP 1",
"Francisco De Jesus III ":"VIP 1",
 "Roger Quiano":"VIP 2",
"Eleanor Quiano":"VIP 2",
"Miriam Lambo Bermudez":"VIP 2",
"Jose Hernandez Bermudez Jr.":"VIP 2",
"Luisa Berongoy":"VIP 2",
"Victor Arquero":"VIP 2",
"Annaliza Hipolito":"VIP 2",
"Esmer  Hipolito":"VIP 2",
"Margie Sacopla":"VIP 2",
"Ferdinand Sacopla":"VIP 2",
"Ronald Sambilad ":"VIP3",
"Genelyn Sambilad":"VIP3",
"Jason Ryan Toledo":"VIP3",
"Evelyn Dolar":"VIP3",
"Ma. Teresa Salome Florentino":"VIP3",
"Angelica Gamo Toledo":"VIP3",
"Jayson Ryan Toledo":"VIP3",
"Ryan Gumban":"VIP3",
"Edward Mangaoang":"VIP3",
"Josephine Mangaoang":"VIP3",
"Cornelio Ambulo":"VIP4",
"Evelyn Ambulo":"VIP4",
"Carlo Cunanan":"VIP4",
"Valen Cunanan":"VIP4",
"Maria Victoria Escudero":"VIP4",
"Lhady Veronica Anne Escudero":"VIP4",
"Marietta Ramos":"VIP4",
"Nelen Pelayo":"VIP4",
"Raulito Adorias":"VIP4",
"Eunice Katrina Esguerra":"VIP4",
"Maria Rogerlene Quiano ":"Table 1",
"Ma. Eloisa Torrecampo ":"Table 1",
"Aaron Torrecampo":"Table 1",
"John Jomari Garcia":"Table 1",
"Apol Garcia ":"Table 1",
"Ariel Garcia":"Table 1",
"Marjenel Hernandez ":"Table 1",
"Emmanuel Hernandez":"Table 1",
"Blenda Pokan":"Table 1",
"Jerson Quiano":"Table 1",
"Joemar Venus":"Table 1",
"Gina Mepieza":"Table 2",
"Jerry Mepieza":"Table 2",
"Gemma Dilao":"Table 2",
"Flordelita Mepieza":"Table 2",
"Analor Mepieza":"Table 2",
"Darna Mepieza":"Table 2",
"Jocelyn Pateno":"Table 2",
"Evelyn Mangubat":"Table 2",
"Ruel Jubay":"Table 2",
"Woodrow Dela Cruz Villarante":"Table 2",
"Nancy Villorente":"Table 2",
"Jonathan Evangelista":"Table 2",
"Anthony Hernandez ":"Table 3",
"Alma Hernandez ":"Table 3",
"Erika Hernandez ":"Table 3",
"Georgina Daculan":"Table 3",
"Jayson Aguirre":"Table 3",
"Genette Aguirre":"Table 3",
"Zane Matthew Aguirre":"Table 3",
"Zak Mikelle Aguirre":"Table 3",
"Gerardo Dapigran":"Table 3",
"Anson Aguirre":"Table 3",
"Maricel Hernandez":"Table 3",
 "Andie Cienne Zaquita":"Table 4",
"Xahliah Angela Jubay":"Table 4",
"Jhon David Cos":"Table 4",
"Janus Mangaoang":"Table 4",
"Alexandra Cuanico":"Table 4",
"Jenny Lynn Monzon":"Table 4",
"Joeven Christopher Dilao":"Table 4",
"Ma. Jodilyn Pateno":"Table 4",
"Danica Pateno":"Table 4",
" Jeric Mepieza":"Table 4",
"Mark Joshua Mepieza":"Table 4",
"John Paul Sister":"Table 5",
"Erma Cuerda":"Table 5",
"Analy Jison":"Table 5",
"Herminia Hernandez":"Table 5",
"Liwayway Rebadomia":"Table 5",
"Mary IC Escullar":"Table 5",
"Melanie Rebadomia":"Table 5",
"May Ann Rebadomia":"Table 5",
"Richard Jay Gambalan":"Table 5",
"Mcroi Aguirre":"Table 5",
"Erica Chastine Adajar":"Table 5",
"Filip Caturla":"Table 6",
"Faye Irish Ogbac":"Table 6",
"Lawrence Ogbac":"Table 6",
"Jazmine Endaya":"Table 6",
"Bianca Therese Florentino":"Table 6",
"Charlie Reontoy":"Table 6",
"Rose Ann Reontoy":"Table 6",
"Jovyl Cayme":"Table 6",
"Thea Andrea Salting":"Table 6",
"Ron Xyrelle Zaquita":"Table 6",
"Yvette Quenee Franco":"Table 6",
"Christian Paul Zaquita":"Table 6",
  "Jalieson Asis":"Table 7",
"Jonelyn Aquino":"Table 7",
"Ghie An Mercado":"Table 7",
"Charles Michael Poja":"Table 7",
"Carmela Agustin":"Table 7",
"Darling opao":"Table 7",
"Airjay Agulto":"Table 7",
"Shelden Mesa":"Table 7",
"Genesis Tagle":"Table 7",
"Christelle Enriquez":"Table 7",
"Mary May Acutillar":"Table 7", 
   "Jessa Mondido":"Table 8", 
   "Armin Licuanan":"Table 8",
   "Joshua Angelo Aguila":"Table 8",
"John David Cruz":"Table 8",
"Brenda lyn Balucas":"Table 8",
"Randolph Ruga":"Table 8",
"Roel Calderon":"Table 8",
"John David Quitlong":"Table 8",
"Melissa Obieta":"Table 8",
"Anna Dela Cruz":"Table 8",
"Loise Ponciano":"Table 8",
"Carlo Perez":"Table 8",
"Grace Vidal":"Table 9",
"Seankim Vidal":"Table 9",
"Daichi Matsushiro":"Table 9",
"Christian Cabrera":"Table 9",
"Jemmanh Moron":"Table 9",
"Renil Poyaoan":"Table 9",
"King Cedrick Orfano":"Table 9",
"Reieniel Ocampo":"Table 9",
"Mark Anthony Serrano":"Table 9",
"Jannel Mepieza":"Table 9",
"Anthony Jere Mepieza":"Table 9",
"Jaybe Monzon":"Table 9",
"Grace Baniqued ":"Table 10",
"Joland Baniqued":"Table 10",
"Moyra Mayor":"Table 10",
"Charlene Casia":"Table 10",
"Joseph Villamor":"Table 10",
"Charlene Caja":"Table 10",
"Ronel Verdida":"Table 10",
"Mark Joseph Villamar":"Table 10",
"Ma. Monica Modestano":"Table 10",
"Annalyne Alay-ay ":"Table 10",
"Felix Villanueva":"Table 10",
"Ramilyn Mariano":"Table 11",
"Johanz Mariano":"Table 11",
"Geralyn Mercado ":"Table 11",
"John Vergel Legaspi ":"Table 11",
"Ronald Quintos":"Table 11",
"Emerson Arboleda":"Table 11",
"Jennifer Ortega ":"Table 11",
"Janette Pantig":"Table 11",
"Lea Abigal Pantig":"Table 11",
"Nyoky Hierco ":"Table 11",
"Poljan Capitis":"Table 11",
"Seo Reuy Castro":"Table 11",
"Teresita Franco":"Table 12",
"Eduardo Franco":"Table 12",
"Leonilo Poleño":"Table 12",
"Nora Poleño":"Table 12",
"Reynaldo Panal":"Table 12",
"Mary Grace Poleño":"Table 12",
"Josefine Udan":"Table 12",
"Evangeline Estrella":"Table 12",
"Woodrow Villarante":"Table 12",
"Rowginald Villarante":"Table 12",
"Whenierose Maduro":"Table 12",
"Merlin Discipulo":"Table 12",
"Myla Ocaña ":"Table 13",
"Rosemarie Dilao ":"Table 13",
"Gilboy Dilao ":"Table 13",
"Jessica Poquiz":"Table 13",
"Lovella Agaton":"Table 13",
"Hamid Sabuddin":"Table 13",
"Elma Sotto":"Table 13",
"Melody Fame Cuyahon":"Table 13",
"Mary Jane Benavidez ":"Table 13",
"Rolando Bagro":"Table 13",
"Reechel Mirano":"Table 13",
"Ed lallyn Sualog":"Table 14",
"Ma. Prima Regalario":"Table 14",
"Vincent Regalario":"Table 14",
"Wilma C. Trinidad":"Table 14",
"Emmanuel Murillo":"Table 14",
"Trixia Mae Ombrog":"Table 14",
"Kristoffer Ivan Paz":"Table 14",
"Abigail Antolin":"Table 14",
"Francis Rosanes Jr":"Table 14",
"Andrea Policarpio":"Table 14",
"Arsenio Nastro":"Table 14",

    // ... add others here
};

/**
 * FIXED Table Finder Section
 */
function findMyTable() {
    const fName = document.getElementById('tableFirstName').value.trim();
    const lName = document.getElementById('tableLastName').value.trim();
    const fullName = `${fName} ${lName}`.trim();
    
    const resultBox = document.getElementById('table-result-box');
    const errorBox = document.getElementById('table-not-found');
    const loadingBox = document.getElementById('table-loading');
    const searchControls = document.getElementById('table-search-controls');
    const displayGuestName = document.getElementById('displayGuestName');
    const displayTableNumber = document.getElementById('displayTableNumber');

    if (!fName || !lName) {
        alert("Please enter both your First and Last name.");
        return;
    }

    searchControls.style.display = 'none';
    errorBox.style.display = 'none';
    resultBox.style.display = 'none';
    resultBox.classList.remove('show');
    loadingBox.style.display = 'flex';

    setTimeout(() => {
        loadingBox.style.display = 'none';
        const matchedName = Object.keys(tableData).find(
            key => key.toLowerCase() === fullName.toLowerCase()
        );

        if (matchedName) {
            displayGuestName.innerText = matchedName;
            displayTableNumber.innerText = tableData[matchedName];
            resultBox.style.display = 'block';
            setTimeout(() => {
                resultBox.classList.add('show');
                resultBox.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }, 50);
        } else {
            errorBox.style.display = 'block';
        }
    }, 1200);
}

function resetTableSearch() {
    const resultBox = document.getElementById('table-result-box');
    const errorBox = document.getElementById('table-not-found');
    const searchControls = document.getElementById('table-search-controls');
    
    resultBox.classList.remove('show');
    setTimeout(() => {
        resultBox.style.display = 'none';
        errorBox.style.display = 'none';
        searchControls.style.display = 'block';
        document.getElementById('tableFirstName').value = "";
        document.getElementById('tableLastName').value = "";
    }, 300);
}
