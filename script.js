function filterVideos(category) {
    // 1. Obtener todas las tarjetas y botones
    const cards = document.querySelectorAll('.project-card');
    const buttons = document.querySelectorAll('.filter-btn');

    // 2. Actualizar el estilo del botón activo
    buttons.forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Encontrar el botón que fue clicado y ponerle la clase active
    event.target.classList.add('active');

    // 3. Filtrar las tarjetas
    cards.forEach(card => {
        // Si la categoría es vacía, muestra todas las tarjetas (mostrar todo)
        if (category === '') {
            card.classList.remove('hidden');
        } else {
            // Verifica si la tarjeta tiene la categoría seleccionada
            if (card.getAttribute('data-category') === category) {
                card.classList.remove('hidden');
            } else {
                card.classList.add('hidden');
            }
        }
    });
}

