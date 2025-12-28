document.addEventListener('DOMContentLoaded', () => {
    
    // 1. SALUDADOR Y ESCRITURA
    const elemento = document.getElementById('typing-text');
    if (elemento) {
        const hora = new Date().getHours();
        const frase = (hora >= 18 || hora <= 6) 
            ? "Welcome to the Night City. Follow all the news: 'Songs', 'Shows', 'Merch'..." 
            : "Waiting for The Midnight... Follow all the news: 'Songs', 'Shows', 'Merch'...";

        elemento.innerText = ''; 
        let i = 0;
        function escribir() {
            if (i < frase.length) {
                elemento.innerHTML += frase.charAt(i);
                i++;
                setTimeout(escribir, 50);
            }
        }
        escribir();
    }

    // 2. APARICIÓN SUAVE (SCROLL REVEAL)
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    });

    document.querySelectorAll('.section, .card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'all 0.8s ease-out';
        observer.observe(el);
    });
});

// Función simple para el botón (sin memoria)
function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}