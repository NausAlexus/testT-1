document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('gameModal');
    const closeBtn = document.getElementById('closeModal');
    const gameFrame = document.getElementById('gameFrame');
    const playButtons = document.querySelectorAll('.play-button');
    
    playButtons.forEach(button => {
        button.addEventListener('click', function() {
            const iframeContainer = this.previousElementSibling;
            const iframeSrc = iframeContainer.getAttribute('data-src');
            
            gameFrame.src = iframeSrc;
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        });
    });
    
    closeBtn.addEventListener('click', function() {
        gameFrame.src = '';
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            gameFrame.src = '';
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
});