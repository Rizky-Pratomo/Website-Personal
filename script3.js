document.addEventListener("DOMContentLoaded", function () {
    const toggleDarkMode = document.getElementById("toggleDarkMode");
    const body = document.body;
    
   // Cek status mode gelap di LocalStorage
   if (localStorage.getItem("dark-mode") === "enabled") {
    body.classList.add("dark-mode");
    toggleDarkMode.innerText = "Light Mode ☀️"; // Ikon matahari untuk mode terang
}

// Event listener untuk tombol Dark Mode
toggleDarkMode.addEventListener("click", function () {
    body.classList.toggle("dark-mode");

    // Simpan status Dark Mode ke LocalStorage
    if (body.classList.contains("dark-mode")) {
        localStorage.setItem("dark-mode", "enabled");
        toggleDarkMode.innerText = "Light Mode☀️"; // Mode terang
    } else {
        localStorage.setItem("dark-mode", "disabled");
        toggleDarkMode.innerText = "Dark Mode 🌙"; // Mode gelap
    }
});
});