// script.js

let currentPage = 1;
const totalPages = 5; // 1 Cover + 3 Text Pages + 1 Blank Page

// Initialize the page state
document.addEventListener('DOMContentLoaded', () => {
    updatePageDisplay();
});

// Function to go to the next page
function nextPage() {
    if (currentPage < totalPages) {
        currentPage++;
        updatePageDisplay();
    }
}

// Function to go to the previous page
function prevPage() {
    if (currentPage > 1) {
        currentPage--;
        updatePageDisplay();
    }
}

// Update the visibility of pages and buttons
function updatePageDisplay() {
    // Hide all pages
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => {
        page.classList.remove('active');
    });

    // Show the current page
    const activePage = document.getElementById(`page-${currentPage}`);
    if (activePage) {
        activePage.classList.add('active');
    }

    // Update Button States
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    // Disable/Enable Prev Button
    if (currentPage === 1) {
        prevBtn.style.visibility = 'hidden';
    } else {
        prevBtn.style.visibility = 'visible';
    }

    // Disable/Enable Next Button (Optional: Hide at end if you want)
    if (currentPage === totalPages) {
        nextBtn.style.visibility = 'hidden'; // Hide next button on last page
    } else {
        nextBtn.style.visibility = 'visible';
    }
}

// Music Player Logic
function toggleMusic() {
    const music = document.getElementById('bgMusic');
    const btn = document.getElementById('musicBtn');

    // Check if music is paused or not loaded yet
    if (music.paused) {
        music.play()
            .then(() => {
                btn.textContent = "⏸ Pause Song";
                btn.style.background = "#ff9a9e";
                btn.style.color = "white";
            })
            .catch(error => {
                console.log("Error playing audio: ", error);
                alert("Please add an audio file named 'YOUR_SONG.mp3' to the folder!");
            });
    } else {
        music.pause();
        btn.textContent = "🎵 Play Song";
        btn.style.background = "white";
        btn.style.color = "#ff9a9e";
    }
}
// YES BUTTON
function showLove() {
    document.getElementById("loveModal").style.display = "flex";
}

// CLOSE MODAL
function closeLove() {
    document.getElementById("loveModal").style.display = "none";
}

// NO BUTTON MOVE
function moveNo() {
    const noBtn = document.querySelector(".no-btn");
    const container = document.querySelector(".choice-buttons");

    const maxX = container.offsetWidth - noBtn.offsetWidth;
    const maxY = container.offsetHeight - noBtn.offsetHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";
}
// Atur posisi awal tombol saat page dibuka
window.addEventListener("load", () => {
    const noBtn = document.querySelector(".no-btn");
    const container = document.querySelector(".choice-buttons");

    // Ambil posisi awal dari layout flex
    const rect = noBtn.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    const left = rect.left - containerRect.left;
    const top = rect.top - containerRect.top;

    // Ubah jadi absolute TANPA pindah posisi
    noBtn.style.position = "absolute";
    noBtn.style.left = left + "px";
    noBtn.style.top = top + "px";
});