// Esperar a que el HTML cargue completamente
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.getElementById('mobile-menu');
    const navLinks = document.getElementById('nav-links');

    // 1. Abrir y cerrar el menú al tocar el icono de hamburguesa
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        
        // Opcional: Cambiar el icono de "barras" a una "X" al abrir
        const icon = menuToggle.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });

    // 2. Cerrar el menú automáticamente cuando se hace clic en un enlace
    // Si no hacemos esto, el menú se queda abierto después de saltar a una sección
    const links = document.querySelectorAll('.nav-links a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            // Restaurar el icono de barras
            const icon = menuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        });
    });
});
