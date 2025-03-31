document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkMode = document.getElementById("toggleDarkMode");
    const body = document.body;
    
    // Cek status mode gelap di LocalStorage
    if (localStorage.getItem("dark-mode") === "enabled") {
        body.classList.add("dark-mode");
        toggleDarkMode.innerText = "Light Mode ☀️"; 
    }

    // Event listener untuk tombol Dark Mode
    toggleDarkMode.addEventListener("click", function () {
        body.classList.toggle("dark-mode");

        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("dark-mode", "enabled");
            toggleDarkMode.innerText = "Light Mode ☀️";
        } else {
            localStorage.setItem("dark-mode", "disabled");
            toggleDarkMode.innerText = "Dark Mode 🌙";
        }
    });
});

// Periksa Jawaban
document.getElementById("checkAnswers").addEventListener("click", function () {
    let correctAnswers = 0;
    const answers = { q1: "correct", q2: "correct", q3: "correct" };

    Object.keys(answers).forEach(question => {
        let selected = document.querySelector(input[name="${question}"],checked);
        if (selected && selected.value === answers[question]) {
            correctAnswers++;
        }
    });

    document.getElementById("result").textContent =
        correctAnswers === 3 ? "🌟 Semua jawaban benar!" :
        correctAnswers === 2 ? "😊 Bagus! Hampir benar semua!" :
        "😢 Masih ada yang salah! Coba lagi.";
});